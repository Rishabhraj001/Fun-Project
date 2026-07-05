import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // Count up 0 → 100
    const obj = { val: 0 };
    tl.to(obj, {
      val: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate() {
        if (countRef.current) countRef.current.textContent = Math.round(obj.val) + '%';
      },
    })
      .to(loaderRef.current, {
        yPercent: -110,
        duration: 0.9,
        ease: 'power4.inOut',
        delay: 0.1,
      });
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <span className="loader-logo">Maggie<span>.</span></span>
      <span ref={countRef} className="loader-count">0%</span>
    </div>
  );
}
