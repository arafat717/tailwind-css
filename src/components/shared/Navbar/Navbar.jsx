"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/grogin-logo-dark.webp";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleclick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <div className="bg-white border border-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between items-center py-5">
              <Link href="/">
                <Image
                  src={logo}
                  width={150}
                  height={150}
                  alt="logo image"
                ></Image>
              </Link>
              <div className="relative">
                <input
                  className="md:w-[450px] lg:w-[500px] h-11 bg-gray-100 rounded-md px-3 border border-gray-300 focus:outline-none"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for products,categories and brands..."
                />
                <BiSearch className="size-6 absolute top-3 right-4"></BiSearch>
              </div>
              <div className="flex justify-evenly items-center gap-4">
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  <IoPersonOutline className="size-7"></IoPersonOutline>
                  <p>Account</p>
                </div>
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  <IoMdHeartEmpty className="size-7"></IoMdHeartEmpty>
                  <p>Wishlist</p>
                </div>
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  <IoCartOutline className="size-7"></IoCartOutline>
                  <p>Your Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 font-semibold">
          <div className="flex justify-center items-center gap-6">
            <Link href="home">Home</Link>
            <Link href="home">Shop</Link>
            <Link href="home">Fruits and Vegitables</Link>
            <Link href="home">Beverages</Link>
            <Link href="home">Blog</Link>
            <Link href="home">Contact</Link>
          </div>
          <div className="flex justify-center items-center gap-6">
            <a href="/" className="flex justify-center items-center gap-3">
              <span> Tranding Products</span>{" "}
              <IoIosArrowDown className="size-5"></IoIosArrowDown>
            </a>
            <a
              href="/"
              className="flex justify-center items-center gap-3 text-red-500"
            >
              <span>Almost Finished</span>{" "}
              <IoIosArrowDown className="size-5"></IoIosArrowDown>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:hidden px-3 py-4 flex justify-between items-center z-40">
        <div onClick={handleclick}>
          {clicked ? (
            <RxCross1 className="size-6 cursor-pointer"></RxCross1>
          ) : (
            <HiMenuAlt3 className="size-6 cursor-pointer"></HiMenuAlt3>
          )}
        </div>
        <Link href="/">
          <Image src={logo} width={150} height={150} alt="logo image"></Image>
        </Link>
      </div>
      <div className="absolute bg-white w-full max-h-screen z-40 ">
        {clicked && (
          <div className="pb-10">
            <div className="flex justify-between items-center pl-4 pt-4">
              <div className="flex justify-start items-center gap-2 text-sm ">
                <p className="text-gray-400 text-[12px]">Your Location</p>
                <CiLocationOn className="size-4"></CiLocationOn>
                <p className="font-semibold">all</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-500 cursor-pointer">
                  Change
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-4 pt-2 font-semibold">
              <Link
                className="border-t-[0.5px] border-b-[0.5px] border-gray-300 py-2 border-collapse"
                href="home"
              >
                Home
              </Link>
              <Link
                className=" border-b-[0.5px] border-gray-300 py-2"
                href="home"
              >
                Shop
              </Link>
              <Link
                className=" border-b-[0.5px] border-gray-300 py-2"
                href="home"
              >
                Fruits and Vegitables
              </Link>
              <Link
                className=" border-b-[0.5px] border-gray-300 py-2"
                href="home"
              >
                Beverages
              </Link>
              <Link
                className=" border-b-[0.5px] border-gray-300 py-2"
                href="home"
              >
                Blog
              </Link>
              <Link
                className=" border-b-[0.5px] border-gray-300 py-2"
                href="home"
              >
                Contact
              </Link>
            </div>
            <div className="pl-4 pt-2">
              <h6 className="text-gray-400 font-semibold">Grogin Helpers</h6>
              <div className="flex flex-col gap-1 mt-3 text-sm font-semibold">
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Order Tracking</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact</Link>
              </div>
            </div>
            <hr className="my-3" />
            <div className="pl-4 pt-2">
              <h6 className="text-gray-400 font-semibold">Contact Details</h6>
              <div className="mt-3">
                <div className="flex items-center gap-4">
                  <MdLocalPhone className="size-5"></MdLocalPhone>
                  <div>
                    <h1 className="text-md font-semibold">+8801972041006</h1>
                    <p className="text-[12px] font-semibold text-gray-400">
                      You can call anytime from 9 am to 6 pm.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <FaTelegramPlane className="size-5"></FaTelegramPlane>
                  <div>
                    <h1 className="text-md font-semibold">
                      arafatjibon33@gmail.com
                    </h1>
                    <p className="text-[12px] font-semibold text-gray-400">
                      We will glady assist you in the short time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
