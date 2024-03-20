import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaSitemap } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";


export default function Acadamy() {
  return (
    <main className=' flex flex-col items-center justify-center my-16 -z-50 mb-[30px]'>
        <div className=' w-3/4 md:w-1/3 flex flex-col gap-1 lg:gap-4 text-center my-16'>
        <h1 className=' text-4xl lg:text-5xl text-[#344767] font-[1000]'>Evangadi</h1>
        <h1 className=' text-4xl lg:text-5xl text-[#344767] font-[1000]'>Coding Academy</h1>
        <span className="hexagon-icon"><i></i></span>
      </div>
      <div className=' w-11/12 2xl:w-8/12  flex flex-col md:flex-row items-center justify-center gap-12'>
        <div className=' relative md:w-1/2 card-img rounded rounded-tr-4xl   p-3'>
            <img className=' -z-50' src="/assets/AprilBatch5.jpg" alt="" />
            <div className=' absolute flex flex-col  gap-5 items-center justify-center right-0 bottom-0 bg-white w-56 h-72 rounded-md shadow-2xl text-black p-6 text-center border '>
                <IoCheckmarkSharp className=' text-green-700 text-5xl border rounded-full p-1 bg-slate-200'/>
                <p>Learn how to code and build an application</p>
                <div className=" active:bg-orange-400 bg-orange-400  md:flex relative rounded-3xl text-black font-semibold  px-9 py-3 group overflow-hidden">
            <p className="z-20 md:group-hover:text-white group-hover:scale-y-100 transition-transform  duration-700">Join Class</p>
              <div className=" hidden md:block absolute inset-0 bg-orange-500  rounded-3xl transition-transform duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 m-0.5"></div>
          </div>
            </div>
        </div>
        <div className=' md:w-1/2 text-black flex flex-col  gap-6 '>
            <h1 className='text-3xl md:text-5xl font-extrabold number -mb-3'>Fullstack Application  </h1>
            <h1 className='text-3xl md:text-5xl font-extrabold number'>Development Program </h1>
            <p className=' text-gray-500 '>Learning application development is fundamental in today's digital age, as it forms the cornerstone of the technology-driven world we live in.</p>
            <div className='flex flex-col gap-4'>
            <div className=' flex items-center justify-center gap-4  border px-5 py-4  hover:shadow-md transition duration-700'>
                    <div className=' w-1/5 ' >
                    < CiImageOn  className=' text-6xl flex-grow text-orange-300 font-extralight ' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className=' font-extrabold text-[#344767] '>Phase 1: Building static websites using HTML, CSS & Bootstrap</p>
                        <p className=' text-gray-500 text-sm md:text-md'>Learn about the underlying structure of the web.</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-4  border px-5 py-4 hover:shadow-md transition duration-700 '>
                    <div className='w-1/5  ' >
                    <FaCode className=' text-6xl flex-grow text-orange-300 font-extralight ' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className=' font-extrabold text-[#344767] '>Phase 2: Learn coding with JavaScript</p>
                        <p className=' text-gray-500 text-sm md:text-md '>Learn programming fundamentals using the latest JavaScript syntax.</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-4  border px-5 py-4 hover:shadow-md transition duration-700'>
                    <div className=' w-1/5 ' >
                    < FaTools  className=' text-6xl text-orange-300 font-extralight ' />
                    </div>
                    <div className='flex flex-col flex-grow gap-2'>
                        <p className=' font-extrabold text-[#344767]'>Phase 3: React.js, Node.js, MySql & Express.js</p>
                        <p className=' text-gray-500 text-sm md:text-md'>Learn the backend side of application development.</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-4  border px-5 py-4  hover:shadow-md transition duration-700'>
                    <div className=' w-1/5 ' >
                    <FaLayerGroup  className=' text-6xl text-orange-300 font-extralight ' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className=' font-extrabold text-[#344767] '>Phase 4: The Project Phase - Building Fullstack Applications</p>
                        <p className=' text-gray-500 text-sm md:text-md'>Hands-on experience in fullstack application development.</p>
                    </div>
                </div>
   
            </div>
        </div>
      </div>
    </main>
  )
}
