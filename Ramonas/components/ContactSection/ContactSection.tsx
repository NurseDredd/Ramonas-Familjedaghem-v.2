"use client";

import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HiMail, HiPhone } from "react-icons/hi";

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
            <div className="flex flex-col md:flex-row md:gap-4 mb-6">
              <p className="flex items-center gap-2 break-all">
                <HiMail className="h-5 w-5" aria-hidden="true" />
                <a
                  href="mailto:ramonasfamiljedaghem@gmail.com"
                  className="hover:underline"
                >
                  ramonasfamiljedaghem@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <HiPhone className="h-5 w-5" aria-hidden="true" />
                <a href="tel:0701234567" className="hover:underline">
                  070-123 45 67
                </a>
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
