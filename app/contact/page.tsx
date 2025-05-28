"use client";

import React, { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Seattle, Washington",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "(425)-365-6742",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "rebiuldconstruction@gmail.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: "Mon - Fri: 7am - 6pm",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? We&apos;re here to turn your vision into reality.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimateOnScroll>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-white mb-4">{info.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-300">{info.details}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose Rebiuld?</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Expert craftsmanship and attention to detail
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Professional and reliable service
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Competitive pricing and transparent quotes
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Satisfaction guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 mb-4">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                  <p className="text-gray-300 mb-8">Your message has been sent successfully! We will get back to you soon.</p>
                  <button
                    className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
