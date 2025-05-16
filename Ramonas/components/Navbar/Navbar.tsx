"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import { useScrollTo } from "@/hooks/useScrollTo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest("#main-nav") && !target.closest("button")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const scrollTo = useScrollTo();

  const navItems = [
    { id: "home", label: "Hem" },
    { id: "about", label: "Om verksamheten" },
    { id: "schedule", label: "Vår vardag" },
    { id: "activities", label: "Aktiviteter" },
    { id: "food", label: "Mat och måltider" },
    { id: "contact", label: "Kontakt" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="hidden md:flex space-x-6">
        <ul>
          {navItems.map(({ id, label }) => (
            <li key={id} className="inline-block">
              <a
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, id)}
                className="group relative px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-amber-600"
              >
                <span className="relative inline-block">
                  {label}
                  <span className="block absolute left-0 -bottom-1 h-[2px] bg-amber-600 w-0 group-hover:w-full transition-all duration-500"></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden relative z-50">
        <HamburgerMenu open={isOpen} onClick={toggleMenu} />

        {/* Backdrop overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="main-nav"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 z-50 overflow-hidden"
            >
              {navItems.map(({ id, label }, index) => (
                <motion.a
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-3 text-base text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, id)}
                  role="link"
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
