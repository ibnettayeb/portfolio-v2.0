import React from "react";

function Header() {
  return (
    <div name="header" className="h-14">
      <div className="flex justify-between items-center h-14">
        <p className="font-poppins font-bold text-xl">Ibnettayeb</p>
        <ul className="flex gap-8">
          <li>
            <a href="#" className="text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-main">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
