// src/components/Loader.jsx
import { useEffect, useRef } from 'react'
import { gsap } from  '../../utils/animations'
import './Loader.css'
import logo from '../../assets/images/royallogo.png';

export default function Loader({ onFinish }) {
  const wrapRef = useRef(null)
  const textRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(wrapRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: onFinish,
        })
      },
    })

    tl.fromTo(textRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to(barRef.current, { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, 0.2)

    return () => tl.kill()
  }, [onFinish])

  return (
    <div ref={wrapRef} className="loader">
      <div className="loader__inner">
        <img ref={textRef} src={logo} alt="Royal Enfield Logo" />
        <div className="loader__track">
          <div ref={barRef} className="loader__bar" />
        </div>
        <span className="loader__caption">Roasting up your experience…</span>
      </div>
    </div>
  )
}
