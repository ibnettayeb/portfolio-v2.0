import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  return (
    <div name="header" className="h-14">
      <div className="flex justify-between items-center h-14">
        <a href="/" className="font-poppins font-bold text-2xl">
          Ibnettayeb
        </a>
        <ul className="hidden md:flex gap-8">
          <li className="text-sm font-semibold cursor-pointer">Home</li>
          <li className="text-sm font-semibold cursor-pointer">About</li>
          <li className="text-sm font-semibold cursor-pointer">Skills</li>
          <li className="text-sm font-semibold cursor-pointer">Work</li>
          <li className="text-sm font-semibold cursor-pointer">Contact</li>
          <li className="text-sm font-semibold text-main cursor-pointer">
            Resume
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 right-0 w-2/3 h-screen bg-[#121212] shadow-2xl shadow=[#121212] flex flex-col  justify-start px-7 pt-20 divide-y-[1px]  divide-dashed divide-[#1e293b] gap-5 text-center"
          }
        >
          <li className="text-xl font-semibold cursor-pointer">Home</li>
          <li className="text-xl font-semibold pt-3 cursor-pointer">About</li>
          <li className="text-xl font-semibold pt-3 cursor-pointer">Skills</li>
          <li className="text-xl font-semibold pt-3 cursor-pointer">Work</li>
          <li className="text-xl font-semibold pt-3 cursor-pointer">Contact</li>
          <li className="text-xl font-semibold text-main pt-3 cursor-pointer">
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
