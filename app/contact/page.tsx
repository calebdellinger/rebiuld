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
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

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
    setStatus({ ...status, isSubmitting: true, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Message sent successfully! We will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "isit Us",
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
              Ready to start your project? We're here to turn your vision into reality.
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
              {status.isSubmitted ? (
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
                  <p className="text-gray-300 mb-8">{status.message}</p>
                  <button
                    className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    onClick={() => setStatus({ ...status, isSubmitted: false })}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  {status.isError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-sm text-red-400">{status.message}</p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={status.isSubmitting}
                      className={`px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 ${
                        status.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {status.isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
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
                          Sending...
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
