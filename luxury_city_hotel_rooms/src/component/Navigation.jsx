import { FaChevronDown } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



import logo from "../image/logo.png";
import { useState } from "react";

export default function Navigation() {
  const [showbar,setShowbar]=useState(false)
  const handleClick =()=>{
    setShowbar(!showbar);
  }

  return (
    <div>
      <div className="2xl:flex  2xl:items-center 2xl:justify-center sm:justify-start lg:bg-slate-600 bg-[#473D35] md:bg-black w-full sm:bg-red-500 sm:h-[100px] h-[144px] fixed top-0 left-0 z-50">
        <div className="flex items-center justify-center gap-10 sm:gap-4 pr-[240px] lg:absolute lg:top-14 lg:left-10 sm:absolute sm:top-[30px] sm:right-[-200px] md:absolute md:top-[100px] md:right-[-200px] ">
          <div className="flex items-center gap-2  ">
            <p className="text-sm sm:text-[14px] text-white font-robo font-normal">
              EN
            </p>
            <FaChevronDown className="text-white text-xs " />
          </div>
          <IoSearchSharp className="text-[24px] sm:text-[20px] text-white" />
        </div>
        <div className="flex items-center justify-center sm:items-start sm:justify-start gap-[40px] lg:absolute lg:top-10 lg:right-[350px]">
          <div>
            <div
              onClick={handleClick}
              className="2xl:hidden lg:hidden sm:top-[60px]  md:absolute md:top-16 sm:right-10 sm:absolute "
            >
              {showbar == true ? (
                <IoClose className="text-white" />
              ) : (
                <FaBars className="text-white" />
              )}
            </div>
            <div
              className={`sm:absolute sm:bg-black md:bg-green-500 sm:top-[100px] md:top-[144px] md:absolute sm:w-full md:p-4 sm:py-4 md:w-full  ${
                showbar ? "sm:right-[0px] md:right-0" : "sm:right-[-800px] md:right-[1023px]"
              } `}
            >
              <ul className="lg:flex 2xl:flex gap-[40px] ">
                <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 sm:py-2">
                  HOME
                  <FaChevronDown className="text-xs" />
                </li>
                <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 sm:py-2 ">
                  ROOMS
                  <FaChevronDown className="text-xs" />
                </li>
                <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 sm:py-2">
                  PAGES
                  <FaChevronDown className="text-xs" />
                </li>
                <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 sm:py-2">
                  PORTFOLIO
                  <FaChevronDown className="text-xs" />
                </li>
              </ul>
              <ul className="2xl:hidden lg:hidden">
                <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 sm:py-2">
                  BLOG
                  <FaChevronDown className="text-xs" />
                </li>
                <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 sm:py-2">
                  SHOP
                  <FaChevronDown className="text-xs" />
                </li>
                <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 sm:py-2">
                  ELEMENTS
                  <FaChevronDown className="text-xs" />
                </li>
              </ul>
              <div className="flex gap-[32px] items-center justify-center py-4 lg:hidden md:hidden 2xl:hidden">
                <div className="flex  items-center justify-center gap-1">
                  <IoMdCall className="text-white text-2xl sm:text-[16px] font-bold " />
                  <p className="font-robo text-white text-sm sm:text-[12px] sm:font-normal font-bold ">
                    +1 800 603 6035
                  </p>
                </div>
                <button className="px-7 py-4 sm:py-2 sm:text-[12px] bg-[#BF885E] inerline-bolck text-white font-robo font-normal text-sm ">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              className="sm:ml-[-20px] sm:h-[40px] sm:mt-8 md:absolute md:top-10 md:left-10"
              src={logo}
              alt=""
            />
          </div>
          <div>
            <ul className="flex gap-[40px] sm:hidden md:hidden">
              <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3">
                BLOG
                <FaChevronDown className="text-xs" />
              </li>
              <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3">
                SHOP
                <FaChevronDown className="text-xs" />
              </li>
              <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3">
                ELEMENTS
                <FaChevronDown className="text-xs" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-[32px] sm:hidden md:mt-[-20px] pl-[130px] md:absolute md:top-12 md:right-10 lg:absolute lg:top-10 lg:right-10">
          <div className="flex  items-center justify-center gap-1">
            <IoMdCall className="text-white text-2xl sm:text-[16px] font-bold " />
            <p className="font-robo text-white text-sm sm:text-[12px] sm:font-normal font-bold ">
              +1 800 603 6035
            </p>
          </div>
          <button className="px-7 py-4 sm:py-2 sm:text-[12px] bg-[#BF885E] inerline-bolck text-white font-robo font-normal text-sm ">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
