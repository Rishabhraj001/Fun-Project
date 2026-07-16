import React, { useEffect, useRef, useState } from 'react';
import { useScrollVideo } from '../../hooks/useScrollVideo';
import { gsap, ScrollTrigger } from '../../utils/animations';
import './ScrollVideo.css';

const MOMENTS = [
  { title: 'Forged, Not Assembled', body: 'Every frame starts as raw steel before it becomes a motorcycle.' },
  { title: 'Tested on Real Roads', body: 'Not simulated. Not lab-only. Ridden across deserts, mountains, and monsoons.' },
  { title: 'A Century of Iteration', body: 'What you ride today carries the fingerprints of every rider before you.' },
];

const ScrollVideo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const momentRefs = useRef([]);
  const [activeMoment, setActiveMoment] = useState(0);

 useEffect(() => {
  const trigger = ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top top",
    end: "bottom bottom",
    scrub: true,

    onUpdate: (self) => {
      const progress = self.progress;

      const index = Math.min(
        MOMENTS.length - 1,
        Math.floor(progress * MOMENTS.length)
      );

      setActiveMoment(index);
    },
  });

  return () => trigger.kill();
}, []);

  useEffect(() => {
    momentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeMoment) {
        gsap.fromTo(
          el,
          { opacity: 0, filter: 'blur(8px)', y: 30 },
          { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power3.out' }
        );
      } else {
        gsap.to(el, { opacity: 0, filter: 'blur(8px)', y: -20, duration: 0.5, ease: 'power2.in' });
      }
    });
  }, [activeMoment]);

  return (
    <section className="scroll-video" ref={sectionRef}>
      <div className="scroll-video__sticky">
       <video
  ref={videoRef}
  className="scroll-video__video"
  src="/src/assets/videos/craft.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>
        <div className="scroll-video__overlay" />

        <div className="scroll-video__text-stack">
          {MOMENTS.map((moment, i) => (
            <div
              key={moment.title}
              ref={(el) => (momentRefs.current[i] = el)}
              className="scroll-video__moment"
              style={{ opacity: i === activeMoment ? 1 : 0 }}
            >
              <span className="eyebrow">{`0${i + 1}`}</span>
              <h2 className="scroll-video__moment-title">{moment.title}</h2>
              <p className="scroll-video__moment-body">{moment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
