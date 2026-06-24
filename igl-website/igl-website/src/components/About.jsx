import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './about.css'
import samay from './images/samay.png'

gsap.registerPlugin(ScrollTrigger)

const FACTS = [
  { label: 'Chess streams', value: '500+' },
  { label: 'Roasts delivered', value: '∞' },
  { label: 'Judges scared', value: '3/3' },
]

export default function About() {
  const sectionRef = useRef(null)
  const portraitRef = useRef(null)
  const factRefs = useRef([])

  useEffect(() => {
    gsap.fromTo(
      portraitRef.current,
      { rotate: -8, scale: 0.85, opacity: 0 },
      {
        rotate: -4,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    )

    gsap.to(portraitRef.current, {
      rotate: 2,
      y: -10,
      duration: 2.4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1,
    })

    gsap.fromTo(
      factRefs.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      }
    )
  }, []) 

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container about__inner">
        <div className="about__portrait-wrap">
          <div className="about__portrait" ref={portraitRef}>
           <img src={samay} alt="Samay Raina" />
          </div>
          <span className="about__sticker">"I'm not a doctor, but that joke needs CPR"</span>
        </div>

        <div className="about__copy">
          <p className="eyebrow">The Man Behind The Mic</p>
          <h2>Samay Raina</h2>
          <p className="about__bio">
            Chess streamer turned stand-up comedian turned the host nobody asked the panel to fear.
            Samay runs India's Got Latent like a chess match — calm, calculated, and absolutely
            ruthless when it's time to deliver the verdict. Equal parts comedian, chaos agent,
            and surprisingly sharp judge of real talent.
          </p>
          <div className="about__facts">
            {FACTS.map((f, i) => (
              <div className="about__fact" key={f.label} ref={(el) => (factRefs.current[i] = el)}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
