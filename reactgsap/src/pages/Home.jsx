import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
           <Video/>
        </div>
        <div className='h-screen pt-4 w-screen relative flex flex-col justify-between pb-4'>
          <HomeHeroText/>
          <HomeBottomText/>
          
        </div>
    </div>
  )
}

export default Home