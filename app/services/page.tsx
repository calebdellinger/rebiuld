import React from "react";
import { Button } from "@/components/ui/button";

function Services() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-lg mb-8 text-white text-center max-w-2xl">
          We offer a wide range of construction services to meet your needs.
          From residential to commercial projects, we have the expertise and
          experience to deliver high-quality results.
        </p>
        <Button variant="secondary">Get Started</Button>
      </div>
      
    </div>
  );
}

export default Services;
