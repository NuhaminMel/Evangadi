import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaSitemap } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function GetPaid() {
  return (
    <main className=' flex items-center justify-center my-16 '>
      <div className=' w-11/12 2xl:w-8/12  flex flex-col md:flex-row items-center justify-center gap-8'>
        <div className=' md:w-1/2 transform md:skew-x-6  md:-skew-y-2 p-3'>
            <img src="/assets/3-steps9.jpg" alt="" />
        </div>
        <div className=' md:w-1/2 text-black flex flex-col  gap-6 '>
            <h1 className='text-3xl md:text-4xl font-extrabold number'>Only the best ones get paid in the digital world.</h1>
            <p className=' text-gray-500 '>Thoroughly understanding the market, including competitors, trends, and emerging technologies, helps in identifying opportunities.</p>
            <div className='flex flex-col gap-4'>
                <div className=' flex items-center justify-center gap-4  border px-5 py-3 hover:shadow-md transition duration-700 '>
                    <div className=' ' >
                    <IoEyeOutline className=' text-6xl text-orange-300 font-extralight ' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className=' font-extrabold text-[#344767] '>Choose a specific filed to focus on</p>
                        <p className=' text-gray-500 text-sm md:text-md '>There are multiple entry points to the digital world. Pick one based on your personal background.</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-4  border px-5 py-3 hover:shadow-md transition duration-700'>
                    <div className=' ' >
                    <FaSitemap className=' text-6xl text-orange-300 font-extralight ' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className=' font-extrabold text-[#344767]'>Understand the level of proficiency needed to win</p>
                        <p className=' text-gray-500 text-sm md:text-md'>Identify the skills listed on the entry and mid level job posts for the specific field you chose.</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-4  border px-5 py-3  hover:shadow-md transition duration-700'>
                    <div className=' ' >
                    <FaCode className=' text-6xl text-orange-300 font-extralight ' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className=' font-extrabold text-[#344767] '>Practice! Practice! Practice!</p>
                        <p className=' text-gray-500 text-sm md:text-md'>Until you are faster and better than the level of proficiency required in the market, do not stop practicing.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
