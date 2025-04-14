import React from 'react'
import { assets } from '../assets/assets'
export default function Header() {
  return (
    <div className='w-full flex items-center wrapper z-100 justify-between fixed top-0  left-1/2 transform -translate-x-1/2   header  my-2 rounded-2xl py-5 px-3 '>
      <div>
        <img src={assets?.logo} className='bg-transparent h-9' alt="" />
      </div>
      <nav>
        <ul className='flex items-center gap-10 [&>*]:cursor-pointer'>
            <li>Home</li>
            <li> About</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
        </ul>
      </nav>
      <div>
        <button className='px-4 py-2 bg-gray-200 text-black rounded-2xl'>Sign Up</button>
      </div>
    </div>
  )
}
