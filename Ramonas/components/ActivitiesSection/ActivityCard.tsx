"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ActivityCardProps {
  icon: ReactNode;
  title: string;
  iconBackground?: string;
  children: ReactNode;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  icon,
  title,
  iconBackground = "bg-[#E8F5E9]",
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`${iconBackground} p-3 rounded-full`}>{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600">{children}</div>
    </motion.div>
  );
};

export default ActivityCard;
