"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Link from "next/link";

let date = new Date().getFullYear();

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <section
      className={`font-dmSans pl-3 max-sm:px-4 dark:bg-[#0B1437] ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="max-sm:flex max-sm:flex-col flex flex-row ">
        <div className="flex flex-col ml-[10rem] max-sm:ml-8 max-md:ml-[6rem] ">
          <div className="text-[#A3AED0] mt-8 mb-[8rem] hover:text-gray-600  hover:scale-80 transition duration-100 ease-in-out ">
            <button className=" flex items-center">
              <FaLessThan />
              <span className="pl-3">Back to Dashboard</span>
            </button>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#2B3674] pb-2 dark:text-white">
              Sign In
            </h1>
            <p className="text-[#A3AED0] pb-8 dark:text-[#A3AED0] ">
              Enter your email and password to sign in!
            </p>

            <button className="flex bg-[#4285F4] bg-opacity-15 py-2 rounded-xl px-[8.5rem] shadow-lg hover:bg-opacity-50 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out max-sm:px-[3.5rem] text-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="28"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <span className="dark:text-white">Sign in with Google</span>
            </button>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-[13rem] border-b border-[#E0E5F2] max-sm:w-[7rem] dark:border-white dark:opacity-20"></div>
            <p className="px-2 text-[#A3AED0]">or</p>
            <div className="w-[13rem] border-b border-[#E0E5F2] max-sm:w-[7rem] dark:border-white dark:opacity-20"></div>
          </div>

          <div className="w-full max-w-md space-y-6 mb-8 max-sm:w-[18.5rem]">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold dark:text-white"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="mail@simmply.com"
                required
                className="mt-1 p-3 border dark:text-gray-300 border-gray-300 opacity-55 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-purple-600 dark:focus:border-purple-600 dark:bg-[#0B1437] "
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700 dark:text-white "
              >
                Password*
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="p-3 border dark:text-gray-300 border-gray-300 dark:bg-[#0B1437] opacity-55 rounded-lg shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-purple-600 focus:border-indigo-500 dark:border-purple-600"
                  placeholder="Min. 8 characters"
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEye className="h-5 w-5 text-gray-400" />
                  ) : (
                    <AiOutlineEyeInvisible className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-5">
            <label className="flex items-center text-sm pr-[12rem] max-sm:pr-[3em]">
              <input
                type="checkbox"
                className=" dark:accent-[#7551FF] accent-indigo-600 h-5 w-5"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Keep me logged in{" "}
              </span>
            </label>

            <Link
              href="/"
              className=" text-sm text-indigo-600 hover:underline dark:text-gray-300  "
            >
              Forgot password?
            </Link>
          </div>

          <div className="flex items-center text-center  my-2 mb-6">
            <button className=" bg-indigo-600 dark:bg-[#7551FF] text-white   py-3 rounded-xl pl-[12.5rem] pr-[12.5rem] mr-1    shadow-lg  hover:shadow-2xl dark:hover:bg-purple-700 hover:bg-indigo-900 hover:scale-105 transition duration-300 ease-in-out max-sm:px-[8rem] text-center text-nowrap">
              Sign In{" "}
            </button>
          </div>

          <div className="flex mb-[10rem]">
            <p className="text-sm  dark:text-[#A3AED0] ">Not registered yet?</p>
            <Link
              className="text-sm font-semibold text-indigo-600 dark:text-white transition duration-150 ease-in-out hover:opacity-55 "
              href="/"
            >
              Create an Account
            </Link>
          </div>

          <footer className="mb-4">
            <p className="text-sm text-gray-400 max-sm:text-wrap ">
              &copy; {date} Horizon UI. All Rights Reserved. Made with love by
              Simmmple!{" "}
            </p>
          </footer>
        </div>
        <div className="flex justify-end ml-[5rem] max-sm:hidden sm:hidden   lg:block relative w-full   rounded-bl-[10rem] overflow-hidden   ">
          <Image
            src="/1.png"
            alt="background"
            layout="fill"
            objectFit="cover"
            className="h-full w-full "
          />

          <div className="absolute inset-0 flex flex-col items-center mt-[4rem] p-4 sm:p-8">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="mb-4 max-w-full h-auto pb-[4rem]"
            />
            <div className="border border-gray-400 rounded-xl py-4 px-10 ">
              <p className="text-white text-sm">
                Learn more about Horizon UI on
              </p>
              <Link
                href="/"
                className="text-white text-lg hover:underline flex justify-center"
              >
                horizon-ui.com
              </Link>
            </div>
            <div className=" text-white text-sm flex ml-[10rem] mt-[24.5rem]   gap-7 items-center  ">
              <Link href="/">Marketplace</Link>
              <Link href="/">License</Link>
              <Link href="/">Terms of Use</Link>
              <Link href="/">Blog</Link>
              <button
                onClick={toggleDarkMode}
                className="ml-4 text-sm text-white bg-gray-700 p-2.5 rounded-full"
              >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
