import React from "react";
import Image from "next/image";
import foundation from "@/public/foundation16.jpg";
import logo from "@/public/rebiuldLogo.png"
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rebiuld Construction',
  description: 'Where we build your dreams!',
};

function Home() {
  return (
    <div className="min-h-full">
      {/* Hero Section - No Animation */}
      <div className="relative p-4 sm:p-6 lg:p-10">
        {/* Background Image */}
        <Image
          src={foundation}
          alt="Hero Image"
          className="w-full aspect-video object-cover rounded-xl"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Centered Text */}
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Welcome to
          </h1>
          <Image
            src={logo}
            alt="Rebiuld Construction"
            className="w-32 sm:w-40 lg:w-[200px] h-auto"
            width={200}
            height={100}
          /> 
        </div>
      </div>

      {/* Video and Text Section - No Animation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Building Dreams Into Reality</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              At Rebiuld Construction, we specialize in turning your construction dreams into reality. 
              With years of experience and dedication to quality, we handle projects of all sizes 
              with the same level of commitment and professionalism.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
              Our team of experts brings innovation, reliability, and excellence to every project, 
              ensuring that your vision is realized exactly as you imagined it.
            </p>
          </div>

          {/* Video Player */}
          <div className="w-full lg:w-1/2">
            <video 
              className="w-full rounded-lg shadow-lg"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://photos.smugmug.com/RebiuldWeb/i-zJcPvTL/0/MMVzz2zGgXNjzP6GsqR6JDLL2BQsdLCD9SLRQvNZf/1920/FoundationPour_timelapse-1920.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Image and Text Section - With Animation */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://photos.smugmug.com/RebiuldWeb/i-4jZtzj7/0/KGHqpNN7943h7p7n39HpgrqqD6MMJwmLdFszczFZR/X4/6F4A3492-X4.jpg"
                  alt="Construction Progress"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 self-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Quality in Every Detail</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                From foundation to finish, we take pride in delivering exceptional quality in every aspect 
                of our construction projects. Our meticulous attention to detail ensures that each 
                structure we build meets the highest standards of craftsmanship.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
                We understand that your project is more than just a building – it&apos;s a vision of your 
                future. That&apos;s why we combine innovative techniques with time-tested methods to create 
                spaces that are both beautiful and enduring.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Mirrored Image and Text Section - With Animation */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="flex-1 self-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Building Your Vision</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Every project begins with a vision, and our mission is to bring that vision to life. 
                With state-of-the-art equipment and experienced professionals, we ensure your 
                construction project exceeds expectations at every stage.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
                Our commitment to excellence shows in the details of our work, from the initial 
                planning stages to the final touches. We believe in creating spaces that not only 
                look exceptional but stand the test of time.
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://photos.smugmug.com/RebiuldWeb/i-VnzQwMT/0/K82GKjMwkWSvkD6wWrxCkShFZXg6nxQx5qP9HsZ3m/X5/6F4A8380-2-X5.jpg"
                  alt="Construction Excellence"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Final Full Width Image Section */}
      <AnimateOnScroll>
        <div className="relative p-4 sm:p-6 lg:p-10">
          <div className="aspect-[16/9] relative w-full">
            <Image
              src="https://photos.smugmug.com/RebiuldWeb/i-6vMSZSt/0/KqgSQNgrP6M9FjTdzcFkr2fKnH9qnJBQp37HLkmgK/X4/Blank%20canvas%20concrete%20truck%20with%20logo-X4.jpg"
              alt="Final Construction Image"
              fill
              className="object-cover rounded-xl"
              sizes="100vw"
              priority
            />
            
            {/* Darker Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
              {/* Centered Text */}
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center tracking-wider z-10 px-4">
                So We Can Build Ours
              </h1>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default Home;
