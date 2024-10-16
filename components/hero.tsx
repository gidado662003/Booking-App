import React from "react";
import Image from "next/image";
import group_profiles from "../public/group_profiles.png";
import arrow_icon from "../public/arrow_icon.svg";
import header_img from "../public/header_img.png";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#5F6FFF] via-[#7B5FFF] to-[#A35FFF] dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 flex flex-col md:flex-row md:px-[60px] px-[30px] md:pt-[150px] pt-[30px] rounded-lg transition-colors duration-300 ease-in-out">
      {/* Left Section */}
      <div>
        {/* Heading */}
        <p className="text-[32px] md:text-[3rem] font-bold text-white dark:text-slate-100 mb-2">
          Book Appointment With Trusted Doctors
        </p>

        {/* Subtext and Image */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image alt="hero" src={group_profiles} width={100} height={100} />
          <p className="text-[19px] text-white dark:text-slate-200 mb-7">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        {/* Book Appointment Button */}
        <div>
          <div className="flex justify-center md:justify-start">
            <div className="flex bg-white dark:bg-slate-800 dark:text-slate-100 p-4 rounded-[30px] w-fit justify-between items-center mt-6 cursor-pointer duration-200 hover:scale-105">
              <p>Book appointment</p>
              <Image
                alt="arrow"
                src={arrow_icon}
                className="hover:opacity-100 transition-opacity ml-3 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Hero Image */}
      <div>
        <Image src={header_img} alt="header" className="" />
      </div>
    </div>
  );
}

export default Hero;
