import Image from "next/image";
import React from "react";
import { FaBell, FaInfoCircle, FaMoon, FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-transparent flex items-center  justify-between pl-6 mt-6  gap-[28rem] ">
      <div className=" font-semibold flex flex-col ml-6 ">
        <p className="text-lg text-[#707EAE] ">Pages / Kanban</p>
        <h1 className="text-[2rem] text-[#2B3674]">Kanban</h1>
      </div>

      <div className="flex items-center bg-white p-2 rounded-full shadow-md mr-2">
        <div className="flex items-center bg-[#F4F7FE] p-1 rounded-full">
          <FaSearch className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-700 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <FaBell className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-700 cursor-pointer" />
          <FaMoon className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-700 cursor-pointer" />
          <FaInfoCircle className="text-gray-400 transition duration-150 ease-in-out hover:text-blue-700 cursor-pointer" />
          {/* <img
            src="/luffy.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          /> */}
          <Image
            src="/luffy.jpg"
            alt="profile"
            height={32}
            width={32}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
