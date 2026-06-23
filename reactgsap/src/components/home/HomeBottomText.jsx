import React from 'react'
import { Link } from "react-router-dom"
const HomeBottomText = () => {
  return (
    <div className='  font-[font2] flex uppercase items-center justify-center gap-6 '>
        <Link to='/projects' className='text-[6vw] hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[5.5vw] border-2 border-white rounded-full px-4 pt-4 '>Projects</Link>
        <Link to='/agence' className='text-[6vw] hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[5.5vw] border-2 border-white rounded-full px-4 pt-4 '>Agency</Link>
    </div>
  )
} 

export default HomeBottomText