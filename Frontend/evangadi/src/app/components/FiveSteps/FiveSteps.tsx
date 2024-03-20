import React from 'react'

import { CiVideoOn } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { BsListCheck } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

export default function FiveSteps() {
  return (
    <main className=' flex flex-col items-center justify-center  -z-50 my-[90px]'>
  <div className=' w-11/12 2xl:w-8/12  flex flex-col-reverse  md:flex-row-reverse items-center justify-center gap-12'>
    <div className=' relative md:w-1/2 card-img-rev rounded rounded-tr-4xl  py-4 md:py-12 md:px-9 '>
        <img className='shadow-2xl  -z-50' src="/assets/5-step-week-white3.jpg" alt="" />
       
    </div>
    <div className=' md:w-1/2 text-black flex flex-col  gap-6 '>
        <h1 className='text-3xl md:text-5xl font-extrabold number -mb-3'>The five step week we follow</h1>
        <p className=' text-gray-500 '>These five steps have been refined and perfected across numerous cohorts to accelerate students' journey to proficiency.</p>
        <div className='flex flex-col gap-4'>
        <div className=' flex items-center  gap-4  border px-5 py-1  hover:shadow-md transition duration-700'>
                <div className=' mr-5 ' >
                < CiVideoOn  className=' text-5xl flex-grow text-orange-300 font-extralight ' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=' font-extrabold text-[#344767] '>Start by watching the lecture videos</p>
                </div>
            </div>
            <div className=' flex items-center  gap-4  border px-5 py-1 hover:shadow-md transition duration-700 '>
                <div className='mr-5  ' >
                <TfiWorld  className=' text-5xl flex-grow text-orange-300 font-extralight ' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=' font-extrabold text-[#344767] '>Attend the live discussion sessions</p>
                </div>
            </div>
            <div className=' flex items-center  gap-4  border px-5 py-1 hover:shadow-md transition duration-700'>
                <div className=' mr-5 ' >
                < BsListCheck  className=' text-5xl text-orange-300 font-extralight ' />
                </div>
                <div className='flex flex-col flex-grow gap-2'>
                    <p className=' font-extrabold text-[#344767]'>Complete the checklist items of the week</p>
                </div>
            </div>
            <div className=' flex items-center  gap-4  border px-5 py-1  hover:shadow-md transition duration-700'>
                <div className=' mr-5 ' >
                < FaDumbbell   className=' text-5xl text-orange-300 font-extralight ' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=' font-extrabold text-[#344767] '>Work on the weekly exercises</p>
                </div>
            </div>
            <div className=' flex items-center  gap-4  border px-5 py-1  hover:shadow-md transition duration-700'>
                <div className=' mr-5 ' >
                <FaUsers  className=' text-5xl text-orange-300 font-extralight ' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=' font-extrabold text-[#344767] '>Attend the group discussion sessions</p>
                </div>
            </div>

        </div>
    </div>
  </div>
</main>
  )
}
