import React from 'react'
import HeaderData from "../../api/HeaderData";
import { CgClose } from "react-icons/cg";
import { BiHomeCircle } from "react-icons/bi";
import { NavLink } from 'react-router';
import Dropdown from "./MegaMenu/Dropdown";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const ResponsiveLowerHeader = ({setShowMenu}) => {
    const { homeLinks, aboutLinks, propertyLinks, newsLinks } = HeaderData;
  return (
    <div className='flex flex-col '>
     <div className="relative flex justify-between  items-center p-4 ml-6 w-[90%]">
        <div className="flex gap-2 ">
          <span className="text-4xl text-orange-600 font-bold">
          <BiHomeCircle />
        </span>
          <h2 className="text-3xl font-bold  flex items-center gap-2">
             Quarter
          </h2>
        </div>
          
        <button
            onClick={() => setShowMenu(false)}
            className="text-xl py-4.5 px-4"
          >
           <CgClose />
          </button>
          
        </div>
        <hr  className='ml-10 text-gray-200 w-[80%] '/>
        <div className='flex justify-between items-center h-16 w-[80%] border-2 border-gray-200 mt-4 ml-10 pr-5 pl-5'>
            <input className='outline-none focus:outline-none' type="sreach" placeholder='Sreach...' />
            <span className=' text-xl'><IoSearchSharp /></span>
        </div>
        <nav className="flex flex-col space-y-4 p-6 ml-4 text-lg font-medium text-gray-700">
          {homeLinks && <Dropdown title="Home+" links={homeLinks} />}
          {aboutLinks && <Dropdown title="About+" links={aboutLinks} />}
          {propertyLinks && <Dropdown title="Property+" links={propertyLinks} />}
          {newsLinks && <Dropdown title="News+" links={newsLinks} />}
          <NavLink className="hover:text-orange-600 " to="/pages" onClick={() => setShowMenu(false)}>Pages+</NavLink>
          <NavLink className="hover:text-orange-600 " to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink>
        </nav>

        <hr  className='ml-10 mt-2 text-gray-200 w-[80%] '/> 
        
        <div className="relative flex flex-col mt-5 ml-10 gap-2">
                  <NavLink className="flex items-center gap-4 hover:bg-orange-600 hover:text-white" to="/loginform">
                    <div className="flex justify-center items-center bg-white h-12 w-12 border-2 border-gray-300 py-5 px-4" >
                        <FaUser />
                    </div>
                    <h1 className='text-gray-500 font-sans font-medium'>My Account</h1>
                  </NavLink>
                  <NavLink className="relative flex items-center gap-4 hover:bg-orange-600 hover:text-white" to="/salespropty">
                    <div className='relative flex items-center bg-white h-12 w-12 border-2 border-gray-200 py-5 px-4'>
                        <span className='absolute top-3.5 left-2.5 text-lg'><FaRegHeart /></span>
                    <span className='absolute text-xs top-1.5 right-1.5 text-gray-500'>3</span>
                    </div>
                    <h1 className='text-gray-500 font-sans font-medium'>Wishlist</h1>
                  </NavLink>
                  
                  <NavLink className="relative flex items-center gap-4 hover:bg-orange-600 hover:text-white" to="/salespropty">
                    <div className='relative flex items-center bg-white h-12 w-12 border-2 border-gray-200 py-5 px-4'>
                        <span className='absolute top-3.5 left-2.5 text-lg'><FaShoppingCart /></span>
                    <span className='absolute text-xs top-1.5 right-1.5 text-gray-500'>5</span>
                    </div>
                    <h1 className=' text-gray-500 font-sans font-medium'>Shoping Cart</h1>
                  </NavLink>
        
                </div>
                <hr  className='ml-10 mt-5 text-gray-200 w-[80%] '/>
                <div className='flex gap-3 ml-10 mt-9 mb-10'>
                        <NavLink className="flex justify-center items-center hover:text-orange-600 h-10 w-10 bg-gray-200" to="https://facebook.com" target="_blank"><FaFacebookF className='' /></NavLink>
                        <NavLink className="flex justify-center items-center hover:text-orange-600 h-10 w-10 bg-gray-200" to="https://twitter.com" target="_blank"><FaTwitter className=''/></NavLink>
                        <NavLink className="flex justify-center items-center hover:text-orange-600 h-10 w-10 bg-gray-200" to="https://linkidIn.com" target="_blank"><FaLinkedinIn  className=' text-gray-950 hover:bg-orange-600' /></NavLink>
                        <NavLink className="flex justify-center items-center hover:text-orange-600 h-10 w-10 bg-gray-200" to="https://youtube.com" target="_blank"><IoLogoYoutube className='' /></NavLink>
                        
                      </div>
    </div>
  )
}

export default ResponsiveLowerHeader
