import React from 'react'
import { Testimonials } from '../assets/assets'

export default function Testimonial() {
  return (
    <div className='wrapper my-10 '>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Customer Testimonial</h1>
        <p className='text-gray-500 mt-2'>Real Stories from Those Who Found Home with Us</p>
      </div>
      <div className='grid grid-cols-3 gap-5 my-10'>
        {
            Testimonials?.map((data) => {
                return (
                    <div className='py-15 px-7 text-center border-1 border-gray-400 rounded-xl'>
                        <div className='text-center flex items-center flex-col justify-center '>
                            <img src={data?.src} alt="" />
                            <h1 className='mt-2'>{data?.username}</h1>
                            <p className='text-gray-400 text-[12px]'>{data?.profile}</p>
                            <div className='my-2'>⭐⭐⭐⭐⭐</div>
                        </div>
                        <p>{data?.testimony}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
