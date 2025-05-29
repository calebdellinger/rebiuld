'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

const FloatingContactButton = memo(function FloatingContactButton() {
  const pathname = usePathname();
  const showButton = pathname !== '/contact';

  return showButton ? (
    <Link 
      href="/contact"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white hover:bg-gray-100 text-black 
                 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-xl 
                 transition-all duration-300 flex items-center gap-2 z-50 group text-sm sm:text-base"
      aria-label="Contact Us"
    >
      <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
      <span className="hidden sm:inline">Contact Us</span>
    </Link>
  ) : null;
});

export default FloatingContactButton; 