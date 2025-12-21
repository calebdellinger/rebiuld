import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kirkland Concrete Contractor | Waterfront Foundations & Lakeside Patios | Glacier Peak Concrete",
  description:
    "Expert concrete services in Kirkland, WA. Specializing in waterfront foundations, lakeside patios, and moisture-resistant concrete for Lake Washington properties. Premium quality for Kirkland homes.",
  keywords: "Kirkland concrete contractor, waterfront foundation Kirkland, Lake Washington concrete, Kirkland patio construction, lakeside concrete services",
};

function KirklandConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/kirkland.jpg"
            alt="Kirkland Waterfront on Lake Washington"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Kirkland Concrete Services<br className="hidden sm:block" />
              Waterfront Living Specialists
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Premier Concrete Solutions for Kirkland&apos;s Waterfront
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Along the shores of Lake Washington, Kirkland&apos;s waterfront properties demand concrete expertise that goes beyond standard construction. Glacier Peak Concrete specializes in the unique challenges of lakeside building, from managing high water tables to creating moisture-resistant foundations that withstand proximity to the water. Our deep understanding of waterfront construction ensures your investment remains solid and beautiful for decades to come.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re enhancing a classic waterfront estate in Juanita, building in the vibrant downtown corridor, or developing property in Finn Hill, we bring specialized knowledge of Kirkland&apos;s lakeside conditions. From foundations that resist moisture intrusion to patios designed for entertaining with lake views, our concrete work complements the lifestyle that makes Kirkland so desirable.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Waterfront Concrete Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Waterfront Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Specialized foundation systems engineered for lakeside properties. We address high water tables, soil saturation, and moisture management to create stable, long-lasting foundations.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Lakeside Patios</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Beautiful outdoor living spaces designed to maximize your lake views. We create entertainment areas that resist moisture damage while providing the perfect setting for waterfront gatherings.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Moisture-Resistant Solutions</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Advanced concrete mixes and waterproofing techniques that protect against Kirkland&apos;s lakeside humidity and seasonal water level changes. Your concrete stays strong and crack-free.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Walkways & Pathways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Elegant walkways connecting your home to the waterfront. We design paths that handle foot traffic while complementing your landscape and providing safe access to docks and beaches.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Driveways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Durable driveways built to withstand Kirkland&apos;s wet climate. Proper drainage and quality materials ensure your driveway remains smooth and functional year-round.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Retaining Walls</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Engineered retaining walls for sloped waterfront lots. We create level spaces while managing drainage and preventing erosion on properties leading down to the lake.
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
              Why Kirkland Trusts Glacier Peak Concrete
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Waterfront Expertise</h3>
                <p className="text-gray-300">
                  We understand the unique challenges of building near Lake Washington. Our specialized knowledge of waterfront construction, moisture management, and soil conditions ensures your project succeeds where others might struggle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Quality Materials</h3>
                <p className="text-gray-300">
                  Lakeside properties require premium materials that resist moisture and environmental stress. We use advanced concrete mixes, proper reinforcement, and proven waterproofing systems for lasting performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Local Knowledge</h3>
                <p className="text-gray-300">
                  From Marina Park to Totem Lake, we know Kirkland intimately. Our experience with local regulations, shoreline requirements, and neighborhood characteristics ensures smooth project execution.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Aesthetic Excellence</h3>
                <p className="text-gray-300">
                  Kirkland properties deserve beautiful concrete work that enhances property value. We combine technical expertise with design sensibility to create functional art that complements your waterfront lifestyle.
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
            Serving All of Kirkland
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 text-center mb-6">
              We proudly serve every Kirkland neighborhood:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="bg-white/5 p-3 rounded-lg">Downtown Kirkland</div>
              <div className="bg-white/5 p-3 rounded-lg">Juanita</div>
              <div className="bg-white/5 p-3 rounded-lg">Finn Hill</div>
              <div className="bg-white/5 p-3 rounded-lg">Totem Lake</div>
              <div className="bg-white/5 p-3 rounded-lg">Houghton</div>
              <div className="bg-white/5 p-3 rounded-lg">Bridle Trails</div>
              <div className="bg-white/5 p-3 rounded-lg">Kingsgate</div>
              <div className="bg-white/5 p-3 rounded-lg">Rose Hill</div>
              <div className="bg-white/5 p-3 rounded-lg">Everest</div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Enhance Your Kirkland Waterfront Property
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Let our waterfront specialists create concrete solutions perfect for lakeside living.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Request Your Waterfront Consultation
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default KirklandConcrete;
