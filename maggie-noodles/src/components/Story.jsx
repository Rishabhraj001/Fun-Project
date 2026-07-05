import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Story.css';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgWrapRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.fromTo(
        textRef.current.querySelectorAll('.story-reveal'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        imgWrapRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="story">
      <div className="container story-grid">
        <div className="story-image-col">
          <div ref={imgWrapRef} className="story-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop"
              alt="Steaming bowl of noodles"
            />
          </div>
        </div>

        <div ref={textRef} className="story-text-col">
          <span className="section-eyebrow story-reveal">Our Story</span>
          <h2 className="story-title story-reveal">
            Born in a tiny kitchen, raised by millions of hungry hearts.
          </h2>
          <p className="story-reveal">
            It started with a simple question: how do you bottle up the
            comfort of a home-cooked meal and make it ready in two minutes
            flat? Decades later, the answer is still steaming in kitchens
            across the world — golden noodles, a swirl of masala, and a
            promise kept every single time.
          </p>
          <p className="story-reveal">
            Maggie isn't just instant noodles. It's the smell that pulls you
            into the kitchen after school, the late-night fix during exam
            week, the dish you taught your roommate to make, and the recipe
            you'll one day pass down to someone you love.
          </p>
          <p className="story-reveal">
            Every strand is crafted from real ingredients, slow-built flavor,
            and a whole lot of heart — because food this fast shouldn't have
            to compromise on taste.
          </p>
        </div>
      </div>
    </section>
  );
}
