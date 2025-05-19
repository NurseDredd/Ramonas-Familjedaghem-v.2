"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Schedule from "../Schedule/Schedule";
import Gallery from "../Gallery/Gallery";

export default function ScheduleGallerySection() {
  const animation = useScrollAnimation();

  return (
    <motion.section
      {...animation}
      id="schedule"
      className="bg-amber-50 py-8 scroll-mt-20 md:scroll-mt-32"
    >
      <h2 className="text-center text-[#2F3E37] text-2xl font-semibold mb-8">
        En vanlig dag hos oss
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4">
          <div className="bg-white p-6 rounded-lg md:col-span-1">
            <Schedule />
          </div>
          <div className="bg-white rounded-lg md:col-span-3 md:p-6">
            <Gallery />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
