import React from 'react'
import { NavLink } from 'react-router'
const LowerFooter = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between sm:items-center items-start sm:h-20 h-auto sm:gap-0 gap-6 sm:pr-17 sm:pl-17 pl-1 bg-gray-900'>
      <div className=' text-white'>
        <h1>All Rights Reserved @ Company 2025</h1>
      </div>
      <div className='flex sm:flex-row flex-wrap  text-white space-x-8 '>
        <NavLink className="hover:text-orange-600 " to="/terms">Terms & Conditons</NavLink>
        <NavLink className="hover:text-orange-600 " to="/claim">Claim</NavLink>
        <NavLink className="hover:text-orange-600 " to="/privacy">Privacy & Policy</NavLink>
      </div>
    </div>
  )
}

export default LowerFooter
