import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const isDesktop = window.innerWidth >= 1280; 

  const handleMouseEnter = () => {
    if (isDesktop) {
      if (timerRef.current) clearTimeout(timerRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      timerRef.current = setTimeout(() => {
        setOpen(false);
      }, 150);
    }
  };
  const handleClick = () => {
    if (!isDesktop) {
      setOpen(!open);
    }
  };

  return (
    <div
      className="relative w-full xl:w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={handleClick}
        className="flex items-center justify-between cursor-pointer w-[90%] hover:text-orange-600"
      >
        <span>{title.replace("+", "")}</span>

        <span className=' text-lg'>
          { open ? "-" : "+"}
        </span>
      </div>

      {open && (
        <div className="xl:absolute xl:top-full text-start xl:left-0 mt-2 w-full xl:w-56 bg-white shadow-lg z-50 border-t-4 border-orange-600">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="block px-4 py-2 hover:text-orange-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;