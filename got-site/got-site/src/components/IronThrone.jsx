import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './IronThrone.css'

gsap.registerPlugin(ScrollTrigger)

export default function IronThrone() {
  const root = useRef(null)

  useEffect(() => {
    const swords = root.current.querySelectorAll('.sword')

    gsap.fromTo(swords, { y: -160, opacity: 0, rotate: (i) => (i % 2 === 0 ? -8 : 8) },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: true,
        },
      })

    gsap.fromTo('.throne-line', { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.throne-text',
        start: 'top 75%',
      },
    })

    gsap.to('.throne-glow-back', {
      scale: 1.15,
      opacity: 0.5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section className="section throne-section" ref={root}>
      <div className="throne-glow-back" />
      <p className="eyebrow">And of all the seats in the realm</p>
      <h2 className="throne-heading">Only one was built to be feared</h2>

      <div className="throne-art" aria-hidden="true">
        {Array.from({ length: 13 }).map((_, i) => (
          <div className="sword" key={i} style={{ left: `${(i / 12) * 100}%` }} />
        ))}
        <div className="throne-seat" />
      </div>

      <div className="throne-text">
        <p className="throne-line">
          Forged from a thousand blades surrendered by the lords who lost a war,
          it was never meant to be comfortable.
        </p>
        <p className="throne-line">
          Whoever sits upon it rules not by the throne's blessing, but in spite
          of its edges — a seat that draws blood from anyone fool enough to
          relax into it.
        </p>
        <p className="throne-line throne-line-em">
          Every kingdom you just crossed answers, in the end, to this single
          chair of swords.
        </p>
      </div>
    </section>
  )
}
