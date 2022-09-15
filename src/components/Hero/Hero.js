import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <div className="w-full h-[calc(100vh_-_56px)] flex items-center ">
      <div>
        <p className="text-main">Hi, my name is</p>
        <h1 className="text-3xl sm:text-3xl font-bold font-poppins my-2">
          Rachid Ibnettayeb
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0] font-poppins my-2">
          I'm a FrontEnd Web Developer
        </h2>
        <p className="py-4 max-w-[700px]">
          I always like design and programming beautiful and simple things for
          the web.
        </p>
        <div>
          <button className="group px-6 py-3 my-2 flex items-center bg-main text-[#0e1d2c] rounded-full font-semibold gap-2 hover:shadow-sm hover:shadow-main">
            View Work
            <HiArrowNarrowRight className="group-hover:translate-x-2 duration-300" />
          </button>

          {/* Social Media */}
          <ul className="hidden lg:flex fixed flex-col gap-5 items-center left-[10%] top-[35%] bg-main rounded-full text-[#0e1d2c] py-4 w-9 after:w-2 after:h-20 after:content-none">
            <li className="">
              <a className="" href="https://github.com/ibnettayeb">
                <FaGithub size={20} />
              </a>
            </li>
            <li className="">
              <a className="" href="https://linkedin.com/ibnettayeb">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li className="">
              <a className="" href="https://instagram.com/ibnettayeb">
                <FaInstagram size={20} />
              </a>
            </li>
            <li className="">
              <a className="" href="https://twitter.com/ibnettayeb">
                <FaTwitter size={20} />
              </a>
            </li>
            <p className="absolute -bottom-16 uppercase font-medium text-sm whitespace-nowrap text-main rotate-90">
              Follow me
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
