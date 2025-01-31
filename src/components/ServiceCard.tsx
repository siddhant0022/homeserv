import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onBook: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, onBook }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-violet-900 p-6 rounded-xl shadow-xl"
    >
      <div className="text-violet-300 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-violet-200 mb-4">{description}</p>
      <button
        onClick={onBook}
        className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-colors w-full"
      >
        Book Now
      </button>
    </motion.div>
  );
};