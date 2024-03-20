import React from 'react'
import Counter from './Counters'

export default function Container() {
  return (
    <main className='flex absolute  items-center justify-center z-0 -mt-48  md:-mt-48 '>
      <div className=' w-11/12 md:w-10/12 2xl:w-7/12 border flex justify-center items-center md:gap-16 flex-col md:flex-row  rounded-md  bg-white bg-opacity-70  py-10 shadow-lg '>
       <Counter number={27000} title={"Registered Members"} description={"These are the individuals who have faith in the vision and became part of the movement."}/>
        <Counter  number={1400} title={"Scholarship Winners"} description={"These are the individuals who have faith in the vision and became part of the movement."}/>
        <Counter number={2500} title={"Active Students"} description={"These are the individuals who have faith in the vision and became part of the movement."}/> 
      </div>
      {/* <div className=' h-screen bg-slate-400'></div> */}
    </main>
  )
}
