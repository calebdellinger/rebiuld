import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bothell Concrete Contractor | New Construction & Neighborhood Foundations | Glacier Peak Concrete",
  description:
    "Professional concrete services in Bothell, WA. Specializing in new construction foundations, neighborhood driveways, and residential concrete for Bothell's growing community.",
  keywords: "Bothell concrete contractor, Bothell foundation services, new construction concrete Bothell, Bothell driveway installation, residential concrete Bothell",
};

function BothellConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/bothell.jpg"
            alt="McMenamins Anderson School in Bothell"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Bothell Concrete Services<br className="hidden sm:block" />
              Building Community Foundations
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Your Trusted Concrete Partner in Bothell
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              As one of the fastest-growing communities in the Pacific Northwest, Bothell represents the perfect blend of established neighborhoods and exciting new development. Glacier Peak Concrete has grown alongside this vibrant city, providing quality concrete services that support both longtime residents and newcomers building their dreams. From the tree-lined streets of established neighborhoods to the modern developments reshaping the skyline, we deliver concrete craftsmanship that builds community, one foundation at a time.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re adding to your family home in Canyon Park, building new construction near the University of Washington Bothell campus, or renovating a property in downtown&apos;s revitalized core, our team understands Bothell&apos;s unique character. We bring neighborhood-focused service and professional expertise to every project, treating your property with the same care we&apos;d give our own.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Comprehensive Concrete Services for Bothell
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">New Construction Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Expert foundation systems for Bothell&apos;s residential expansion. We work with builders and homeowners to create solid foundations for the next generation of neighborhood homes.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Neighborhood Driveways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Quality driveways that enhance curb appeal and property value. From simple replacements to custom designs, we create entrances that welcome you home every day.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Patios & Outdoor Living</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Beautiful outdoor spaces perfect for Pacific Northwest living. We design and build patios that extend your home&apos;s living area and create gathering spaces for family and friends.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Walkways & Pathways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Functional and attractive walkways connecting your property. We create safe, durable paths that handle Bothell&apos;s rainy climate while complementing your landscape design.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Foundation Repair</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Expert repair and stabilization for existing foundations. We diagnose issues and implement lasting solutions that restore structural integrity to established homes.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Decorative Concrete</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Custom decorative finishes that add character to your property. From stamped patterns to colored concrete, we create surfaces that reflect your personal style.
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
              Why Bothell Neighbors Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Community-Focused Service</h3>
                <p className="text-gray-300">
                  We&apos;re not just contractors—we&apos;re neighbors who care about Bothell&apos;s growth and character. Every project receives personal attention and the quality craftsmanship that builds lasting community relationships.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Local Expertise</h3>
                <p className="text-gray-300">
                  Our extensive experience throughout Bothell means we understand local soil conditions, building codes, and neighborhood characteristics. This knowledge ensures smooth projects and superior results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Reliable Communication</h3>
                <p className="text-gray-300">
                  We keep you informed throughout your project with clear, honest communication. You&apos;ll always know what to expect, when to expect it, and what&apos;s happening on your property.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Quality Guarantee</h3>
                <p className="text-gray-300">
                  We stand behind our work with comprehensive warranties and ongoing support. Your satisfaction and the longevity of your concrete investment are our top priorities.
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
            Serving All Bothell Neighborhoods
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 text-center mb-6">
              We proudly serve every corner of Bothell:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="bg-white/5 p-3 rounded-lg">Downtown Bothell</div>
              <div className="bg-white/5 p-3 rounded-lg">Canyon Park</div>
              <div className="bg-white/5 p-3 rounded-lg">Bothell Landing</div>
              <div className="bg-white/5 p-3 rounded-lg">North Creek</div>
              <div className="bg-white/5 p-3 rounded-lg">Queensborough</div>
              <div className="bg-white/5 p-3 rounded-lg">Maywood</div>
              <div className="bg-white/5 p-3 rounded-lg">Thrasher&apos;s Corner</div>
              <div className="bg-white/5 p-3 rounded-lg">Wayne</div>
              <div className="bg-white/5 p-3 rounded-lg">Shelton View</div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Bothell Concrete Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Join your neighbors who trust Glacier Peak Concrete for quality work and reliable service.
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

export default BothellConcrete;
