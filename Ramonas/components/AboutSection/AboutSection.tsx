"use client";

import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function AboutSection() {
  const animation = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);

  const regularParagraphs = [
    "Verksamheten passar dig som önskar en liten barngrupp och en trygg, familjär miljö. Jag ser varje barns unika behov och ger dem tid och utrymme att växa.",
    "Mitt mål är att skapa en trygg barngrupp med modiga, empatiska och nyfikna individer med bra självkänsla för fortsatt lärande.",
  ];

  const sectionsWithHeadings = [
    {
      title: "Samarbete med andra familjedaghem",
      content:
        "Vi har ett nära samarbete med Tamaras familjedaghem i Sätra. Vi ses två till tre gånger i veckan tillsammans med andra familjedaghem som också finns i Sätra. Tillsammans gör vi utflykter, leker och arbetar med olika projekt. Tamara fungerar även som vikarie, vilket skapar kontinuitet för barnen.",
    },
    {
      title: "Föräldrasamverkan",
      content:
        "En viktig del av verksamheten är föräldrasamverkan. Vid lämning och hämtning har vi möjlighet att samtala om barnets vistelse. Jag erbjuder längre samtal vid frågor och funderingar om så önskas. Inskolning sker tillsammans med föräldrar så barn och föräldrar känner sig trygga, och utvecklingssamtal sker en gång per termin.",
    },
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
          familjedaghem. Bostaden har fina och rymliga rum som lockar till lek
          och skapande verksamhet. Här erbjuder jag en trygg och personlig
          barnomsorg för upp till sex barn i åldrarna 1–5 år.
        </p>

        {/* Extra innehåll: alltid synligt på desktop, styrt på mobil */}
        <div
          id="about-more"
          className={`
              space-y-6
              ${showMore ? "block" : "hidden"}
              md:block
            `}
        >
          {/* Regular paragraphs */}
          {regularParagraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          {/* Sections with headings */}
          {sectionsWithHeadings.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold text-amber-700">
                {section.title}
              </h3>
              <p>{section.content}</p>
            </div>
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
      <div className="mt-6 border-t border-gray-200 pt-4">
        <a
          href="https://www.huddinge.se/forskola-skola/forskola/ansok-forskola/forskoleplats/#Innan-du-ansoker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-700 underline hover:text-amber-800"
        >
          Gå till ansökan via kommunens hemsida →
        </a>
      </div>
    </motion.section>
  );
}
