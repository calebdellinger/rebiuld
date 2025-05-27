"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/rebiuldLogo.png";

export default function Navbar() {
  return (
    <div className="w-full px-[15%] h-[100px] flex items-center justify-between bg-black">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-white group">
          <Image 
            className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3" 
            src={logo} 
            alt="Rebiuld Construction" 
            width={100} 
            height={100} 
          />
        </Link>
      </div>

      {/* Navigation Menu on the right */}
      <div className="space-x-10">
        <Link
          href="/services"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          About
        </Link>
        <Link
          href="/gallery"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="text-md text-black bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
