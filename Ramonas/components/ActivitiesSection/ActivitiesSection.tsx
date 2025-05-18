"use client";

import React from "react";
import {
  FaPaintBrush,
  FaCubes,
  FaLeaf,
  FaCalendarAlt,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ActivityCard from "./ActivityCard";

const ActivitiesSection = () => {
  const animation = useScrollAnimation();

  return (
    <motion.section
      id="activities"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      variants={animation.variants}
      transition={animation.transition}
      className="bg-[#e4ede8] py-16 px-6 scroll-mt-24"
    >
      <article className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-10 text-[#2F3E37]">
          Aktiviteter och utflykter
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <ActivityCard
            icon={<FaCubes className="w-7 h-7" />}
            title="Lek och fantasi"
            iconBackground="bg-[#B4D8E7]"
          >
            <p className="text-gray-800 text-base leading-relaxed mb-4">
              Barnen har tillgång till ett eget lekrum med mycket material att
              leka med, som utklädningskläder, leksakskök, bilar, dockor,
              tågbana och olika byggmaterial som klossar, lego, duplo och
              magneter med mera.
            </p>
            <p>
              Man kan också skapa sig en myshörna med tillgängliga kuddar för
              att i lugn och ro läsa och titta i böcker.
            </p>
          </ActivityCard>
          <ActivityCard
            icon={<FaPaintBrush className="w-7 h-7" aria-hidden="true" />}
            iconBackground="bg-[#F5D17B]"
            title="Kreativt skapande"
          >
            <p className="text-gray-800 text-base leading-relaxed mb-4">
              Vi pysslar och skapar tillsammans – det blir en stund för
              avkoppling, fantasi och fina samtal. Vi använder ofta
              naturmaterial och återvunnet material
            </p>
            <p>
              Ibland stannar vi inne och skapar, ibland packar vi en väska med
              material och tar med kreativiteten ut i naturen.
            </p>
          </ActivityCard>
          <ActivityCard
            icon={<FaLeaf className="w-7 h-7" aria-hidden="true" />}
            iconBackground="bg-[#A8D5BA]"
            title="Rörelse och natur"
          >
            <p className="text-gray-800 text-base leading-relaxed mb-4">
              Vi gillar att vara ute och röra på oss; klättra, springa eller
              varför inte göra en hinderbana i lekparken. Krypa under gungan,
              vem kommer ner för rutschkanan snabbast? – möjligheterna är
              oändliga.
            </p>
            <p>
              Vi har även en odlingsplats där vi varje vår odlar grönsaker och
              blommor som vi skördar på hösten.
            </p>
          </ActivityCard>
          <ActivityCard
            icon={<FaCalendarAlt className="w-7 h-7" aria-hidden="true" />}
            iconBackground="bg-[#E6B8AF]"
            title="Utflykter"
          >
            <ul className="text-gray-800 text-base leading-relaxed space-y-4 flex flex-col  h-full py-4">
              <li className="flex items-center gap-2">
                <p className="text-[#E6B8AF] text-xl">
                  <FaCheck aria-hidden="true" />
                </p>
                <span>Skogsutflykt varje vecka</span>
              </li>
              <li className="flex items-center gap-2">
                <p className="text-[#E6B8AF] text-xl">
                  <FaCheck aria-hidden="true" />
                </p>
                <span>Temaarbete varje vecka</span>
              </li>
              <li className="flex items-center gap-2">
                <p className="text-[#E6B8AF] text-xl">
                  <FaCheck aria-hidden="true" />
                </p>
                <span>Biblioteksbesök varje månad</span>
              </li>
              <li className="flex items-center gap-2">
                <p className="text-[#E6B8AF] text-xl">
                  <FaCheck aria-hidden="true" />
                </p>
                <span>Teater och museibesök</span>
              </li>
              <li className="flex items-center gap-2">
                <p className="text-[#E6B8AF] text-xl">
                  <FaCheck aria-hidden="true" />
                </p>
                <span>Odling under vår och sommar</span>
              </li>
            </ul>
          </ActivityCard>
        </div>
      </article>
    </motion.section>
  );
};

export default ActivitiesSection;
