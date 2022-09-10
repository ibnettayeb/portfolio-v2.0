import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  return (
    <div name="header" className="h-14">
      <div className="flex justify-between items-center h-14">
        <p className="font-poppins font-bold text-xl">Ibnettayeb</p>
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#" className="text-sm font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-main font-semibold">
              Resume
            </a>
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute z-10 top-0 right-0 w-3/4 h-screen bg-bg shadow-2xl shadow=[#121212] flex flex-col  justify-start px-7 pt-20 divide-y-[1px]  divide-dashed divide-[#1e293b] gap-5 text-right"
          }
        >
          <li>
            <a href="#" className="text-sm font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-main font-semibold">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
