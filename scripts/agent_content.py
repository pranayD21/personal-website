"""Generate the plain-text portfolio from the same HTML visitors read."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin
import re

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://pranaydogra.com/'

class Markdown(HTMLParser):
    def __init__(self):
        super().__init__()
        self.active = False
        self.skip = 0
        self.parts = []
        self.href = ''

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'main':
            self.active = True
        if not self.active:
            return
        if self.skip:
            if tag not in {'br', 'hr', 'img', 'input', 'meta', 'link'}:
                self.skip += 1
            return
        if tag in {'button', 'figure', 'pre'} or attrs.get('aria-hidden') == 'true':
            self.skip = 1
            return
        if tag in {'h1', 'h2', 'h3'}:
            self.parts.append('\n\n' + '#' * (int(tag[1]) + 1) + ' ')
        elif tag in {'p', 'div', 'article', 'section', 'aside', 'ul'}:
            self.parts.append('\n\n')
        elif tag == 'li':
            self.parts.append('\n- ')
        elif tag == 'br':
            self.parts.append(' ')
        elif tag == 'a':
            self.href = urljoin(BASE, attrs.get('href', ''))
            self.parts.append('[')

    def handle_endtag(self, tag):
        if not self.active:
            return
        if self.skip:
            self.skip -= 1
            return
        if tag == 'main':
            self.active = False
        elif tag == 'a':
            self.parts.append('](' + self.href + ')')
        elif tag in {'p', 'div', 'article', 'section', 'h1', 'h2', 'h3'}:
            self.parts.append('\n\n')

    def handle_data(self, value):
        if self.active and not self.skip:
            self.parts.append(value)

parser = Markdown()
parser.feed((ROOT / 'dist/index.html').read_text())
content = '# Pranay Dogra\n\n' + re.sub(r'\n[ \t]*\n(?:\s*\n)+', '\n\n', ''.join(parser.parts)).strip() + '\n'
(ROOT / 'dist/index.md').write_text(content)
(ROOT / 'dist/llms.txt').write_text('''# Pranay Dogra

> UC Berkeley engineering student. Research, software projects, publications, and experience.

## Portfolio

- [Complete portfolio](https://pranaydogra.com/index.md): Text of every section, including research, projects, STAR, experience, publications, links, contact, and site policies.
- [Resume PDF](https://pranaydogra.com/Pranay_Dogra_Resume.pdf): Full resume.
- [Website](https://pranaydogra.com/): Interactive portfolio with section navigation.
''')
