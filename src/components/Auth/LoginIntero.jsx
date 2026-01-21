import React from 'react'

const LoginIntero = ({title, subtitle, subTitleSize, titleSize }) => {
  return (
    <div className='relative flex flex-col gap-6 mt-20 overflow-hidden'>
      <div className='flex justify-center text-5xl text-gray-950  font-bold'>
        <h1 className={`flex flex-col gap-3 ${subTitleSize}`}>
  <span className={`flex justify-center ${titleSize}`}>
    {title}
  </span>
  {subtitle}
</h1>

      </div>
      <p className='flex flex-col justify-center items-center text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       <span className='flex justify-center'> Iste impedit accusamus error suscipit culpa.</span></p>
    </div>
  )
}

export default LoginIntero
