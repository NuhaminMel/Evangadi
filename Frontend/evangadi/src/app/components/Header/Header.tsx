'use client'
import React, { useEffect, useState } from "react"; 
import { RxCross2 } from "react-icons/rx";

export default function Header() {
    const [navBar, setNavBar] = useState(false)
    const [isTopZero, setIsTopZero] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setTimeout(() => {
            // Check if body has top position zero
            const bodyTop = document.body.getBoundingClientRect().top;
            setIsTopZero(bodyTop === 0);
          }, 500);
      };
  
      // Attach event listener to scroll event
      window.addEventListener('scroll', handleScroll);
  
      // Clean up
      return () => {
        // Remove event listener when component unmounts
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    //   console.log(isTopZero)
    return (
      <main className={` transition duration-700 sticky top-0 z-10 ${isTopZero ? "bg-transparent  translate-y-2" : "bg-black" }  `}>
        <div className="top-0 w-full h-full flex align-middle items-center justify-between px-4 md:px-7 py-3 ">
          {/* Logo */}
          <div>
            <img className="h-6 md:h-7" src="/assets/logos/evangadi-logo-white.png" alt="Logo" />
          </div>
          {/* Toggle bar */}
          <div className="flex align-middle items-center md:hidden">
            <a className="inline-block h-[35px] w-[40px] relative align-middle mt-1.5 text-end cursor-pointer" onClick={() => {
                setNavBar(!navBar);
            }}>
              <span className="block w-full h-1 bg-orange-400 mb-1.5"></span>
              <span className="block w-[84%] h-1 right-0 top-0 justify-end items-end bg-orange-400 mb-1.5 ml-[0.38rem]"></span>
              <span className="block w-full h-1 bg-orange-400"></span>
            </a>
          </div>
          {/* Navigation */}
          <div className="hidden md:flex w-[55%] -mr-32">
            <ul style={{ fontFamily: "Poppins, sans-serif" }} className="font-semibold flex flex-grow-0 w-full justify-between pl-4">
              <li className="hover:text-orange-400 transition-colors duration-500">Home</li>
              <li className="hover:text-orange-400 transition-colors duration-500">Academy</li>
              <li className="hover:text-orange-400 transition-colors duration-500">Scholarship</li>
              <li className="hover:text-orange-400 transition-colors duration-500">Immersive</li>
              <li className="hover:text-orange-400 transition-colors duration-500">Placement</li>
              <li className="hover:text-orange-400 transition-colors duration-500">Contact</li>
            </ul>
          </div>
          {/* Sign In */}
          <div className="hidden md:flex relative rounded-3xl text-black font-semibold bg-white px-7 py-3 group overflow-hidden">
            <p className="z-20 group-hover:text-white transition-transform duration-700">Sign In</p>
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transition-transform duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 m-0.5"></div>
          </div>
        </div>
        <div className={` md:hidden lg:hidden absolute top-0 bg-white py-7 duration-700 w-[70%] ${navBar == false ? " -translate-x-[550px]  ease-in-out z-40" : ""} `}>
            <div className=" flex justify-between mb-5 mr-3 ">
            <img className="h-7 mx-2 " src="/assets/logos/evangadi-logo-black.png" alt="Logo" />
            <RxCross2 onClick={() => {
                setNavBar(false)
            }}  className=" text-black text-3xl rounded-full border-gray-300 font-semibold border"/>
            </div>
 
            <ul style={{ fontFamily: "Poppins, sans-serif" }} className=" flex flex-grow-0 flex-col h-screen gap-3 text-black">
              <li className="hover:text-orange-400 transition-colors duration-500 border-b border-t p-2 py-4  border-gray-300">Home</li>
              <li className="hover:text-orange-400 transition-colors duration-500 border-b p-2  border-gray-300">Academy</li>
              <li className="hover:text-orange-400 transition-colors duration-500 border-b p-2  border-gray-300">Scholarship</li>
              <li className="hover:text-orange-400 transition-colors duration-500 border-b p-2  border-gray-300">Immersive</li>
              <li className="hover:text-orange-400 transition-colors duration-500 border-b p-2  border-gray-300">Placement</li>
              <li className="hover:text-orange-400 transition-colors duration-500 border-b p-2  border-gray-300">Contact</li>
              <li className="hover:text-orange-400 transition-colors duration-500 border-b p-2  border-gray-300">Sign In</li>
            </ul>

        </div>
      </main>
    );
  }
  