import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ParallaxBanner.css';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBanner() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
      gsap.to(fgRef.current, {
        yPercent: -25,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.4 },
      });

      gsap.fromTo(
        titleRef.current.querySelectorAll('.banner-line-inner'),
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="parallax-banner">
      <div ref={bgRef} className="banner-bg">
        <img
          src="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1600&auto=format&fit=crop"
          alt="Bowl of noodles background"
        />
      </div>
      <div className="banner-overlay" />
      <div ref={fgRef} className="banner-fg">
        <img
          src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=900&auto=format&fit=crop"
          alt="Noodle bowl close up"
        />
      </div>
      <div className="banner-content">
        <h2 ref={titleRef} className="banner-title">
          <span className="split-line"><span className="banner-line-inner">Made</span></span>
          <span className="split-line"><span className="banner-line-inner">With</span></span>
          <span className="split-line"><span className="banner-line-inner accent-text">Love</span></span>
        </h2>
      </div>
    </section>
  );
}
