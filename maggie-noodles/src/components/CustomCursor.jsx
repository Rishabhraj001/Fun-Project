import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (window.matchMedia('(pointer: coarse)').matches) {
      dot.style.display = 'none';
      ring.style.display = 'none';
      return;
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(dot, { x: pos.x, y: pos.y, duration: 0.1 });
    };
    window.addEventListener('mousemove', onMove);

    gsap.ticker.add(() => {
      ringPos.x += (pos.x - ringPos.x) * 0.15;
      ringPos.y += (pos.y - ringPos.y) * 0.15;
      gsap.set(ring, { x: ringPos.x, y: ringPos.y });
    });

    const interactiveEls = () => document.querySelectorAll('a, button, .magnetic, .cursor-grow');
    const onEnter = () => gsap.to(ring, { scale: 2.4, duration: 0.3, background: 'rgba(255,138,0,0.12)' });
    const onLeave = () => gsap.to(ring, { scale: 1, duration: 0.3, background: 'transparent' });

    const attach = () => {
      interactiveEls().forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
