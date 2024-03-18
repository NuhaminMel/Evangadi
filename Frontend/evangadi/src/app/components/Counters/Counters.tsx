"use client"
import React, { useState, useEffect } from 'react';

interface CounterProps {
  number: number;
  title: string;
  description: string;

}

const Counter: React.FC<CounterProps> = ({ number, title, description,  }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < number && number < 5000 ) {
        setCount(prevCount => prevCount + 10);
      }
      if(count < number && number > 5000 ){
        setCount(prevCount => prevCount + 60);
      } 
       {
        clearInterval(interval);
      }
    }, 10); // 1 millisecond for microsecond-like experience
    return () => clearInterval(interval);
  }, [count, number]);

  return (
    <div className={` px-8 py-10 text-center flex md:border-l flex-col items-center justify-center w-10/12  gap-4 `}>
      <h1 className=' number font-extrabold text-5xl'>{count + "+"}</h1>
      <h2 className=' text-[#3a4a6f] font-bold text-xl'>{title}</h2>
      <p className=' text-gray-500'>{description}</p>
    </div>
  );
};

export default Counter;
