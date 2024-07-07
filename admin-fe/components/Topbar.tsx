import React from "react";
import { FaBell, FaInfoCircle, FaMoon, FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-transparent flex items-center justify-between px-8 my-[5rem]">
      <div className=" font-semibold flex flex-col ">
        <p className="text-lg text-[#707EAE] ">Pages / Kanban</p>
        <h1 className="text-[2.5rem] text-[#2B3674]">Kanban</h1>
      </div>

      <div className="flex items-center bg-white p-2.5 rounded-full shadow-md">
        <div className="flex items-center bg-[#F4F7FE] p-2 rounded-full">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <FaBell className="text-gray-400" />
          <FaMoon className="text-gray-400" />
          <FaInfoCircle className="text-gray-400" />
          <img
            src="/luffy.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
