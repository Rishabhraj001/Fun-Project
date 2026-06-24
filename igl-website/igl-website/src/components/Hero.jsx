import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './hero.css'
import samay from './images/samay.png'
import alia from './images/alia.png'

const HEADLINE = ['NO FILTER.', 'NO MERCY.', 'JUST LATENT.']

export default function Hero() {
  const lineRefs = useRef([])
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const tickerRef = useRef(null)
  const videoref = useRef(null)
  const leftImgRef = useRef(null)
  const rightImgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 5.0 })
    tl.fromTo(
      lineRefs.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.15 }
    )
      .fromTo(
        leftImgRef.current,
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        }
      )

      .fromTo(
        rightImgRef.current,
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=1" // both images come together
      )

      .to(videoref.current, {
        opacity: 0.2,
        ease: 'none',
      })
      .fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.35')
      .fromTo(ctaRef.current, { y: 24, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.6)' }, '-=0.3')




    gsap.to(tickerRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 16,
      ease: 'none',
    })
  }, [])

  return (
    <section id="home" className="hero">
      <video className="hero__video" autoPlay muted loop playsInline ref={videoref}>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero__scrim" />


      <div className="hero__content container">

        <p className="eyebrow">Streaming the chaos · Hosted by Samay Raina</p>
        <div className="hero__images">

          <img
            ref={leftImgRef}
            className="hero__side-img hero__side-img-left"
            src={alia}
            alt="left"
          />

          <h1 className="hero__headline">
            {HEADLINE.map((line, i) => (
              <span className="hero__line-wrap" key={line}>
                <span
                  className="hero__line"
                  ref={(el) => (lineRefs.current[i] = el)}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <img
            ref={rightImgRef}
            className="hero__side-img hero__side-img-right"
            src={samay}
            alt="right"
          />

        </div>
        <p ref={subRef} className="hero__sub">
          India's loudest talent show — where the panel roasts harder than the judges score.
          New episodes drop every week.
        </p>
        <div ref={ctaRef} className="hero__cta">
          <a href="#contact" className="btn btn-primary">Participate Now →</a>
          <a href="#episodes" className="btn btn-outline">Watch Episodes</a>
        </div>
      </div>

      <div className="hero__ticker">
        <div className="hero__ticker-track" ref={tickerRef}>
          <span>UNFILTERED OPINIONS · SAVAGE JUDGING · REAL TALENT · UNFILTERED OPINIONS · SAVAGE JUDGING · REAL TALENT · </span>
          <span>UNFILTERED OPINIONS · SAVAGE JUDGING · REAL TALENT · UNFILTERED OPINIONS · SAVAGE JUDGING · REAL TALENT · </span>
        </div>
      </div>
    </section>
  )
}
