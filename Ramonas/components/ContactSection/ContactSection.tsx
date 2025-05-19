"use client";

import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";

export const ContactSection = () => {
  const [isClient, setIsClient] = useState(false);
  const animation = useScrollAnimation();
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section
      id="contact"
      className="w-full  mx-auto  bg-[#e4ede8] md:p-6"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      variants={animation.variants}
      transition={animation.transition}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="ContactContent bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Kontakt</h3>
            <div className="flex flex-col gap-2 mb-6">
              <p className="flex items-center gap-2">
                <HiPhone className="h-5 w-5" aria-hidden="true" />
                Ramona Hautamäki
                <a href="tel:0701234567" className="hover:underline">
                  070-123 45 67
                </a>
              </p>
              <p className="flex items-center gap-2 break-all">
                <HiMail className="h-5 w-5" aria-hidden="true" />
                <a
                  href="mailto:ramonasfamiljedaghem@gmail.com"
                  className="hover:underline"
                >
                  ramonasfamiljedaghem@gmail.com
                </a>
              </p>
              <a
                href="https://www.facebook.com/DIN-FACEBOOK-SIDA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besök oss på Facebook"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebook className="w-5 h-5 text-black" aria-hidden="true" />
                <p className="text-black">Facebook</p>
              </a>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-2">Öppettider:</h4>
              <p>
                Öppettiderna anpassas utifrån barnens vistelsetid, inom
                tidsintervallet 06.30–18.00.
              </p>
            </div>

            <ContactMap />
          </div>
          {isClient && <ContactForm />}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
