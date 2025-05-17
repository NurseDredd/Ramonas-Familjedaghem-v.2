"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { images } from "./GalleryImage";

const AUTOPLAY_DELAY = 5000; // 5 sekunder

export default function Gallery() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prevImage = () =>
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () => setActive((prev) => (prev + 1) % images.length);

  // Autoplay-effect
  useEffect(() => {
    intervalRef.current = setInterval(nextImage, AUTOPLAY_DELAY);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const pauseAutoplay = () =>
    intervalRef.current && clearInterval(intervalRef.current);

  return (
    <section
      id="animation-carousel"
      className="relative w-full max-w-4xl mx-auto"
      role="region"
      aria-label="Galleri"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }}
      onMouseEnter={pauseAutoplay}
      onFocus={pauseAutoplay}
    >
      {/* Carousel container */}
      <figure className="relative w-full h-80 md:h-[620px] overflow-hidden">
        {images.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`absolute object-cover transition-opacity duration-700 ease-in-out rounded-lg ${
              index === active ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ objectPosition: img.objectPosition || "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}

        {/* Caption */}
        <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 z-30">
          <p className="text-center text-gray-600 italic font-serif text-base">
            {images[active].caption}
          </p>
        </figcaption>

        {/* Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevImage}
          aria-label="Föregående bild"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <HiChevronLeft className="w-6 h-6 text-white" />
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextImage}
          aria-label="Nästa bild"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <HiChevronRight className="w-6 h-6 text-white" />
          </span>
        </button>
      </figure>

      {/* Indicators */}
      <div className="flex justify-center gap-2 z-20 p-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-gray-500 ${
              active === index
                ? "bg-gray-500 scale-125"
                : "bg-white opacity-70 hover:bg-gray-300"
            }`}
            aria-label={`Gå till bild ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
