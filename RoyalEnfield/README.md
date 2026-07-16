# Royal Enfield — Cinematic Site

A premium, scroll-driven React site inspired by Apple / Tesla / Porsche-style
product storytelling, built for Royal Enfield's motorcycle range.

## Stack

- React 18 (Vite)
- GSAP + ScrollTrigger (scroll-scrubbed video, pinning, stagger reveals)
- Swiper.js (bike carousel, testimonial slider)
- React Icons
- Plain CSS (one file per component, CSS variables for the design system)
- React Router (home page + optional `/bikes/:id` deep links)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

## Before it looks right, add your media

This project ships with **no binary assets** — code only. Two folders need
real files before the site looks the way it's designed to:

- `src/assets/videos/` — see the README inside; you need `hero.mp4` and `craft.mp4`.
- `src/assets/images/` — see the README inside; bike photography + review avatars.

Everything else — every headline, spec, price, colour swatch, review, and FAQ
answer — lives in three data files and needs no code changes to update:

- `src/data/bikes.js`
- `src/data/reviews.js`
- `src/data/faq.js`

## Project structure

```
src/
  components/       one folder per component, each with its own .css
  pages/            Home.jsx (full site) and BikePage.jsx (deep-linkable detail page)
  data/             bikes.js, reviews.js, faq.js — edit these to change content
  utils/animations.js   shared GSAP helpers (fade, stagger, text reveal, magnetic buttons, ripple)
  hooks/useScrollVideo.js   the scroll-scrubbing hook used by Hero and ScrollVideo
  assets/           videos/ and images/ — add your own media here
```

## Design tokens

Colors, type scale, spacing, and shadows are defined once in `src/index.css`
as CSS variables (`--color-void`, `--color-brass`, `--font-display`, etc.) —
change them there to re-theme the whole site.

## Notes on the scroll-video sections

`Hero` and `ScrollVideo` both use `useScrollVideo`, which ties a `<video>`
element's `currentTime` directly to scroll progress inside a pinned section
(via GSAP ScrollTrigger + a `requestAnimationFrame` smoothing loop), rather
than letting the browser autoplay it. Scrolling up reverses playback.
