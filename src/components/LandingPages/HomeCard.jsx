import React from 'react'
import { BiHomeCircle } from "react-icons/bi";
const HomeCard = ({ data }) => {
    const { title, dream, para, img_url } = data;
    return (
        <div className='relative flex bg-gray-100 font-mamo pb-25 '>
            <div className=' flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col md:gap-10 sm:gap-10 gap-10 2xl:gap-0 xl:gap-0 lg:gap-0 w-full xl:pt-70 lg:pt-55 md:pt-40 sm:pt-30 pt-25 m-auto'>
                <div className='relative flex flex-col pt-13 2xl:pl-40 xl:ml-25 lg:ml-15 md:ml-20   space-y-8 '>
                    <div className=' flex items-center space-x-2 text-gray-950 font-bold'>
                        <span className='text-orange-600'><BiHomeCircle /></span>
                        <h1 >{title}</h1>
                    </div>
                    <div className='relative 2xl:text-7xl xl:text-6xl lg:text-5xl 2xl:w-145 xl:w-130  md:text-6xl sm:text-5xl text-3xl w-80 sm:w-120 font-bold text-gray-900 '>
                        <h1 className='whitespace-normal line-clamp-2 text-ellipsis overflow-visible'>{dream}</h1>
                    </div>
                    <div className='flex sm:w-110 w-100 space-x-6 whitespace-normal text-gray-600'>
                        <div className=' underline w-0.5 h-12 bg-gray-500 '></div>
                        <p>{para}</p>
                    </div>
  <div className="z-10">
  <button className="relative overflow-hidden h-16 w-52 flex items-center justify-center uppercase  group bg-transparent hover:border hover:border-gray-500 ">
    <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-gray-500 ">
      Make An Enquiry
    </span>
    <span className="absolute inset-0 bg-orange-600 transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
  </button>
</div> 
   </div>
  <div className=' 2xl:w-6xl xl:w-5xl lg:w-2xl md:w-xl sm:w-135 w-100 2xl:mr-40 xl:mr-40 lg:mr-40 lg:mt-15 2xl:mt-0 xl:mt-0 shrink-0 '>
   <img src={img_url} alt={img_url} />
     </div>
    </div>
 </div>

    )
}

export default HomeCard
