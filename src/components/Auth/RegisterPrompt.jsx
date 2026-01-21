import React from 'react'
import { Link } from 'react-router'
const RegisterPrompt = () => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      <h1 className='flex justify-center text-xl font-bold font-sans'>DON'T HAVE AN ACCOUNT?</h1>
      <h3 className='flex flex-col items-center font-sans leading-8 text-gray-600'>Add items to your wishlistget personaliset recommendation 
      <span>check out more quickley track your order register</span>
      </h3>
     <div className='flex justify-center'>
       <Link className="flex justify-center items-center md:h-16 sm:h-12 h-12 w-60 bg-orange-500 hover:bg-black text-white font-sans" to="/registerform">CREATE ACCOUNT</Link>
     </div>
    </div>
  )
}

export default RegisterPrompt
