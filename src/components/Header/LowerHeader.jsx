import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "./MegaMenu/Dropdown";

import HeaderData from "../../api/HeaderData";
import ResponsiveLowerHeader from "./ResponsiveLowerHeader";




const LowerHeader = () => {
  const { homeLinks, aboutLinks, propertyLinks, newsLinks } = HeaderData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-0 z-30 shadow-md shadow-gray-300 transition-all duration-300"
          : "absolute top-[80px] md:top-[40px] transition-all duration-300"
      } w-full z-20 bg-white text-gray-950`}
    >
      <div className="flex z-30 flex-col text-center md:flex-row xl:justify-evenly md:justify-around md:items-center font-sans font-medium gap-3 px-6 md:h-28 h-35">

        <div className="relative flex items-center justify-center mt-3 text-4xl space-x-2 2xl:right-0 xl:right-0 lg:right-15 md:right-14 font-bold overflow-hidden">
          <span className="text-4xl text-orange-600 font-bold">
            <BiHomeCircle />
          </span>
          <h1>Quarter</h1>
        </div>

        <nav className="hidden xl:flex items-center space-x-8 text-lg font-medium text-gray-700">
          {homeLinks && <Dropdown title="Home+" links={homeLinks} />}
          {aboutLinks && <Dropdown title="About+" links={aboutLinks} />}
          {propertyLinks && <Dropdown title="Property+" links={propertyLinks} />}
          {newsLinks && <Dropdown title="News+" links={newsLinks} />}
          <NavLink className="hover:text-orange-600" to="/pages">Pages+</NavLink>
          <NavLink className="hover:text-orange-600" to="/contact">Contact</NavLink>
        </nav>

        <div className="relative flex justify-center items-center space-x-2 xl:left-0 lg:left-15 md:left-11.5">
          <NavLink className="bg-white shadow-lg shadow-gray-300 py-5 px-4  hover:bg-orange-600 hover:text-white" to="/search">
            <IoSearchSharp />
          </NavLink>
          <NavLink className="bg-white shadow-lg shadow-gray-300 py-5 px-4  hover:bg-orange-600 hover:text-white" to="/loginform">
            <FaUser />
          </NavLink>
          <NavLink className="bg-white shadow-lg shadow-gray-300 py-5 px-4 hover:bg-orange-600 hover:text-white" to="/salespropty">
            <FaShoppingCart />
          </NavLink>

          <button
            onClick={() => setShowMenu(true)}
            className="text-xl py-4.5 px-4 bg-white shadow-lg  xl:hidden"
          >
           <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {showMenu && (
        <div
          className="fixed inset-0  bg-opacity-40 z-10 xl:hidden"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out overflow-y-scroll ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ResponsiveLowerHeader setShowMenu={setShowMenu}/>
      </div>
    </header>
  );
};

export default LowerHeader;
