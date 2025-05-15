import React from "react";
import Image from "next/image";
import foundation from "@/public/foundation16.jpg";
import logo from "@/public/rebiuldLogo.png"

function Home() {
  return (
    <div className="relative p-10">
      {/* Background Image */}
      <Image
        src={foundation}
        alt="Hero Image"
        className="w-full aspect-video object-cover rounded-xl"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
        {/* Centered Text */}
        <h1 className="text-white text-4xl font-bold text-center pr-6">
          Welcome to
        </h1>
        <Image
          src={logo}
          alt="Rebiuld Construction"
          className="not-last: mt-4"
          width={200}
          height={100}
        /> 

      </div>
    </div>
  );
}

export default Home;
