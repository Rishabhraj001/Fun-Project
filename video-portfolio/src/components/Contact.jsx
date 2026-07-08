import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.contact__animate'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container contact__inner">
        <div className="contact__text contact__animate">
          <p className="eyebrow">Grow Business? Got Wish.</p>
          <h2>Think you can Dominate the World?</h2>
          <p className="contact__sub">
            Tell us what you do — , whatever it is — and our team will reach out
            about Any Help we can give.
          </p>
        </div>

        <form className="contact__form contact__animate" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact__success">You're in the queue. We'll be in touch. 🎤</div>
          ) : (
            <>
              <div className="contact__row">
                <input type="text" placeholder="Your name" required />
                <input type="email" placeholder="Email address" required />
              </div>
              <input type="text" placeholder="What's your talent?" required />
              <textarea rows="4" placeholder="Tell us why you belong on that stage" required />
              <button type="submit" className="btn btn-primary">Submit Application →</button>
            </>
          )}
        </form>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} India's Got Latent. All roasts reserved.</span>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#episodes">Episodes</a>
            <a href="#about">About</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
