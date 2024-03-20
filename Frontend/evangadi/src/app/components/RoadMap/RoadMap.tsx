import React from 'react'
import RoadMapCard from './RoadMapCard'

export default function RoadMap() {
  return (
    <div className='  flex items-center flex-col justify-center mt-[800px] md:mt-64  text-black'>
      <div className=' w-3/4 md:w-1/3 flex flex-col gap-1 lg:gap-4 text-center'>
        <h1 className=' text-4xl lg:text-5xl text-[#344767] font-[1000]'>The Roadmap</h1>
        <h1 className=' text-4xl lg:text-5xl text-[#344767] font-[1000]'>to the digital era</h1>
        <span className="hexagon-icon"><i></i></span>
      </div>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center my-12'>
        <RoadMapCard img={"/assets/learn3.jpg"} title={"Acquire The Skills"} disc={"Grasp the workings of digital systems, master the efficient use of technology, and practice the basic principles."} />
        <RoadMapCard img={"/assets/learn2.jpg"} title={"Work As An Intern"} disc={"Gain insight into the workflows, standards, version control, code review processes, and testing methodologies."} />
        <RoadMapCard img={"/assets/learn4.jpg"} title={"Compete Globally"} disc={"Once you get to the point where you can produce quality product for cheaper and faster, the sky is the limit."} />
      </div>
    </div>
  )
}
