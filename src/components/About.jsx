import React from "react";
import { assets } from "../assets/assets";

export default function About() {
  return (
    <div className='wrapper my-27'>
      <h2 className='text-center text-3xl font-semibold'>About our Brand</h2>
      <p className='text-center text-gray-500'>
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className='flex items-center gap-10 mt-10'>
        <div className='w-[50%]'>
          <img src={assets?.aboutImg} className='' alt='building-img' />
        </div>
        <div className="w-[50%]">
          <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-2  gap-5'>
              <div>
                <p className='text-3xl'>10+</p>
                <p>Years of Excellence</p>
              </div>
              <div>
                <p className='text-3xl'>12+</p>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div>
                <p className='text-3xl'>20+</p>
                <p>Mn. Sq . Ft . Delivered</p>
              </div>
              <div>
                <p className='text-3xl'>25+</p>
                <p>Ongoing Projects</p>
              </div>
            </div>
          </div>

          <p className="text-[14px] mt-9 max-w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <button className="mt-5 px-4 text-white py-2 cursor-pointer bg-blue-500 rounded-sm">Learn More</button>
        </div>
      </div>
    </div>
  );
}
