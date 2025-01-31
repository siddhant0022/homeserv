import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { WrenchIcon, HomeIcon, SparklesIcon } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 to-blue-950 flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl mb-8 text-violet-200">
            {t('hero.subtitle')}
          </p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#services" className="bg-purple-600 hover:bg-purple-900-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
              <WrenchIcon className="w-5 h-5" />
              Explore Services
            </a>
            
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[500px]">
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <img 
              src="/public/heroimg.jpeg"
              alt="Home Services"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};