import React from 'react'

interface  RoadMapProps{
    img : string,
    title: string,
    disc : string

}
const RoadMapCard: React.FC<RoadMapProps> = ({img, title,disc}) => {

  return (
    <div className='flex items-center justify-center gap-3  w-[400px] h-[400px]'>
      <div className='  border flex md:flex-col justify-center items-center  flex-col gap-3  rounded-md  bg-white bg-opacity-70  py-16 shadow-lg  p-8  text-center '>
        <img src={img} alt='road map Image'/>
        <p className='number text-lg font-bold'>{title}</p>
        <p >{disc}</p>
      </div>
    </div>
  )
}
 export default RoadMapCard