import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bellevue Concrete Contractor | Luxury Foundations & Decorative Concrete | Glacier Peak Concrete",
  description:
    "Premium concrete services in Bellevue, WA. Specializing in luxury residential foundations, high-end decorative concrete, and modern architectural walls. Expert service for Bellevue's finest properties.",
  keywords: "Bellevue concrete contractor, Bellevue foundation services, luxury concrete Bellevue, decorative concrete Bellevue, Bellevue patio construction",
};

function BellevueConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/bellevue.jpg"
            alt="Bellevue Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Bellevue Concrete Services<br className="hidden sm:block" />
              Luxury Meets Precision
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Premier Concrete Contractor for Bellevue
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              In Bellevue&apos;s landscape of luxury and innovation, Glacier Peak Concrete delivers concrete solutions that match the city&apos;s high standards. From the prestigious neighborhoods of Medina and Clyde Hill to the modern developments of Downtown Bellevue, we specialize in premium concrete work that combines cutting-edge design with uncompromising quality. Our expertise serves homeowners and businesses who demand nothing less than perfection.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re building a contemporary masterpiece overlooking Lake Washington or renovating a classic estate in Somerset, our team brings the technical precision and aesthetic sensibility required for Bellevue&apos;s most discerning clients. We understand that in this city of excellence, every detail matters, and we deliver concrete craftsmanship that reflects your commitment to quality.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Premium Concrete Services for Bellevue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Luxury Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Engineered foundation systems for high-end residential and commercial properties. We deliver the structural integrity and precision that Bellevue&apos;s luxury construction demands.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Decorative Concrete</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Premium decorative finishes including polished concrete, custom staining, and intricate stamped patterns. We create stunning surfaces that serve as architectural focal points.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Architectural Walls</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Contemporary architectural walls and features that define modern Bellevue design. From sleek retaining walls to dramatic statement pieces that enhance property value.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Outdoor Living Spaces</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Elegant patios, entertainment areas, and outdoor kitchens designed for sophisticated living. We create seamless indoor-outdoor transitions that maximize your property&apos;s potential.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Custom Driveways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Designer driveways that make powerful first impressions. From heated concrete to decorative borders, we craft entrances worthy of Bellevue&apos;s premier addresses.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Commercial Concrete</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Professional concrete solutions for Bellevue&apos;s thriving business community. From retail spaces to corporate campuses, we deliver on time and on budget.
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
              Why Bellevue&apos;s Elite Choose Glacier Peak Concrete
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Uncompromising Quality</h3>
                <p className="text-gray-300">
                  We understand that Bellevue clients expect perfection. Our meticulous attention to detail, premium materials, and expert craftsmanship ensure results that exceed the highest standards of quality and durability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Design Excellence</h3>
                <p className="text-gray-300">
                  Our team collaborates with Bellevue&apos;s top architects and designers to bring visionary concepts to life. We combine technical expertise with aesthetic sensibility to create concrete work that&apos;s both beautiful and functional.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Professional Service</h3>
                <p className="text-gray-300">
                  From initial consultation to project completion, we provide the white-glove service that Bellevue properties deserve. Clear communication, respect for your property, and commitment to your timeline are our priorities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Proven Track Record</h3>
                <p className="text-gray-300">
                  Our portfolio includes some of Bellevue&apos;s most prestigious residential and commercial projects. We&apos;ve earned the trust of discerning clients through consistent delivery of exceptional results.
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
            Serving Bellevue&apos;s Premier Neighborhoods
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 text-center mb-6">
              We proudly serve all of Bellevue&apos;s distinguished communities:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="bg-white/5 p-3 rounded-lg">Downtown</div>
              <div className="bg-white/5 p-3 rounded-lg">Medina</div>
              <div className="bg-white/5 p-3 rounded-lg">Clyde Hill</div>
              <div className="bg-white/5 p-3 rounded-lg">Somerset</div>
              <div className="bg-white/5 p-3 rounded-lg">Eastgate</div>
              <div className="bg-white/5 p-3 rounded-lg">Crossroads</div>
              <div className="bg-white/5 p-3 rounded-lg">Bridle Trails</div>
              <div className="bg-white/5 p-3 rounded-lg">West Bellevue</div>
              <div className="bg-white/5 p-3 rounded-lg">Factoria</div>
              <div className="bg-white/5 p-3 rounded-lg">Newport Hills</div>
              <div className="bg-white/5 p-3 rounded-lg">Wilburton</div>
              <div className="bg-white/5 p-3 rounded-lg">Enatai</div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Experience the Glacier Peak Difference
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Discover why Bellevue&apos;s most discerning property owners trust us with their concrete projects.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default BellevueConcrete;
