import React from 'react'
import { NavLink } from 'react-router'
import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import Layout from '../../wrapper';
const LoginViewTop = () => {
  return (
  
     <div className='relative  flex flex-col mt-28 bg-gray-50 h-80 w-full gap-6 pt-30 pl-45 overflow-hidden'>
      <div className='text-5xl font-semibold'>
        <h1>Account</h1>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <NavLink className='flex flex-row items-center text-gray-500 text-xl gap-2' to='/'><span className='text-2xl font-bold text-red-500'>< BiHomeCircle/></span> Home</NavLink>
        <div className='flex flex-row items-center  gap-2.5'>
        <span className='text-gray-500 mt-1'><AiOutlineRight /></span>
        <h2 className='text-xl'>Login</h2>
        </div>
      </div>
    </div>
   
  )
}

export default LoginViewTop
