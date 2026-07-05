import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './CTA.css';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-reveal',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );

      gsap.to('.cta-noodle-bg', {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'none',
      });

      gsap.to(btnRef.current, {
        scale: 1.06,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="final-cta">
      <span className="cta-noodle-bg">🍜</span>
      <div className="container cta-content">
        <span className="section-eyebrow cta-reveal">Get Cooking</span>
        <h2 className="cta-title cta-reveal">Ready To Cook Happiness?</h2>
        <p className="cta-sub cta-reveal">Grab a pack, boil some water, and let the magic begin.</p>
        <a ref={btnRef} href="#hero" className="btn btn-primary cta-btn magnetic cta-reveal">
          Cook Happiness Now →
        </a>
      </div>
    </section>
  );
}
