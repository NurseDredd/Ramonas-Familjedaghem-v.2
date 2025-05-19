"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ParentCollaborationSection() {
  const animation = useScrollAnimation();

  return (
    <motion.section
      id="foraldrasamverkan"
      className="relative py-16 px-6 scroll-mt-24"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      variants={animation.variants}
      transition={animation.transition}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text section */}
          <motion.article
            ref={animation.ref}
            initial={animation.initial}
            animate={animation.animate}
            variants={animation.variants}
            transition={animation.transition}
            className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-md order-2 md:order-1"
          >
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">
              Föräldrasamverkan
            </h2>
            <div className="space-y-4 text-gray-800">
              <p>
                Vid lämning och hämtning har vi möjlighet att samtala om barnets
                vistelse hos mig. Jag erbjuder längre samtal vid frågor och
                funderingar om så önskas.
              </p>
              <p>
                Inskolning sker tillsammans med föräldrar så barn och föräldrar
                känner sig trygga. Utvecklingssamtal sker en gång per termin.
              </p>
              <p>
                En god kommunikation mellan föräldrar och dagbarnvårdare är
                grunden för en trygg och utvecklande miljö för barnen.
              </p>
            </div>
          </motion.article>

          {/* Image section */}
          <div className="relative h-[300px] md:h-[500px] order-1 md:order-2">
            <Image
              src="/foraldrar.webp"
              alt="Föräldrasamverkan illustration"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay for mobile */}
            <div className="absolute inset-0 bg-white/70 md:hidden" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
