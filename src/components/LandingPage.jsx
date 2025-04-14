import React from "react";

export default function LandingPage() {
  return (
    <div className='landing'>
      <div className='wrapper w-full h-full'>
        <div
          className='m-auto  relative text-center top-1/2 left-1/2'
          style={{ transform: "translate(-50% , -50%)" }}
        >
          <h1 className='text-7xl font-bold text-white'>
            Explore homes that fit your dreams
          </h1>
          <div className="my-10 text-white  flex gap-5 items-center justify-center">
            <button className="px-7 py-2 border rounded-sm cursor-pointer">Projects</button>
            <button className="px-7 py-2  bg-blue-400 rounded-sm cursor-pointer">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
