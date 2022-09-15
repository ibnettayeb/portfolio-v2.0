import React from "react";
import avatar from "../../Assets/images/rachid.jpg";
import { DiCssTricks } from "react-icons/di";
function About() {
  return (
    <div name="about" className="">
      <p className="text-2xl font-bold flex items-center gap-2">
        <DiCssTricks className="text-main" />
        <span>About</span>
      </p>
      <div className="my-5  flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="w-full lg:w-2/3">
          <p>
            Rachid Ibnettayeb is a frontend web developer who believes in the
            power of programming. He began his journey in programming by chance
            through a video on YouTube in 2019 and now dreams of being a senior
            web developer. Rachid Ibnettayeb lives in Morocco and participates
            in learning new technologies in the programming field.
          </p>
        </div>
        <div
          className="w-[250px] relative flex justify-end after:content-[''] 
          after:w-full after:h-full after:border after:border-1 after:absolute 
          after:-z-10 after:-top-1 after:-left-1"
        >
          <img
            className="w-full object-cover border-4 "
            src={avatar}
            alt="ibnettayeb"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
