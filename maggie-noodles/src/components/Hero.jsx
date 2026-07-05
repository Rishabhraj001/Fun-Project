import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const floaters = [
  { emoji: '🌶️', className: 'f1' },
  { emoji: '🥕', className: 'f2' },
  { emoji: '🟢', className: 'f3' },
  { emoji: '🧅', className: 'f4' },
  { emoji: '🌽', className: 'f5' },
  { emoji: '🌿', className: 'f6' },
  { emoji: '🍜', className: 'f7' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const packRef = useRef(null);
  const floatRefs = useRef([]);
  const steamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        titleRef.current.querySelectorAll('.line-inner'),
        { yPercent: 120, rotate: 6 },
        { yPercent: 0, rotate: 0, duration: 1.3, stagger: 0.12 }
      )
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7')
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo(
          packRef.current,
          { scale: 0.6, opacity: 0, rotate: -8 },
          { scale: 1, opacity: 1, rotate: 0, duration: 1.4, ease: 'elastic.out(1, 0.75)' },
          '-=1.1'
        )
        .fromTo(
          floatRefs.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'back.out(2)' },
          '-=0.9'
        );

      // continuous floating motion for ingredients
      floatRefs.current.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -22 : 22,
          x: i % 3 === 0 ? 12 : -12,
          rotate: i % 2 === 0 ? 8 : -8,
          duration: 3 + (i % 4),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // pack gentle bob
      gsap.to(packRef.current, {
        y: -18,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // steam rising
      gsap.to(steamRef.current, {
        y: -60,
        opacity: 0,
        duration: 3,
        repeat: -1,
        ease: 'power1.out',
        stagger: { each: 0.6, repeat: -1 },
      });

      // parallax on scroll
      gsap.to(packRef.current, {
        yPercent: 30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-bg-shape', {
        yPercent: -20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero">
      <div className="hero-bg-shape shape-a" />
      <div className="hero-bg-shape shape-b" />

      <div className="container hero-inner">
        <div className="hero-text">
          <h1 ref={titleRef} className="hero-title">
            <span className="split-line"><span className="line-inner">Maggie —</span></span>
            <span className="split-line"><span className="line-inner">Every Bite</span></span>
            <span className="split-line"><span className="line-inner accent-text">Tells a Story</span></span>
          </h1>
          <p ref={subRef} className="hero-sub">
            Two minutes of magic. A lifetime of memories. Slurp into a bowl of
            comfort crafted from real ingredients and even realer nostalgia.
          </p>
          <div ref={ctaRef} className="hero-cta-wrap">
            <a href="#story" className="btn btn-primary magnetic">Cook Happiness →</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="steam-wrap">
            <span ref={steamRef} className="steam">~</span>
            <span className="steam steam-2">~</span>
            <span className="steam steam-3">~</span>
          </div>
          <img
            ref={packRef}
            className="hero-pack"
            src="https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=900&auto=format&fit=crop"
            alt="Maggie noodles bowl"
          />
          <div className="floaters">
            {floaters.map((f, i) => (
              <span
                key={f.className}
                ref={(el) => (floatRefs.current[i] = el)}
                className={`floater ${f.className}`}
              >
                {f.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
