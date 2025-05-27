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
      className="fixed bottom-8 right-8 bg-white hover:bg-gray-100 text-black font-semibold 
                 py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                 flex items-center gap-2 z-50 group"
    >
      <Phone className="w-5 h-5 group-hover:animate-bounce" />
      <span>Contact Us</span>
    </Link>
  ) : null;
});

export default FloatingContactButton; 