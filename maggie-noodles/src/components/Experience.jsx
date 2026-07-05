import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const texts = [
  'Boil the water',
  'Drop in the noodles',
  'Stir in the masala',
  'Let it simmer',
  'Slurp & savor',
];

export default function Experience() {
  const sectionRef = useRef(null);
  const noodleRef = useRef(null);
  const orbitRef = useRef([]);
  const textsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500',
          scrub: 1,
          pin: true,
        },
      });

      tl.to(noodleRef.current, { rotate: 360, duration: 5, ease: 'none' }, 0);

      orbitRef.current.forEach((el, i) => {
        tl.to(
          el,
          {
            motionPath: undefined,
            x: () => gsap.utils.random(-220, 220),
            y: () => gsap.utils.random(-180, 180),
            rotate: () => gsap.utils.random(-90, 90),
            duration: 5,
            ease: 'none',
          },
          0
        );
      });

      textsRef.current.forEach((el, i) => {
        tl.fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          i * 1
        ).to(el, { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, i * 1 + 0.8);
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="experience">
      <div className="experience-stage">
        <div className="exp-steam">~~~</div>
        <div ref={noodleRef} className="exp-noodle">🍜</div>
        <div className="exp-orbit">
          {['🌶️', '🥕', '🌽', '🧅', '🌿', '🟢'].map((e, i) => (
            <span key={i} ref={(el) => (orbitRef.current[i] = el)} className="exp-item">
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="exp-texts">
        {texts.map((t, i) => (
          <p key={t} ref={(el) => (textsRef.current[i] = el)} className="exp-text">
            {t}
          </p>
        ))}
      </div>
    </section>
  );
}
