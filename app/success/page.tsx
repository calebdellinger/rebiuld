"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to contact page after 5 seconds
    const timeout = setTimeout(() => {
      router.push("/contact");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto p-6 sm:p-8">
        <div className="mx-auto flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-500/20 mb-4 sm:mb-6">
          <svg
            className="h-6 w-6 sm:h-8 sm:w-8 text-green-500"
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
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Thank You!</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
          Your message has been sent successfully. We&apos;ll get back to you soon.
        </p>
        <p className="text-sm sm:text-base text-gray-400">
          You will be redirected back to the contact page in 5 seconds...
        </p>
      </div>
    </div>
  );
} 