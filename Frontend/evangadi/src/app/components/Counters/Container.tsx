import React from 'react'
import Counter from './Counters'

export default function Container() {
  return (
    <main className='flex absolute  items-center justify-center z-10'>
      <div className=' w-11/12 border flex justify-center items-center md:gap-16 flex-col md:flex-row  rounded-md  bg-white bg-opacity-70  py-10 shadow-md   '>
       <Counter number={27000} title={"Registered Members"} description={"These are the individuals who have faith in the vision and became part of the movement."}/>
        <Counter  number={1400} title={"Scholarship Winners"} description={"These are the individuals who have faith in the vision and became part of the movement."}/>
        <Counter number={2500} title={"Active Students"} description={"These are the individuals who have faith in the vision and became part of the movement."}/> 
      </div>
      {/* <div className=' h-screen bg-slate-400'></div> */}
    </main>
  )
}
