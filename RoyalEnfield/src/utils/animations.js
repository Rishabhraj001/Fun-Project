// src/utils/animations.js
// Central place for every reusable GSAP animation used across the site.
// Components import only what they need — keeps timelines consistent
// and avoids re-writing the same tween twice.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Simple fade + rise-in, used for headings, paragraphs, cards.
 */
export const fadeUp = (target, { delay = 0, y = 40, duration = 1, trigger } = {}) => {
  return gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? { trigger, start: 'top 85%', toggleActions: 'play none none reverse' }
        : undefined,
    }
  );
};

/**
 * Staggered reveal for a group of elements (cards, pills, list items).
 */
export const staggerReveal = (targets, { trigger, stagger = 0.12, y = 50 } = {}) => {
  return gsap.fromTo(
    targets,
    { opacity: 0, y, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      stagger,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? { trigger, start: 'top 80%', toggleActions: 'play none none reverse' }
        : undefined,
    }
  );
};

/**
 * Splits a text node into individual <span> characters/words for stagger
 * animation without needing an extra dependency (GSAP SplitText is a paid
 * plugin). Words are wrapped, not characters, to keep this lightweight.
 */
export const splitTextToWords = (element) => {
  if (!element || element.dataset.split === 'true') return element.querySelectorAll('.word');
  const text = element.textContent;
  element.dataset.split = 'true';
  element.innerHTML = text
    .split(' ')
    .map((word) => `<span class="word" style="display:inline-block;overflow:hidden;"><span style="display:inline-block;">${word}</span></span>`)
    .join(' ');
  return element.querySelectorAll('.word > span');
};

/**
 * Text stagger reveal — pairs with splitTextToWords.
 */
export const textReveal = (element, { trigger, delay = 0 } = {}) => {
  const words = splitTextToWords(element);
  return gsap.fromTo(
    words,
    { yPercent: 120 },
    {
      yPercent: 0,
      duration: 0.9,
      delay,
      stagger: 0.04,
      ease: 'power4.out',
      scrollTrigger: trigger
        ? { trigger, start: 'top 85%', toggleActions: 'play none none reverse' }
        : undefined,
    }
  );
};

/**
 * Magnetic button effect — the element drifts slightly toward the cursor.
 * Call inside a useEffect and return the cleanup function.
 */
export const attachMagneticButton = (el, strength = 0.35) => {
  if (!el) return () => {};
  const handleMove = (e) => {
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: relX * strength,
      y: relY * strength,
      duration: 0.4,
      ease: 'power2.out',
    });
  };
  const handleLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  };
  el.addEventListener('mousemove', handleMove);
  el.addEventListener('mouseleave', handleLeave);
  return () => {
    el.removeEventListener('mousemove', handleMove);
    el.removeEventListener('mouseleave', handleLeave);
  };
};

/**
 * Button ripple on click — purely CSS-driven, this just spawns the node.
 */
export const spawnRipple = (event) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
};

/**
 * Parallax a layer against scroll — useful for background art / glows.
 */
export const parallaxLayer = (target, { trigger, speed = 0.3 } = {}) => {
  return gsap.to(target, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};
