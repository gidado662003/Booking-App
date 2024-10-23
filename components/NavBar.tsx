"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";
import menu_icon from "../public/menu_icon.svg";
import cross_icon from "../public/cross_icon.png";
import { useAppContext } from "@/app/context/AppProvider";
import { doctors } from "@/assets";
import { usePathname } from "next/navigation";
function NavBar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const { darkMode, setDarkMode } = useAppContext();
  const { setDoctorData } = useAppContext();
  const pathname = usePathname();
  type Link = {
    label: string;
    href: string;
  };
  useEffect(() => {
    setToggle(false);
  }, [pathname]);
  const links: Link[] = [
    { label: "HOME", href: "/" },
    { label: "ALL DOCTORS", href: "/doctors" },
    { label: "MY APPOINTMENTS", href: "/my-appointments" },
    { label: "CONTACT", href: "/contact" },
  ];
  console.log(darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between items-center mb-[40px] dark:bg-[#121212] bg-white p-4 duration-300 ">
        <div>
          <Image
            alt="Logo"
            width={150}
            height={150}
            src={logo}
            className="dark:invert"
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-5">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="dark:text-gray-200 text-gray-600 hover:text-gray-800 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-5">
          <div
            className="flex items-center gap-[7px] cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            <p className="text-gray-600 dark:text-gray-200">
              {darkMode ? "Dark Mode" : "Light Mode"}
            </p>
            {darkMode ? (
              <MdDarkMode className="text-yellow-300" />
            ) : (
              <MdOutlineDarkMode className="text-gray-600" />
            )}
          </div>

          {/* <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-[12px] text-white hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:hover:from-gray-600 dark:hover:via-gray-700 dark:hover:to-gray-800">
            Create account
          </button> */}
          <div>
            <Image
              alt="menu"
              height={20}
              width={20}
              src={menu_icon}
              onClick={() => setToggle(!toggle)}
              className="block md:hidden cursor-pointer dark:invert"
            />
          </div>
        </div>
      </div>

      {/* Small Screen Menu */}
      <div
        className={`${
          toggle ? "left-0" : "-left-full"
        } fixed top-0 bottom-0 dark:bg-gray-800 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:hover:from-gray-600 dark:hover:via-gray-700 dark:hover:to-gray-800 text-white w-[55%] h-screen z-10 transition-all duration-300 md:hidden shadow-lg`}
      >
        {/* Close button container */}
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <span className="text-xl font-semibold">Menu</span>
          <Image
            alt="close"
            src={cross_icon}
            height={20}
            width={20}
            onClick={() => setToggle(false)}
            className="cursor-pointer dark:invert hover:opacity-80 transition-opacity duration-200"
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col items-start space-y-6 px-5 mt-8">
          {links.map((link) => (
            <li key={link.label} className="w-full">
              <Link
                href={link.href}
                className="block text-lg font-medium w-full py-2 px-4 rounded-md dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-gray-700 transition-all duration-200 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-[12px] text-white hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:hover:from-gray-600 dark:hover:via-gray-700 dark:hover:to-gray-800">
              Create account
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
