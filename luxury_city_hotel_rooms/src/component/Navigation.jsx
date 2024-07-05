import { FaChevronDown } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

import logo from "../image/logo.png";

export default function Navigation() {
  return (
    <div className="flex items-center justify-center bg-[#473D35] w-full h-[144px]">
      <div className="flex items-center justify-center gap-10 pr-[240px] ">
        <div className="flex items-center gap-2 ">
          <p className="text-sm text-white font-robo font-normal">EN</p>
          <FaChevronDown className="text-white text-xs " />
        </div>
        <IoSearchSharp className="text-[24px] text-white" />
      </div>
      <div className="flex items-center justify-center gap-[40px]">
        <div>
          <ul className="flex gap-[40px]">
            <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 ">
              HOME
              <FaChevronDown className="text-xs" />
            </li>
            <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3 ">
              ROOMS
              <FaChevronDown className="text-xs" />
            </li>
            <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3">
              PAGES
              <FaChevronDown className="text-xs" />
            </li>
            <li className="flex items-center justify-center text-sm font-robo font-normal text-white gap-3">
              PORTFOLIO
              <FaChevronDown className="text-xs" />
            </li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-[40px]">
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
      <div className="flex gap-[32px] pl-[130px]">
        <div className="flex items-center justify-center gap-1">
          <IoMdCall className="text-white text-2xl font-bold " />
          <p className="font-robo text-white text-sm font-bold ">
            +1 800 603 6035
          </p>
        </div>
        <button className="px-7 py-4 bg-[#BF885E] inerline-bolck text-white font-robo font-normal text-sm ">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
