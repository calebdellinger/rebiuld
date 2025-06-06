"use client";

import React, { useEffect, useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getGalleryImages } from "@/lib/smugmug";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface SmugMugImage {
  ImageKey: string;
  ThumbnailUrl: string;
  X5Url?: string;
  LargeUrl?: string;
  WebUri: string;
  Caption: string;
  Title: string;
  FileName: string;
  IsVideo: boolean;
  Format: string;
}

// Memoized thumbnail component
const GalleryThumbnail = memo(({ image, onClick }: { image: SmugMugImage; onClick: () => void }) => (
  <motion.div
    variants={itemVariants}
    className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative w-full h-full">
      <Image
        src={image.LargeUrl || image.ThumbnailUrl}
        alt={image.Caption || image.Title || image.FileName}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
        loading="lazy"
        unoptimized={true}
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    </div>
  </motion.div>
));

GalleryThumbnail.displayName = 'GalleryThumbnail';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

export default function Gallery() {
  const [images, setImages] = useState<SmugMugImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<SmugMugImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const debouncedCheckMobile = debounce(checkMobile, 250);
    
    checkMobile();
    window.addEventListener('resize', debouncedCheckMobile);
    return () => {
      window.removeEventListener('resize', debouncedCheckMobile);
      debouncedCheckMobile.cancel();
    };
  }, []);

  const paginate = useCallback((newDirection: number) => {
    if (!selectedImage || images.length === 0) return;
    
    const currentIndex = images.findIndex(img => img.ImageKey === selectedImage.ImageKey);
    let nextIndex = currentIndex + newDirection;
    
    if (nextIndex < 0) nextIndex = images.length - 1;
    if (nextIndex >= images.length) nextIndex = 0;
    
    setSelectedImage(images[nextIndex]);
    setPage([page + newDirection, newDirection]);
  }, [images, selectedImage, page]);

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!selectedImage) return;

    if (event.key === "ArrowLeft") {
      paginate(-1);
    } else if (event.key === "ArrowRight") {
      paginate(1);
    } else if (event.key === "Escape") {
      setSelectedImage(null);
    }
  }, [selectedImage, paginate]);

  useEffect(() => {
    async function loadImages() {
      try {
        const galleryImages = await getGalleryImages();
        const filteredImages = galleryImages.filter(image => !image.IsVideo);
        setImages(filteredImages);
      } catch (error) {
        console.error("Error loading gallery images:", error);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        document.body.style.overflow = 'auto'; // Restore scroll on cleanup
        window.removeEventListener("keydown", handleKeyPress);
      }
    }
  }, [selectedImage, handleKeyPress]);

  // Memoize the image grid to prevent unnecessary re-renders
  const imageGrid = useMemo(() => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6"
    >
      {images.map((image) => (
        <GalleryThumbnail
          key={image.ImageKey}
          image={image}
          onClick={() => setSelectedImage(image)}
        />
      ))}
    </motion.div>
  ), [images]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
      {imageGrid}

      {/* Modal for full-size image */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)} // Click on backdrop closes modal
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // Click on modal content DOES NOT close modal
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-full max-w-[2048px] max-h-[1536px] mx-auto"
              {...handlers}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full h-full"
                >
                  <Image
                    src={selectedImage.X5Url || selectedImage.LargeUrl || selectedImage.ThumbnailUrl}
                    alt={selectedImage.Caption || selectedImage.Title || selectedImage.FileName}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                    unoptimized={true}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons - hidden on mobile (use swipe instead) */}
              {/* {!isMobile && (
                <>
                  <button
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl hover:text-gray-300 transition-colors duration-200 bg-black/20 rounded-full p-2 sm:p-4 hover:bg-black/40"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing modal
                    paginate(-1);
                  }}
                  >
                    ←
                  </button>
                  <button
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl hover:text-gray-300 transition-colors duration-200 bg-black/20 rounded-full p-2 sm:p-4 hover:bg-black/40"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing modal
                    paginate(1);
                  }}
                  >
                    →
                  </button>
                </>
              )} */}

              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-4xl hover:text-gray-300 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent closing modal from this button too
                  setSelectedImage(null);
                }}
              >
                ×
              </button>

              {/* Image counter for mobile */}
              {isMobile && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {`${images.findIndex(img => img.ImageKey === selectedImage.ImageKey) + 1} / ${images.length}`}
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black to-transparent">
                {selectedImage.Caption && (
                  <p className="text-xs sm:text-sm text-white/80">{selectedImage.Caption}</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Utility function for debouncing
function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): T & { cancel: () => void } {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  return debounced as T & { cancel: () => void };
} 