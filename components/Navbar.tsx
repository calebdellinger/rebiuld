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
        <Link href="/" className="text-2xl font-bold text-white">
          <Image className="not-last:" src={logo} alt="Rebiuld Construction" width={100} height={100} />
        </Link>
      </div>

      {/* Navigation Menu on the right */}
      <div className="space-x-10">
        <Link
          href="/services"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-gray-800"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-gray-800"
        >
          About
        </Link>
        <Link
          href="/gallery"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-gray-800"
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="text-md text-black bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white hover:border-2 transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
