import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import paymentimage from "../../../public/payment-img.png";
import image from "../../../public/grogin-logo-dark.webp";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center md:justify-between flex-col md:flex-row gap-10">
          <div>
            <h1 className="text-xl font-semibold">
              Join our newsletter for £10 offs
            </h1>
            <p className="text-sm font-semibold text-gray-500 mt-2">
              Register now to get latest updates on promotions & <br />{" "}
              coupons.Don’t worry, we not spam!
            </p>
          </div>
          <div>
            <div className="flex items-center relative z-0">
              <input
                className="md:w-[300px] lg:w-[350px] h-10 bg-gray-100 rounded-tl-md rounded-bl-md px-3 pl-8 border border-gray-300 focus:outline-none"
                type="search"
                name=""
                id=""
                placeholder="Enter emai address..."
              />
              <button className="bg-purple-600 h-10 p-2 px-3 text-white">
                SEND
              </button>
              <CiMail className="absolute left-2 size-4"></CiMail>
            </div>
            <p className="text-sm font-semibold text-gray-500 mt-2">
              By subscribing you agree to our Terms & <br /> Conditions and
              Privacy & Cookies Policy.
            </p>
          </div>
        </div>
        <hr className="border border-gray-300 my-10" />
        <div className=" text-gray-50 ">
          <div className="flex flex-wrap flex-col md:flex-row justify-between">
            <div>
              <Image src={image} alt="" />
              <ul>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Track Order</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Delivery & Returns</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Warranty</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold text-xl text-gray-500">About Us</li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Rave’s Story</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Work With Us</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Coporate News</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Investors</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className="font-bold text-xl text-gray-500">
                  Useful Links
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Secure Payment</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Terms of Use</Link>
                </li>
                <li className="my-4 text-gray-500 hover:text-green-600 hover:underline">
                  <Link href="/">Archived Products</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold text-xl text-gray-500">
                  Contact Info
                </li>
                <li className="my-4 text-gray-500 flex items-center gap-4">
                  <CiLocationOn className="text-4xl border border-white p-2 rounded-full text-gray-500"></CiLocationOn>
                  <div>
                    <span className="font-bold text-xl">Address:</span>
                    <Link href="/">
                      <br /> 4517 Washington Ave. Manchester, <br /> Kentucky
                      39495
                    </Link>
                  </div>
                </li>
                <li className="my-4 text-gray-500 flex items-center gap-4">
                  <FiPhone className="text-4xl border border-white p-2 rounded-full text-gray-500"></FiPhone>
                  <div>
                    <span className="font-bold text-xl">Phone:</span>
                    <Link href="/">
                      <br /> +880171889547
                    </Link>
                  </div>
                </li>
                <li className="my-4 text-gray-500 flex items-center gap-4">
                  <MdOutlineEmail className="text-4xl border border-white p-2 rounded-full text-gray-500"></MdOutlineEmail>
                  <div>
                    <span className="font-bold text-xl">Email:</span>
                    <Link href="/">
                      <br /> Demo@gmail.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className="text-white w-full" />
          <div className="py-6 ">
            <div className="flex justify-center md:justify-between flex-col md:flex-row gap-10">
              <div className="flex items-center gap-4">
                <div className="flex gap-7 flex-col md:flex-row">
                  <div className="flex items-center gap-4">
                    <Link href="/">
                      <FaInstagram className="font-bold text-xl text-gray-500"></FaInstagram>
                    </Link>
                    <Link href="/">
                      <FaFacebookF className="font-bold text-xl text-gray-500"></FaFacebookF>
                    </Link>
                    <Link href="/">
                      <BsYoutube className="font-bold text-xl text-gray-500"></BsYoutube>
                    </Link>
                  </div>
                  <div>
                    <p className="text-xl text-gray-500 font-semibold">
                      ©2024 <span className="text-green-600">Quomodosoft</span>{" "}
                      All rights reserved
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  className="w-72 cursor-pointer"
                  src={paymentimage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
