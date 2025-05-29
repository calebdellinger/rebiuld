"use client";

import React, { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Get in Touch</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Ready to start your project? We&apos;re here to turn your vision into reality.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <AnimateOnScroll>
            <div className="space-y-8 sm:space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-white mb-3 sm:mb-4">{info.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{info.details}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Why Choose Rebiuld?</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-16">
                  <div className="mx-auto flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-500/20 mb-4">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-green-500"
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
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Thank you!</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">Your message has been sent successfully! We will get back to you soon.</p>
                  <button
                    className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors"
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
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white text-sm sm:text-base"
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white text-sm sm:text-base"
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1.5 sm:mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white text-sm sm:text-base"
                      placeholder="What is this regarding?"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-white text-sm sm:text-base"
                      placeholder="How can we help you?"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {error && (
                    <div className="p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-xs sm:text-sm text-red-400">{error}</p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span className="text-sm sm:text-base">Sending...</span>
                        </span>
                      ) : (
                        "Send Message"
                      )}
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
