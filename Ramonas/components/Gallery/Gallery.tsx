"use client";

import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  rotation: number;
  filter?: {
    overlayColor?: string;
    overlayOpacity?: number;
    contrast?: number;
    brightness?: number;
  };
  objectPosition?: string;
};

const images: GalleryImage[] = [
  {
    src: "/gungor.webp",
    alt: "Gungor i en lekparkpark",
    caption: "Gunga mot skyn",
    rotation: -1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 30,
      contrast: 90,
    },
  },
  {
    src: "/magnatiles2.webp",
    alt: "Magnatiles byggleksaker",
    caption: "Byggande med magnatiles",
    rotation: 1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 30,
    },
  },
  {
    src: "/lekrum.webp",
    alt: "Lekrum med leksaker",
    caption: "Vårt mysiga lekrum",
    rotation: -1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 40,
      brightness: 95,
    },
  },
  {
    src: "/brio.webp",
    alt: "Brio tågräls",
    caption: "Skapa en fantasivärld med Brio",
    rotation: 1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 40,
      contrast: 85,
      brightness: 95,
    },
  },
  {
    src: "/pennor.webp",
    alt: "Färgpennor",
    caption: "Rita och måla",
    rotation: 1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 40,
      contrast: 85,
      brightness: 95,
    },
  },
  {
    src: "/masmo.webp",
    alt: "Solnedgång i Masmo",
    caption: "Vackra omgivningar i närområdet",
    rotation: 1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 30,
      contrast: 90,
    },
    objectPosition: "left center",
  },
  {
    src: "/lekplats.webp",
    alt: "Lekplats",
    caption: "Äventyr i lekparken",
    rotation: 1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 40,
      contrast: 85,
      brightness: 95,
    },
  },
  {
    src: "/perler.webp",
    alt: "Pärlor i olika färger",
    caption: "Kreativ lek med pärlor",
    rotation: 1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 40,
      contrast: 85,
      brightness: 95,
    },
  },
  {
    src: "/odlingslott.webp",
    alt: "Odlingslott",
    caption: "Vattna, skörda eller plantera i odlingslotten",
    rotation: 1,
    filter: {
      overlayColor: "amber-50",
      overlayOpacity: 40,
      contrast: 85,
      brightness: 95,
    },
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  const prevImage = () =>
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const image = images[active];

  return (
    <div
      id="animation-carousel"
      className="relative w-full max-w-4xl mx-auto"
      role="region"
      aria-label="Galleri"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }}
    >
      {/* Carousel wrapper */}
      <figure className="relative w-full h-80 md:h-[620px] flex items-center justify-center">
        {/* Bilden */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-80 md:h-[620px] flex items-center justify-center">
            <div
              className={`absolute inset-0 bg-${image.filter?.overlayColor}/${image.filter?.overlayOpacity} mix-blend-overlay z-10 rounded-lg`}
            ></div>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover shadow-lg ${
                image.filter?.contrast
                  ? `contrast-${image.filter.contrast}`
                  : ""
              } ${
                image.filter?.brightness
                  ? `brightness-${image.filter.brightness}`
                  : ""
              }`}
              style={{ objectPosition: image.objectPosition || "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-white/80">
          <p className="text-center text-gray-600 italic font-serif text-base">
            {image.caption}
          </p>
        </figcaption>
        {/* Indikator-prickar */}
        <div className="flex justify-center gap-2 absolute left-0 right-0 bottom-16 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(idx);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-amber-600
                ${
                  active === idx
                    ? "bg-amber-600 scale-125"
                    : "bg-white opacity-70 hover:bg-amber-300"
                }`}
              aria-label={`Gå till bild ${idx + 1}`}
            />
          ))}
        </div>
      </figure>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevImage}
        aria-label="Föregående bild"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <HiChevronLeft className="w-6 h-6 text-white" aria-hidden="true" />
          <span className="sr-only">Föregående bild</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextImage}
        aria-label="Nästa bild"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <HiChevronRight className="w-6 h-6 text-white" aria-hidden="true" />
          <span className="sr-only">Nästa bild</span>
        </span>
      </button>
    </div>
  );
}
