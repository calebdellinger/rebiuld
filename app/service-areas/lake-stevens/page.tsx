import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lake Stevens Concrete Contractor | Lake Property Foundations & Outdoor Living | Glacier Peak Concrete",
  description:
    "Expert concrete services in Lake Stevens, WA. Specializing in lake property foundations, outdoor entertainment spaces, and durable concrete for recreational properties. Serving the Lake Stevens community.",
  keywords: "Lake Stevens concrete contractor, lake property foundation, Lake Stevens patio construction, recreational property concrete, Lake Stevens driveway installation",
};

function LakeStevens() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/lake-stevens.jpg"
            alt="Lake Stevens Waterfront"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Lake Stevens Concrete Services<br className="hidden sm:block" />
              Building for Lake Life Living
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Concrete Experts for Lake Stevens&apos; Recreational Paradise
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Surrounding the pristine waters of Lake Stevens, this vibrant community embraces outdoor recreation and lakeside living like no other. Glacier Peak Concrete understands that properties here aren&apos;t just homes—they&apos;re gateways to adventure, relaxation, and year-round enjoyment. We specialize in creating concrete foundations and outdoor spaces that support the active lifestyle Lake Stevens residents cherish, from boat-friendly driveways to expansive entertainment patios perfect for summer gatherings.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re building a new lakefront retreat, expanding your family home to accommodate growing recreational needs, or creating the perfect outdoor space for post-lake barbecues, our team delivers concrete solutions built for durability and designed for fun. We know that in Lake Stevens, your property is more than an address—it&apos;s your basecamp for Pacific Northwest adventure.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Concrete Services for Lake Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Lake Property Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Specialized foundations for lakeside and near-lake properties. We address unique challenges of building near water while creating stable platforms for your lake life home.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Entertainment Patios</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Expansive outdoor living spaces perfect for Lake Stevens&apos; social lifestyle. We create patios built for entertaining, from intimate gatherings to full-scale summer parties.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Boat-Friendly Driveways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Heavy-duty driveways designed for boat trailers and recreational vehicles. We engineer surfaces that handle extra weight while providing smooth, reliable access year-round.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Dock Access Concrete</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Durable walkways and launch areas connecting your property to lake access points. We create safe, slip-resistant surfaces that withstand constant foot traffic and water exposure.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Outdoor Kitchen Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Solid bases for outdoor kitchens and grilling stations. Perfect for the Lake Stevens lifestyle where outdoor cooking and lakeside dining are summer traditions.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fire Pit & Gathering Areas</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Custom concrete work for fire pits and outdoor gathering spaces. We create the perfect setting for evening conversations and s&apos;mores after a day on the water.
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
              Why Lake Stevens Residents Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Recreational Property Expertise</h3>
                <p className="text-gray-300">
                  We understand the unique demands of Lake Stevens properties. From heavy boat trailer traffic to outdoor entertainment needs, we design concrete solutions that support your active lifestyle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Durable Construction</h3>
                <p className="text-gray-300">
                  Lake life is hard on concrete. We use premium materials and proven techniques to create surfaces that withstand constant use, weather exposure, and the wear that comes with recreational property ownership.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Community Connection</h3>
                <p className="text-gray-300">
                  We&apos;re part of the Lake Stevens community and understand what makes this area special. Our work reflects the same appreciation for outdoor living and quality of life that drew you here.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Flexible Scheduling</h3>
                <p className="text-gray-300">
                  We know summer is for enjoying the lake, not construction. We work with your schedule to minimize disruption during prime lake season while delivering projects when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Service Areas */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Serving the Entire Lake Stevens Area
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              From lakefront properties to neighborhoods throughout the community, we serve all of Lake Stevens. Whether you&apos;re on the water or in the surrounding residential areas, we bring the same quality and expertise to every project.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Our work includes waterfront homes, family neighborhoods, and everything in between. If you call Lake Stevens home, we&apos;re ready to help build the concrete foundation for your lake life dreams.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Enhance Your Lake Stevens Property?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Let&apos;s create concrete solutions that support your lake life lifestyle.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Lake Life Project
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default LakeStevens;
