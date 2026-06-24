# India's Got Latent — Website

A React + GSAP fan/show site for *India's Got Latent*, hosted by Samay Raina.

## What's inside
- **Navbar** — logo left, Home/Episodes/About/Contact right, animates in with GSAP on load, collapses to a burger menu on mobile.
- **Hero** — your uploaded video as the full-bleed background, bold staggered headline rising from below, "Participate Now" + "Watch Episodes" CTAs, and a scrolling marquee ticker at the bottom.
- **Episodes** — scroll-revealed cards with Like / Dislike toggles, a 5-star rating control, and a Watch Now button.
- **About (Samay Raina)** — a tilting, gently bobbing portrait card with a sticker-style one-liner and quick facts.
- **Contact** — an audition application form with a submit confirmation state, plus footer.

## Run it locally
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
npm run preview
```

## Notes
- The hero video lives at `public/hero-video.mp4` — swap it for any other clip by replacing that file (keep the same filename, or update the `<source>` path in `src/components/Hero.jsx`).
- Colors, fonts, and copy are all easy to edit:
  - Design tokens: `src/index.css` (`:root` variables)
  - Copy/content: directly inside each component in `src/components/`
- Built with Vite, so there's no extra config needed beyond `npm install`.
