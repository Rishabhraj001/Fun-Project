import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Agence = () => {

  const imagedivref = useRef(null)
  const imageRef = useRef(null)


  const imageArray = [
    '../../../src/assets/image/1.jpg',
    '../../../src/assets/image/2.jpg',
    '../../../src/assets/image/3.jpg',
    '../../../src/assets/image/4.jpg',
    '../../../src/assets/image/5.jpg',
    '../../../src/assets/image/6.jpg',
    '../../../src/assets/image/7.jpg',
    '../../../src/assets/image/8.jpg',
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.to(imagedivref.current, {
      scrollTrigger: {
        trigger: imagedivref.current,
        start: 'top 25%',
        end: 'top -140%',
        scrub: true,
        pin: true,
        onUpdate: function (elem) {
          let imgindex;
          if (elem.progress < 1) {
            imgindex = Math.floor(elem.progress * imageArray.length)
          }else{
            imgindex = imageArray.length-1;
          }

          


          imageRef.current.src = imageArray[imgindex]
        }
      },

    })
  })



  return (
    <div>
      <div className='section1'>
        <div ref={imagedivref} className='absolute h-[18.4vw] rounded-3xl overflow-hidden w-[13.7vw] top-[12vw] left-[31vw] '>
          <img ref={imageRef} className='h-full w-full object-cover' src="" alt="" />
        </div>
        <div className='relative font-[font1]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>Seventy <br /> Two</h1>
          </div>
          <div className=' pl-[40%] mt-5'>
            <p className='text-6xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className='section2'>

        <div className='relative font-[font1]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>Seventy <br /> Two</h1>
          </div>
          <div className=' pl-[40%] mt-5'>
            <p className='text-6xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Agence