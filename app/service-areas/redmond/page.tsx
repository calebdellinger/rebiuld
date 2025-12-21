import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redmond Concrete Contractor | Tech Hub Foundations & Commercial Concrete | Glacier Peak Concrete",
  description:
    "Professional concrete services in Redmond, WA. Specializing in precision-engineered foundations, modern commercial concrete, and residential services for Redmond's tech community.",
  keywords: "Redmond concrete contractor, Redmond foundation services, commercial concrete Redmond, Redmond driveway installation, tech hub concrete contractor",
};

function RedmondConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/redmond.jpg"
            alt="Redmond Microsoft Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Redmond Concrete Services<br className="hidden sm:block" />
              Precision Engineering for the Tech Hub
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Engineering Excellence for Redmond&apos;s Innovation District
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              In the heart of the Pacific Northwest&apos;s technology corridor, Redmond demands concrete solutions that match its innovative spirit. Glacier Peak Concrete brings precision engineering and modern construction techniques to serve both the thriving tech community and established residential neighborhoods. From the Microsoft campus to the charming downtown core, we understand that Redmond properties require the same attention to detail and forward-thinking approach that defines the city itself.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re building a contemporary home in Education Hill, expanding commercial space in Overlake, or renovating a property near Marymoor Park, our team delivers concrete work engineered for performance and built to last. We combine technical expertise with efficient project management, respecting your time while never compromising on quality.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Concrete Services for Redmond
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Precision Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Engineered foundation systems for modern homes and commercial buildings. We apply the same precision and quality standards that Redmond&apos;s tech industry demands in their own operations.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Commercial Concrete</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Professional concrete services for office buildings, retail spaces, and tech facilities. We deliver on schedule and on budget, understanding the importance of minimal business disruption.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Smart Home Integration</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Foundation work designed to accommodate modern smart home systems, including radiant heating, integrated wiring conduits, and technology infrastructure that Redmond homeowners expect.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Driveways & Parking</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Durable driveways and parking areas for residential and commercial properties. Designed for heavy use and built to withstand the Pacific Northwest climate year after year.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Modern Patios</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Contemporary outdoor living spaces that complement Redmond&apos;s modern architecture. From minimalist designs to elaborate entertainment areas, we create spaces for work-life balance.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sidewalks & Walkways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Professional walkway installation for residential and commercial properties. We create safe, attractive pathways that enhance accessibility and curb appeal.
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
              Why Redmond Chooses Glacier Peak Concrete
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Technical Precision</h3>
                <p className="text-gray-300">
                  We bring an engineer&apos;s mindset to every project. Detailed planning, accurate measurements, and quality control processes ensure your concrete work meets the exacting standards Redmond demands.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Efficient Execution</h3>
                <p className="text-gray-300">
                  Time is valuable in Redmond&apos;s fast-paced environment. We manage projects efficiently, communicate clearly, and deliver on schedule without sacrificing quality or cutting corners.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Modern Solutions</h3>
                <p className="text-gray-300">
                  We stay current with the latest concrete technologies and construction methods. From eco-friendly mixes to advanced reinforcement techniques, we bring innovation to traditional concrete work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Comprehensive Service</h3>
                <p className="text-gray-300">
                  From initial consultation through final inspection, we provide complete project management. You get a single point of contact and seamless coordination throughout your concrete project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Neighborhoods */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Serving All Redmond Neighborhoods
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 text-center mb-6">
              We proudly serve residential and commercial properties throughout Redmond:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="bg-white/5 p-3 rounded-lg">Downtown Redmond</div>
              <div className="bg-white/5 p-3 rounded-lg">Overlake</div>
              <div className="bg-white/5 p-3 rounded-lg">Education Hill</div>
              <div className="bg-white/5 p-3 rounded-lg">Grass Lawn</div>
              <div className="bg-white/5 p-3 rounded-lg">Sammamish Valley</div>
              <div className="bg-white/5 p-3 rounded-lg">Bear Creek</div>
              <div className="bg-white/5 p-3 rounded-lg">Willows</div>
              <div className="bg-white/5 p-3 rounded-lg">Idylwood</div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Redmond Concrete Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Experience precision engineering and professional service for your home or business.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Get Your Project Estimate
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default RedmondConcrete;
