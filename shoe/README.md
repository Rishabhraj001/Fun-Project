# NIKA — Shoe Landing Page

A React + GSAP shoe landing page with:
- Animated navbar (slide-in + tick-mark logo draw-on)
- Hero section with shoe switcher — each shoe swap retints the shoe and
  crossfades the whole page's background theme with GSAP
- A single shared shoe element that scroll-travels from the hero down into
  the product section (GSAP ScrollTrigger, scrubbed)
- Product section with animated price counter and an "Add to bag" button

## Project structure

```
nika/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx              # orchestrates theme + scroll-linked shoe motion
   ├─ index.css
   ├─ data/
   │  └─ shoes.js           # 4 colorways/products
   └─ components/
      ├─ TickLogo.jsx
      ├─ Navbar.jsx
      ├─ ShoeSwitcher.jsx
      ├─ Hero.jsx
      ├─ ProductSection.jsx
      └─ ShoeSVG.jsx         # the sneaker illustration, recolored via props
```

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Notes / where to extend

- The sneaker is an SVG illustration (`ShoeSVG.jsx`) rather than a photo, so
  there are no external image assets to manage — swap in real product
  photography by replacing that component's render with an `<img>`/`<picture>`
  and driving its filters/position the same way.
- Colorways live in `src/data/shoes.js` — add a new object there (with a
  `bg`, `primary`, `secondary`, `sole`, `price`, etc.) and it shows up
  automatically in the switcher.
- The scroll-linked motion in `App.jsx` measures the hero and product "slots"
  on layout and drives the shared shoe with a single scrubbed ScrollTrigger,
  so it stays correct on resize.
