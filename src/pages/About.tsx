import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 to-blue-950 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">{t('about.title')}</h1>
          <p className="text-violet-200 text-xl max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-violet-900 p-8 rounded-xl"
          >
            <Users className="w-12 h-12 text-violet-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">{t('about.who')}</h2>
            <p className="text-violet-200">{t('about.whoDescription')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-violet-900 p-8 rounded-xl"
          >
            <Target className="w-12 h-12 text-violet-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">{t('about.what')}</h2>
            <p className="text-violet-200">{t('about.whatDescription')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-violet-900 p-8 rounded-xl"
          >
            <Workflow className="w-12 h-12 text-violet-300 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">{t('about.how')}</h2>
            <p className="text-violet-200">{t('about.howDescription')}</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Our Team"
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">{t('about.commitment')}</h2>
            <div className="space-y-4 text-violet-200">
              <p>{t('about.commitmentText1')}</p>
              <p>{t('about.commitmentText2')}</p>
              <p>{t('about.commitmentText3')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};