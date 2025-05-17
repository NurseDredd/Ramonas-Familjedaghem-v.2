"use client";

import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function AboutSection() {
  const animation = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);

  const extraParagraphs = [
    "Verksamheten passar dig som önskar en liten barngrupp och en trygg, familjär miljö. Jag ser varje barns unika behov och ger dem tid och utrymme att växa.",
    "Vi samarbetar med Tamaras familjedaghem i Sätra. Tillsammans gör vi utflykter, leker och arbetar med olika projekt. Tamara fungerar även som vikarie, vilket skapar kontinuitet för barnen.",
    "Mitt mål är att varje barn ska känna sig glad, sedd och välkommen – varje dag.",
  ];

  return (
    <motion.section
      id="about"
      {...animation}
      className="bg-white max-w-6xl mx-auto py-16 px-6 scroll-mt-32"
    >
      <h2 className="text-3xl font-semibold text-amber-700 mb-6">
        Om Ramonas familjedaghem
      </h2>

      <article className="text-gray-800 text-base space-y-4">
        <p>
          Ramonas familjedaghem i Masmo/Huddinge ligger bara ett stenkast från
          både buss och tunnelbana. Här tas barnen om hand av mig, Ramona –
          utbildad barnskötare med lång erfarenhet från både förskola och
          familjedaghem. I mitt hem erbjuder jag en trygg och personlig
          barnomsorg för upp till sex barn i åldrarna 1–5 år.
        </p>

        {/* Extra innehåll: alltid synligt på desktop, styrt på mobil */}
        <div
          id="about-more"
          className={`
              space-y-4
              ${showMore ? "block" : "hidden"}
              md:block
            `}
        >
          <h3 className="sr-only">Mer information om verksamheten</h3>
          {extraParagraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Läs mer-knapp – endast mobil */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-amber-700 font-medium hover:underline mt-2 block md:hidden"
          aria-expanded={showMore}
          aria-controls="about-more"
        >
          {showMore ? "Visa mindre" : "Läs mer"}
        </button>
      </article>
    </motion.section>
  );
}
