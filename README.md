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

Animations respect reduced-motion preferences. The light/dark toggle stores only the chosen theme in local storage. With JavaScript disabled, all sections remain readable.

ASCII frame playback adapts [AnimASCII.js](https://github.com/TheGreatRambler/AnimASCII.js) (MIT) to render fixed-width text grids. The license is included in `dist/vendor/AnimASCII-LICENSE.txt`. The Campanile illustration is original.
