import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snohomish Concrete Contractor | Historic Home Foundations & Restoration | Glacier Peak Concrete",
  description:
    "Expert concrete services in Snohomish, WA. Specializing in historic home foundations, restoration-friendly concrete work, and riverside property solutions. Preserving Snohomish's heritage.",
  keywords: "Snohomish concrete contractor, historic foundation repair Snohomish, Snohomish concrete services, riverside concrete work, heritage home contractor",
};

function SnohomishConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/snohomish.jpg"
            alt="Historic Downtown Snohomish"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Snohomish Concrete Services<br className="hidden sm:block" />
              Honoring Heritage, Building the Future
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Concrete Craftsmanship for Snohomish&apos;s Historic Community
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              In the Antique Capital of the Northwest, where history lives in every Victorian home and century-old building, Glacier Peak Concrete brings specialized expertise that respects Snohomish&apos;s rich heritage. We understand that working in this historic community requires more than technical skill—it demands sensitivity to architectural preservation, knowledge of older construction methods, and the ability to blend modern concrete techniques with traditional aesthetics.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              From the tree-lined streets of downtown to riverside properties along the Snohomish River, we serve homeowners and businesses who value both preservation and progress. Whether you&apos;re restoring a historic home&apos;s foundation, adding modern amenities while maintaining period character, or building new construction that complements the community&apos;s charm, our team delivers concrete solutions that honor the past while embracing the future.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Heritage-Conscious Concrete Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Historic Foundation Repair</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Specialized foundation work for Snohomish&apos;s century-old homes. We stabilize and restore historic foundations while preserving architectural integrity and meeting modern building standards.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Period-Appropriate Driveways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Driveways and walkways designed to complement historic architecture. We create surfaces that blend seamlessly with Snohomish&apos;s vintage character while providing modern durability.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Riverside Concrete Work</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Expert concrete solutions for properties near the Snohomish River. We address unique challenges of riverside construction including moisture management and seasonal water level changes.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Front Porch Restoration</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Beautiful concrete work for classic front porches and entry areas. We restore and enhance these gathering spaces that define Snohomish&apos;s welcoming community character.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Patios & Outdoor Spaces</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Custom patios perfect for enjoying Snohomish&apos;s small-town charm. From intimate garden spaces to larger entertainment areas, we create outdoor living that fits your lifestyle.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">New Construction Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Modern foundation systems for new homes that respect Snohomish&apos;s architectural heritage. We build strong foundations for the next generation of community landmarks.
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
              Why Snohomish Trusts Glacier Peak Concrete
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Heritage Expertise</h3>
                <p className="text-gray-300">
                  We understand the special requirements of working with historic properties. Our team knows how to preserve architectural character while upgrading foundations and concrete work to modern standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Community Values</h3>
                <p className="text-gray-300">
                  Like Snohomish itself, we value craftsmanship, community, and quality that lasts. We&apos;re not just contractors—we&apos;re partners in preserving what makes this town special while supporting its growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Riverside Experience</h3>
                <p className="text-gray-300">
                  Our expertise with riverside properties ensures your concrete work withstands proximity to water. We manage moisture, drainage, and seasonal challenges that come with Snohomish River locations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Respectful Service</h3>
                <p className="text-gray-300">
                  We work with the same care and respect that Snohomish residents show their community. Clean job sites, courteous crews, and attention to your property are standard on every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Local Focus */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Proud to Serve Snohomish
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              From the historic downtown district to the expanding residential areas, we&apos;ve built lasting relationships with Snohomish homeowners and businesses. Our work can be found throughout the community, from restored Victorian foundations to modern new construction.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We&apos;re honored to contribute to Snohomish&apos;s continued preservation and growth, one quality concrete project at a time.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Enhance Your Snohomish Property?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Let&apos;s discuss how we can bring quality concrete craftsmanship to your home or business.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Request Your Free Consultation
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default SnohomishConcrete;
