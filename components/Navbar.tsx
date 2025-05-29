"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/rebiuldLogo.png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-[15%] h-[100px] flex items-center justify-between bg-black relative">
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

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="lg:hidden text-white p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Menu */}
      <div className={`
        lg:space-x-10 lg:flex
        ${isMenuOpen ? 'flex' : 'hidden'}
        flex-col lg:flex-row
        absolute lg:relative
        top-[100px] lg:top-auto
        left-0 lg:left-auto
        w-full lg:w-auto
        bg-black lg:bg-transparent
        p-4 lg:p-0
        space-y-4 lg:space-y-0
        z-50
      `}>
        <Link
          href="/services"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 text-center lg:text-left"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 text-center lg:text-left"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/gallery"
          className="text-md px-4 py-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 text-center lg:text-left"
          onClick={() => setIsMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="text-md text-black bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out transform hover:scale-105 text-center lg:text-left"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
