import React from 'react'
import Video from './video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] uppercase text-center'>
            <div className='flex items-center justify-center text-[9vw] leading-[8vw]'>The spark for</div>
            <div className='flex items-center justify-center text-[9vw] leading-[8vw]'>
                all 
                <div className='h-[8vw] rounded-full overflow-hidden'>
                    <Video/>
                </div>
                things
            </div>
            <div className='flex items-center justify-center text-[9vw] leading-[8vw]'>creative</div>
        </div>

    )
}

export default HomeHeroText