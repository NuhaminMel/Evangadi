import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaSitemap } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function ScholarShip() {
  return (
    <main className=' flex flex-col items-center justify-center my-16 '>
         <div className=' w-3/4 md:w-1/3 flex flex-col gap-1 lg:gap-4 text-center  mb-8'>
        <h1 className=' text-4xl lg:text-5xl text-[#344767] font-[1000]'>Scholarship Opportunity</h1>
        {/* <h1 className=' text-4xl lg:text-5xl text-[#344767] font-[1000]'>Coding Academy</h1> */}
        <span className="hexagon-icon"><i></i></span>
      </div>
    <div className=' w-11/12 2xl:w-8/12  flex flex-col md:flex-row items-center justify-center gap-8'>
      <div className=' md:w-1/2 transform md:skew-x-6  md:-skew-y-2 p-3'>
          <img src="/assets/3-steps12.jpg" alt="" />
      </div>
      <div className=' md:w-1/2 text-black flex flex-col  gap-6 '>
          <h1 className='text-3xl md:text-4xl font-extrabold number'>Only for those who live in Ethiopia</h1>
          <p className=' text-gray-500 '>As our selection criteria mainly focuses on those who have the least means to afford the payments, it is very unlikely that you will get selected if you are residing in one of the developed countries.</p>
          <div className='flex flex-col gap-4'>
              <div className=' flex items-center justify-center gap-4  border px-5 py-3 hover:shadow-md transition duration-700 '>
                  <div className=' ' >
                  <IoEyeOutline className=' text-6xl text-orange-300 font-extralight ' />
                  </div>
                  <div className='flex flex-col gap-2'>
                      <p className=' font-extrabold text-[#344767] '>Who is this for?</p>
                      <p className=' text-gray-500 text-sm md:text-md '>If you live in Ethiopia, we provide free scholarship opportunities for 30 students on every batch.</p>
                  </div>
              </div>
              <div className=' flex items-center justify-center gap-4  border px-5 py-3 hover:shadow-md transition duration-700'>
                  <div className=' ' >
                  <FaSitemap className=' text-6xl text-orange-300 font-extralight ' />
                  </div>
                  <div className='flex flex-col gap-2'>
                      <p className=' font-extrabold text-[#344767]'>How can I apply?</p>
                      <p className=' text-gray-500 text-sm md:text-md'>Please use <span className=' text-orange-400'>this guidelines</span> to structure your essay. As these spots are very competitive, please follow the instructions well.</p>
                  </div>
              </div>
              <div className=' flex items-center justify-center gap-4  border px-5 py-3  hover:shadow-md transition duration-700'>
                  <div className=' ' >
                  <FaCode className=' text-6xl text-orange-300 font-extralight ' />
                  </div>
                  <div className='flex flex-col gap-2'>
                      <p className=' font-extrabold text-[#344767] '>When can I start sending my application?</p>
                      <p className=' text-gray-500 text-sm md:text-md'>You can send your application at any time before the deadline. The deadline for the March 2024 batch is on March 14th, 2024.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </main>
  )
}
