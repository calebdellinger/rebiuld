import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woodinville Concrete Contractor | Wine Country Foundations & Patios | Glacier Peak Concrete",
  description:
    "Premium concrete services in Woodinville, WA. Specializing in wine cellar foundations, winery patios, and decorative concrete for wine country estates. Expert craftsmanship for elegant properties.",
  keywords: "Woodinville concrete contractor, Woodinville foundation specialist, wine cellar foundations, Woodinville patio construction, decorative concrete Woodinville",
};

function WoodinvilleConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/woodinville.jpg"
            alt="Woodinville Wine Country"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Woodinville Concrete Services<br className="hidden sm:block" />
              Crafting Excellence in Wine Country
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Concrete Craftsmanship for Woodinville&apos;s Wine Country
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Nestled in the heart of Washington&apos;s premier wine region, Glacier Peak Concrete understands that Woodinville properties demand a special touch. From the rolling vineyards to elegant estates, we bring sophisticated concrete solutions that complement the refined character of wine country living. Our expertise extends beyond traditional construction to include specialized applications that support the unique needs of wineries, tasting rooms, and luxury residential properties.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re building foundations for temperature-controlled wine cellars, creating inviting patios for outdoor tastings, or designing decorative walkways that enhance your estate&apos;s curb appeal, we deliver precision and artistry. Our team appreciates the importance of climate control, proper drainage, and aesthetic excellence that defines Woodinville&apos;s distinctive properties.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Specialized Concrete Services for Woodinville
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Wine Cellar Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Expert foundation systems designed for temperature-sensitive wine storage. We create stable, insulated foundations that maintain consistent conditions essential for proper wine aging and preservation.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Winery Patios & Walkways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Beautiful decorative concrete for tasting room patios, outdoor event spaces, and vineyard walkways. We create inviting surfaces that enhance the wine country experience for visitors and residents alike.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Estate Driveways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Elegant driveways that make a lasting first impression. From stamped concrete to exposed aggregate, we design entrances that reflect the sophistication of Woodinville&apos;s premier properties.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Climate-Controlled Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Specialized foundation solutions that support radiant heating systems and proper insulation. Perfect for wine storage facilities, luxury homes, and commercial winery operations.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Decorative Concrete</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Custom decorative finishes including stained concrete, stamped patterns, and polished surfaces. We create stunning visual elements that complement wine country architecture and landscaping.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Retaining Walls</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Architectural retaining walls that blend functionality with aesthetic appeal. Essential for terraced vineyards, hillside estates, and creating level outdoor entertainment areas.
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
              Why Woodinville Trusts Glacier Peak Concrete
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Wine Country Expertise</h3>
                <p className="text-gray-300">
                  We understand the unique requirements of wine country properties, from maintaining optimal cellar conditions to creating outdoor spaces that enhance the tasting experience. Our specialized knowledge ensures your investment is protected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Premium Craftsmanship</h3>
                <p className="text-gray-300">
                  Woodinville properties deserve exceptional quality. We use premium materials and meticulous techniques to deliver concrete work that matches the elegance and sophistication of your estate or commercial property.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Custom Solutions</h3>
                <p className="text-gray-300">
                  Every property in Woodinville is unique. We work closely with architects, designers, and property owners to create custom concrete solutions that align with your vision while meeting structural and functional requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Respectful Service</h3>
                <p className="text-gray-300">
                  We respect the tranquil nature of wine country living. Our team works efficiently and professionally, minimizing disruption to your property and maintaining the peaceful atmosphere that makes Woodinville special.
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
              Serving Woodinville&apos;s Finest Properties
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              From Hollywood Hill to the Sammamish River Valley, we&apos;ve built lasting relationships with Woodinville homeowners, wineries, and businesses. Our portfolio includes work at prestigious estates, boutique wineries, and luxury residential developments throughout the area.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We&apos;re proud to contribute to the infrastructure that supports Woodinville&apos;s thriving wine industry and residential community, one exceptional concrete project at a time.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Enhance Your Woodinville Property?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Let&apos;s discuss how our concrete expertise can elevate your wine country estate or business.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default WoodinvilleConcrete;
