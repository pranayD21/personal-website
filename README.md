# Pranay Dogra

Personal website with a warm paper palette, animated ASCII illustrations, and short notes on engineering and research.

## Preview locally

Run `python3 -m http.server 8000 --directory dist`, then open `http://localhost:8000`.

## Edit

- `dist/index.html`: copy, links, and page sections
- `dist/style.css`: layout, colors, and typography
- `dist/app.js`: navigation and ASCII animations
- `dist/Pranay_Dogra_Resume.pdf`: downloadable resume

There are no build dependencies. Serve `dist` with any static host. Navigation uses URL fragments, so each section can be linked directly without server routing.

Animations respect reduced-motion preferences and include a persistent motion toggle. With JavaScript disabled, all sections remain readable.
