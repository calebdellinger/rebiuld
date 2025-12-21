import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Issaquah Concrete Contractor | Hillside Foundations & Retaining Walls | Glacier Peak Concrete",
  description:
    "Expert concrete services in Issaquah, WA. Specializing in hillside foundations, retaining walls for sloped properties, and mountain terrain expertise. Serving the Issaquah Highlands and beyond.",
  keywords: "Issaquah concrete contractor, Issaquah foundation specialist, hillside retaining walls Issaquah, sloped property concrete, Issaquah Highlands contractor",
};

function IssaquahConcrete() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="/service-areas/issaquah.jpg"
            alt="Issaquah Mountains and Tiger Mountain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Issaquah Concrete Services<br className="hidden sm:block" />
              Mountain Terrain Specialists
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Introduction */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Concrete Experts for Issaquah&apos;s Mountain Living
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Nestled against the dramatic backdrop of Tiger Mountain and the Issaquah Alps, your property presents unique challenges that demand specialized concrete expertise. Glacier Peak Concrete has mastered the art and science of building on Issaquah&apos;s varied terrain, from steep hillsides to level valleys. We understand how elevation changes, soil composition, and mountain weather patterns affect concrete construction, and we engineer solutions that stand the test of time.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re building in the Issaquah Highlands with its sweeping views, developing property in historic downtown, or creating your dream home on a forested slope, our team brings the technical knowledge and mountain expertise your project requires. We transform challenging sites into stable, beautiful foundations that support your vision while respecting the natural landscape.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Specialized Mountain Concrete Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Hillside Foundations</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Expert foundation systems engineered for sloped terrain. We create stable platforms for homes and structures on Issaquah&apos;s challenging hillsides, ensuring structural integrity and longevity.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Retaining Walls</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Engineered retaining wall systems that manage elevation changes while preventing erosion. Essential for creating level yards, terraced gardens, and usable outdoor spaces on mountain properties.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sloped Driveways</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Durable driveways designed for Issaquah&apos;s elevation changes. We engineer proper grades, drainage, and traction surfaces to ensure safe access in all weather conditions.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Drainage Solutions</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Critical water management systems integrated into our concrete work. We protect your property from runoff and erosion common in mountain terrain and Pacific Northwest rainfall.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Multi-Level Patios</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Terraced outdoor living spaces that work with your property&apos;s natural contours. We create beautiful, functional entertainment areas that maximize views and usable space.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Walkways & Steps</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Safe, attractive pathways and stairways that navigate elevation changes. From front entries to backyard trails, we create accessible routes throughout your mountain property.
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
              Why Issaquah Homeowners Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Mountain Expertise</h3>
                <p className="text-gray-300">
                  We specialize in the unique challenges of mountain construction. Our experience with Issaquah&apos;s terrain, soil conditions, and weather patterns ensures your concrete project is built to last through decades of Pacific Northwest seasons.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Engineering Excellence</h3>
                <p className="text-gray-300">
                  Every hillside project requires careful engineering. We analyze soil stability, calculate proper reinforcement, and design drainage systems that protect your investment from the forces of nature.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Environmental Respect</h3>
                <p className="text-gray-300">
                  We understand the importance of preserving Issaquah&apos;s natural beauty. Our construction methods minimize environmental impact while creating structures that blend harmoniously with the mountain landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Local Knowledge</h3>
                <p className="text-gray-300">
                  From the Issaquah Highlands to Squak Mountain, we know the area intimately. Our familiarity with local building codes, permit requirements, and neighborhood characteristics streamlines your project.
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
              Serving All of Issaquah
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              From valley floor to mountain peak, we serve every corner of Issaquah including the Highlands, Olde Town, Providence Point, and surrounding areas. Our expertise extends to neighboring communities in the Sammamish Plateau and Tiger Mountain foothills.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              No site is too challenging, no slope too steep. If you can build there, we can pour the concrete foundation that makes it possible.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Build on Issaquah&apos;s Terrain?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Let our mountain terrain specialists assess your property and design the perfect concrete solution.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Get Your Free Site Assessment
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default IssaquahConcrete;
