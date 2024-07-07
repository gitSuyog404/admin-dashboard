"use client";
import {
  ClipboardDocumentListIcon,
  LockClosedIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { BiTable } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="px-8 mt-8 bg-white flex flex-col ">
      <div className="flex items-center justify-start">
        <h1 className="text-2xl text-[#2B3674]">
          <span className="font-bold ">HORIZON</span> FREE
        </h1>
      </div>
      <div className="mt-10 -ml-8 border-t border-gray-200 w-[18rem]"></div>

      <nav className="mt-10">
        <Link
          href="/"
          className=" link-container flex items-center py-2 px-2 text-[#A3AED0] transition duration-300 group w-[15rem] hover:text-blue-800 font-semibold "
        >
          <HomeIcon className="w-6 h-6 mr-3  " />
          Dashboard
        </Link>

        <Link
          href="/"
          className=" link-container flex items-center py-2 px-2 text-[#A3AED0] transition duration-300 group w-[15rem] hover:text-blue-800  font-semibold"
        >
          <ShoppingCartIcon className="w-6 h-6 mr-3  " />
          NFT Marketplace
        </Link>

        <Link
          href="/"
          className=" link-container flex items-center py-2 px-2 text-[#A3AED0] transition duration-300 group w-[15rem] hover:text-blue-800  font-semibold"
        >
          <BiTable className="w-6 h-6 mr-3  " />
          Tables
        </Link>

        <Link
          href="/"
          className=" link-container flex items-center py-2 px-2 text-[#A3AED0] transition duration-300 group w-[15rem] hover:text-blue-800  font-semibold"
        >
          <ClipboardDocumentListIcon className="w-6 h-6 mr-3  " />
          Kanban
        </Link>

        <Link
          href="/"
          className=" link-container flex items-center py-2 px-2 text-[#A3AED0] transition duration-300 group w-[15rem] hover:text-blue-800  font-semibold"
        >
          <UserIcon className="w-6 h-6 mr-3  " />
          Profile
        </Link>

        <Link
          href="/"
          className=" link-container flex items-center py-2 px-2 text-[#A3AED0] transition duration-300 group w-[15rem] hover:text-blue-800  font-semibold"
        >
          <LockClosedIcon className="w-6 h-6 mr-3  " />
          Sign in
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
