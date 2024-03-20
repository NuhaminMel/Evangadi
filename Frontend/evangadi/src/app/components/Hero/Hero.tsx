import Counter from "../Counters/Counters";

export default function Hero() {
  return (
    <main className="  ">
      <div className=" hero h-screen flex items-center justify-center md:pt-52">
        <div className=" w-10/12  md:w-7/12 text-center flex flex-col gap-5 md:gap-8 mt-12 md:mt-52">
            <p className=" font-extrabold text-4xl md:text-6xl gap-3 flex">Bypass The Industrial, Dive Into The Digital!</p>
            <p className=" font-medium md:text-xl">Before us is a golden opportunity, demanding us to take a bold step forward and join the new digital era.</p>
            <div className=" flex flex-col gap-5 md:flex-row md:gap-3 justify-center items-center">
            <div className=" md:flex relative rounded-3xl text-white font-semibold bg-orange-600 px-9 py-3 group overflow-hidden">
            <p className="z-20 group-hover:text-white group-hover:scale-y-100 transition-transform duration-700">Join Our Community</p>
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transition-transform duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 m-0.5"></div>
          </div>
                <div className=" md:flex relative rounded-3xl text-black font-semibold bg-white px-9 py-3 group overflow-hidden">
            <p className="z-20 group-hover:text-white transition-transform duration-700">Sign In</p>
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transition-transform duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 m-0.5"></div>
          </div>
               
              
            </div>
        </div>
      </div>
      <div className="wave block -mt-36  md:-mt-36  w-full  relative overflow-hidden ">
          <svg className=" h-36 md:h-36  overflow-hidden w-full " data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" fill="white"></path>
         </svg>
      </div>
    </main>
  )
}

