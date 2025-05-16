"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed z-50 bottom-6 right-6 bg-amber-600 text-white rounded-full shadow-lg p-3 transition-opacity duration-300 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Tillbaka till topp"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}
