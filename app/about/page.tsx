import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

function About() {
  return (
    <div className="text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <Image
            src="https://photos.smugmug.com/RebiuldWeb/i-4jZtzj7/0/KGHqpNN7943h7p7n39HpgrqqD6MMJwmLdFszczFZR/X4/6F4A3492-X4.jpg"
            alt="Rebiuld Construction Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-relaxed">
              Building Tomorrow&apos;s Legacy, <br className="hidden sm:block" />Today
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Mission Statement */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              At Rebiuld Construction, we&apos;re more than builders &mdash; we&apos;re innovators in construction,
              dedicated to turning visions into reality while setting new standards in quality and craftsmanship.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Values Section */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We constantly push boundaries, exploring better ways to build and smarter solutions
                to challenges. Our unique approach, even down to our name with the &apos;i&apos; before the &apos;u&apos;,
                reflects our innovative spirit.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quality</h3>
              <p className="text-sm sm:text-base text-gray-300">
                From foundations to finishing touches, we maintain the highest standards of quality
                in every project. Our work isn&apos;t just about meeting expectations &mdash; it&apos;s about
                exceeding them.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Community</h3>
              <p className="text-sm sm:text-base text-gray-300">
                We build more than structures; we build relationships. Whether it&apos;s a front porch
                for your rocking chair or a patio for family gatherings, we&apos;re here to enhance
                your living spaces.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Passion Section */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://photos.smugmug.com/RebiuldWeb/i-pFV4Hsm/0/L4B6Dtk2xWz9XZBCNc92rzfKXxBTLXssrfxmgR4rq/X5/6F4A3422-X5.jpg"
                alt="Rebiuld Team at Work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Passion Drives Our Purpose</h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                At Rebiuld, we believe that great work comes from genuine passion and enjoyment. 
                Our team doesn&apos;t just build structures &mdash; we pour our hearts into every project, 
                bringing enthusiasm and positive energy to each workday. We take pride in creating 
                spaces that bring joy to others while having fun along the way.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                This passion shows in our attention to detail, our collaborative spirit, and the 
                smiles on our faces as we transform your vision into reality. When you work with 
                Rebiuld, you&apos;re not just getting builders &mdash; you&apos;re getting a dedicated team that 
                truly loves what they do.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Team Section */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://photos.smugmug.com/RebiuldWeb/i-VnzQwMT/0/K82GKjMwkWSvkD6wWrxCkShFZXg6nxQx5qP9HsZ3m/X5/6F4A8380-2-X5.jpg"
              alt="Our Work"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
              <div className="max-w-3xl text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Legacy</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                  Every project we undertake is a chance to restore, innovate, and leave a lasting
                  mark of excellence. We&apos;re building not just for today, but for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Build Your Dream?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default About;
