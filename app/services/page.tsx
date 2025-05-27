import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import servicesData from "@/Data/servicesData.json";

interface Service {
  id: number;
  title: string;
  src?: string;
}

function Services() {
  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="relative h-[40vh] w-full overflow-hidden">
          <Image
            src="https://photos.smugmug.com/RebiuldWeb/i-rSSXDLL/0/Kt9wgChcTNh6cDghrfcHrk7ScZ2v78LRnkK4xTBxG/X5/6F4A8134-X5.jpg"
            alt="Rebiuld Construction Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
                From foundations to finishing touches, we provide comprehensive concrete solutions
                tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(servicesData as Service[]).map((service) => (
            <AnimateOnScroll key={service.id}>
              <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {service.src ? (
                    <Image
                      src={service.src}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <span className="text-6xl opacity-20">🏗️</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-white/5 rounded-xl backdrop-blur-sm p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life. Our team is ready to help
              you with any concrete project, big or small.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold 
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

export default Services;
