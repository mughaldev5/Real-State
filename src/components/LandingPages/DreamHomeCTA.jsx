import React from 'react'
import { FaArrowRightLong} from "react-icons/fa6";

const DreamHomeCTA = () => {
  return (
    <div className='absulote bottom-0 left-0 right-0 mx-auto flex lg:flex-row flex-col sm:justify-between sm:items-center lg:h-50 md:h-38 2xl:w-7xl xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-xs gap-2 sm:pr-18 sm:pl-18 pl-5 bg-orange-600 shadow-lg z-20 lg:-mb-25 md:-mb-20 sm:-mb-15 -mb-13'>
      <div className='flex flex-col md:gap-4 sm:gap-1'>
        <div className='md:text-3xl text-2xl text-x text-white sm:font-bold font'>
            <h1>Looking for a dream home?</h1>
        </div>
        <div className='flex sm:justify-center sm:pl-0 pl-1.5 md:text-base text-xs text-gray-50'>
            <p>We can help you realize your dream of a new home </p>
        </div>
      </div>
      <div>
        <div className="flex sm:pl-0 pl-17 z-10 ">
  <button className="relative overflow-hidden lg:h-14 h-10 lg:w-60 sm:w-45 w-35 flex items-center justify-center lg:text-base md:text-sm text-xs font-sans lg:mb-0 mb-3 group bg-black hover:border hover:border-gray-500 ">
    <span className="relative flex justify-center items-center text  gap-1 z-10 text-black transition-colors duration-500 group-hover:text-white  ">
      Explore Properties <span className='text-gray-700'><FaArrowRightLong /></span>
    </span>
    <span className="absolute inset-0 bg-white transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
  </button>
</div>
      </div>
    </div>
  )
};

export default DreamHomeCTA ;
