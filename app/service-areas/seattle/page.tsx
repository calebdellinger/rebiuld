import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle Concrete Contractor | Foundation & Flatwork Services | Glacier Peak Concrete",
  description:
    "Expert concrete services in Seattle, WA. Specializing in urban foundations, eco-friendly concrete solutions, and innovative construction for residential and commercial projects. Licensed & insured.",
  keywords: "Seattle concrete contractor, Seattle foundation repair, concrete services Seattle, Seattle driveway installation, Seattle patio construction, urban concrete solutions",
};

function SeattleConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/seattle.jpg"
            alt="Seattle Skyline with Space Needle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Seattle Concrete Services<br className="hidden sm:block" />
              Building Innovation in the Emerald City
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Your Trusted Seattle Concrete Contractor
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              In the heart of the Pacific Northwest, Glacier Peak Concrete brings innovative concrete solutions to Seattle&apos;s unique urban landscape. From Capitol Hill to West Seattle, we understand the challenges of building in a city where sustainability meets innovation. Our team specializes in eco-friendly concrete practices that align with Seattle&apos;s commitment to environmental stewardship while delivering the durability and precision your project demands.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re renovating a historic Craftsman home in Queen Anne or building a modern structure in South Lake Union, our expertise in urban foundation solutions ensures your project stands strong for generations. We navigate Seattle&apos;s complex terrain, from hillside properties to waterfront locations, with the technical knowledge and creative problem-solving that sets us apart.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Concrete Services for Seattle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Urban Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Expert foundation work for Seattle&apos;s diverse architecture, from historic homes to modern high-rises. We specialize in challenging urban sites with limited access and complex soil conditions.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Eco-Friendly Solutions</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Sustainable concrete practices including recycled materials, permeable pavement, and low-carbon mix designs that meet Seattle&apos;s green building standards and environmental goals.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Rooftop & Terrace Work</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Specialized concrete installations for urban rooftop decks, terraces, and elevated outdoor spaces. Perfect for maximizing Seattle&apos;s limited outdoor living areas with stunning city views.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Driveways & Parking</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Durable driveways and parking solutions designed for Seattle&apos;s rainy climate. We create proper drainage systems to handle the Pacific Northwest&apos;s heavy precipitation.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Decorative Concrete</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Custom decorative concrete that complements Seattle&apos;s artistic culture. From stamped patios to polished interior floors, we bring creative vision to functional concrete surfaces.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Hillside Expertise</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Specialized retaining walls and foundation systems for Seattle&apos;s steep terrain. We engineer solutions that work with the natural topography while ensuring structural integrity.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Why Choose Us */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              Why Seattle Chooses Glacier Peak Concrete
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Local Expertise</h3>
                <p className="text-gray-300">
                  We understand Seattle&apos;s unique challenges, from seismic considerations to managing water runoff in our rainy climate. Our team has extensive experience working throughout King County, navigating local building codes and permit requirements with ease.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Sustainable Practices</h3>
                <p className="text-gray-300">
                  As a Seattle-based company, we share your commitment to environmental responsibility. We use sustainable materials, minimize waste, and implement green building practices that reduce our carbon footprint while delivering superior results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Urban Innovation</h3>
                <p className="text-gray-300">
                  Seattle&apos;s dense urban environment requires creative solutions. We excel at working in tight spaces, coordinating with neighbors, and completing projects efficiently without compromising quality or safety standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Quality Guarantee</h3>
                <p className="text-gray-300">
                  Every project receives our full attention to detail and commitment to excellence. We stand behind our work with comprehensive warranties and ongoing support, ensuring your concrete investment lasts for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Neighborhoods We Serve */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Seattle Neighborhoods We Serve
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 text-center mb-6">
              From north to south, east to west, we proudly serve all Seattle neighborhoods including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="bg-white/5 p-3 rounded-lg">Capitol Hill</div>
              <div className="bg-white/5 p-3 rounded-lg">Queen Anne</div>
              <div className="bg-white/5 p-3 rounded-lg">Ballard</div>
              <div className="bg-white/5 p-3 rounded-lg">Fremont</div>
              <div className="bg-white/5 p-3 rounded-lg">West Seattle</div>
              <div className="bg-white/5 p-3 rounded-lg">Wallingford</div>
              <div className="bg-white/5 p-3 rounded-lg">Green Lake</div>
              <div className="bg-white/5 p-3 rounded-lg">Magnolia</div>
              <div className="bg-white/5 p-3 rounded-lg">Beacon Hill</div>
              <div className="bg-white/5 p-3 rounded-lg">Columbia City</div>
              <div className="bg-white/5 p-3 rounded-lg">Ravenna</div>
              <div className="bg-white/5 p-3 rounded-lg">Greenwood</div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Seattle Concrete Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Contact Glacier Peak Concrete today for a free consultation and estimate.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default SeattleConcrete;
