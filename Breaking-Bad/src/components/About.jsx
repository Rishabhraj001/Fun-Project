import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './about.css'
import walt from '../assets/walt.jpg';

gsap.registerPlugin(ScrollTrigger)

const FACTS = [
  { label: 'Age', value: '54' },
  { label: 'Customers', value: '∞' },
  { label: 'Income', value: '20M+' },
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
           <img src={walt} alt="Walt White" />
           
          </div>
          
        </div>
       

        <div className="about__copy">
          <p className="eyebrow">The Man Behind the Tution</p>
          <h2>Walter white</h2>
          <p className="about__bio">
           Just an ordinary chemistry teacher who somehow keeps finding himself in situations where morality becomes optional, decisions get questionable, and blue crystals start appearing like accidental side projects nobody asked for but everyone remembers eventually becoming unavoidable legend unintentionally infamous.
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
