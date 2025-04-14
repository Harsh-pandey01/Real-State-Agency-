import React, { useState } from "react";
import { projectsData } from "../assets/assets";

export default function Projects() {

  const [currentSlide , setSlide] = useState(0) ;

  return (
    <div className='wrapper my-27'>
      <h2 className='text-center text-3xl font-semibold'>Projects Completed</h2>
      <p className='text-center text-gray-500 mt-2'>
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Projects Carausal */}
      <div className='my-20'>
        <div className='text-right [&>*] : cursor-pointer'>
          <i class='ri-arrow-left-s-line p-3 bg-gray-700 text-xl mx-2 rounded-full' onClick={()=>{
            setSlide(prev => prev -1 < 0 ? 0 : prev-1)
          }}></i>
          <i class='ri-arrow-right-s-line p-3 bg-gray-700 text-xl mx-2 rounded-full' onClick={() => {
            setSlide(prev => prev+1)
          }}></i>
        </div>
       
        <div className="my-10 overflow-x-hidden">
          <div className="flex gap-10 mb-10">
            {
              projectsData?.map((data) => {
                return (
                  <div className="h-[400px] relative bg-red-100 min-w-[300px] transition-ease transition-[200]" style={{backgroundImage : `url(${data?.src})` , transform : `translate(${-currentSlide*100}%)`}}>
                    <div className="absolute px-4 py-4 text-center bg-white border-1 border-gray-400 rounded-sm text-black left-1/2 transform -translate-x-1/2 -bottom-9">
                     <h1 className="font-semibold text-nowrap">{data?.title}</h1>
                     <p className="text-nowrap text-gray-600 text-[12px]"> <span>{data?.price}</span> | <span>{data?.location}</span></p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        

      </div>
    </div>
  );
}
