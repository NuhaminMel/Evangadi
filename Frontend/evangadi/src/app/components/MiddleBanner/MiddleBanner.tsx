import React from 'react'

export default function MiddleBanner() {
  return (
    <main className=' middel_banner flex flex-col md:flex-row items-start md:items-center p-3 justify-center gap-12 md:justify-around'>
      <div className=' '>
        <p className=' font-bold mb-3'>Join over +2500 students worldwide.</p>
        <p className= ' text-3xl  md:text-5xl font-bold '>Welcome on board!</p>
        <p className= ' text-3xl  md:text-5xl font-bold '>Here is how we can help.</p>
      </div>
      <div className=" active:bg-orange-400  md:flex relative rounded-3xl text-black font-semibold bg-white px-9 py-3 group overflow-hidden">
            <p className="z-20 md:group-hover:text-white group-hover:scale-y-100 transition-transform  duration-700">Join Our Community</p>
              <div className=" hidden md:block absolute inset-0 bg-orange-500  rounded-3xl transition-transform duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 m-0.5"></div>
          </div>
    </main>
  )
}
