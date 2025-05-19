"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FoodSection = () => {
  const animation = useScrollAnimation();

  return (
    <motion.section
      id="food"
      className="relative py-16 px-6 scroll-mt-24"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      variants={animation.variants}
      transition={animation.transition}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bildsektion */}
          <div className="relative h-[300px] md:h-[500px]">
            <Image
              src="/frukt.webp"
              alt="Bild på frukter"
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Textsektion */}
          <motion.article
            ref={animation.ref}
            initial={animation.initial}
            animate={animation.animate}
            variants={animation.variants}
            transition={animation.transition}
            className="flex flex-col justify-center p-6 bg-white rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">
              God och näringsrik kost
            </h2>
            <div className="space-y-4 text-gray-800">
              <p>
                Vi älskar mat, både att tillaga den och att äta den. Maten ger
                oss glädje och välbehövlig energi!
              </p>
              <p>
                Jag serverar alltid en varierad och näringsrik kost med
                vegetariska alternativ. Jag följer Livsmedelsverkets
                rekommendationer för barns kost och serverar grönsaker till
                varje måltid. Jag serverar frukost, lunch, mellanmål och frukt
                varje dag. Jag erbjuder även specialkost vid behov.
              </p>
              <p>
                Mellanmålet är en stund då vi äter frukt, smörgås, fil eller
                yogurt. Barnen får turas om att göra i ordning lunch/mellanmål
                och att duka för att få en känsla av att "jag kan". Vi bakar
                också tillsammans, framförallt vid högtider som jul.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
};

export default FoodSection;
