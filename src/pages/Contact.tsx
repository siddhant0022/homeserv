import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 to-blue-950 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">{t('contact.title')}</h1>
          <p className="text-violet-200 text-xl max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-violet-900 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-8">{t('contact.form.message')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-violet-200 mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  className="w-full bg-violet-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>
              <div>
                <label className="block text-violet-200 mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  className="w-full bg-violet-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>
              <div>
                <label className="block text-violet-200 mb-2">{t('contact.form.message')}</label>
                <textarea
                  className="w-full bg-violet-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-violet-900 p-6 rounded-xl flex items-start gap-4">
              <Phone className="w-6 h-6 text-violet-300" />
              <div>
                <h3 className="text-white font-semibold mb-2">{t('contact.info.phone')}</h3>
                <p className="text-violet-200">{t('contact.info.phoneNumber')}</p>
              </div>
            </div>
            
            <div className="bg-violet-900 p-6 rounded-xl flex items-start gap-4">
              <Mail className="w-6 h-6 text-violet-300" />
              <div>
                <h3 className="text-white font-semibold mb-2">{t('contact.info.email')}</h3>
                <p className="text-violet-200">{t('contact.info.emailAddress')}</p>
              </div>
            </div>
            
            <div className="bg-violet-900 p-6 rounded-xl flex items-start gap-4">
              <MapPin className="w-6 h-6 text-violet-300" />
              <div>
                <h3 className="text-white font-semibold mb-2">{t('contact.info.address')}</h3>
                <p className="text-violet-200">{t('contact.info.addressText')}</p>
              </div>
            </div>
            
            <div className="bg-violet-900 p-6 rounded-xl flex items-start gap-4">
              <Clock className="w-6 h-6 text-violet-300" />
              <div>
                <h3 className="text-white font-semibold mb-2">{t('contact.info.hours')}</h3>
                <p className="text-violet-200 whitespace-pre-line">{t('contact.info.hoursText')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};