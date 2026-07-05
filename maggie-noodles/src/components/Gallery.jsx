import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=700&auto=format&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=700&auto=format&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=700&auto=format&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1645696301387-0e7b3e3da9ee?q=80&w=700&auto=format&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=700&auto=format&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?q=80&w=700&auto=format&fit=crop', tall: true },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
        gsap.to(el.querySelector('img'), {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="gallery">
      <div className="container">
        <div className="gallery-head">
          <span className="section-eyebrow">Gallery</span>
          <h2>A feast for the eyes</h2>
        </div>

        <div className="masonry">
          {images.map((im, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`masonry-item ${im.tall ? 'tall' : ''}`}
            >
              <img src={im.src} alt={`Maggie gallery ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
