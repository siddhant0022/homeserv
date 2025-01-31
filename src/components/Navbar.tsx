import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Wrench, Info, Phone, Globe } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  return (
    <nav className="bg-violet-950 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <Home className="w-6 h-6" />
          HomeServ
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 hover:text-violet-300 transition-colors">
            <Home className="w-4 h-4" />
            {t('nav.home')}
          </Link>
          <Link to="/services" className="flex items-center gap-1 hover:text-violet-300 transition-colors">
            <Wrench className="w-4 h-4" />
            {t('nav.services')}
          </Link>
          <Link to="/about" className="flex items-center gap-1 hover:text-violet-300 transition-colors">
            <Info className="w-4 h-4" />
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="flex items-center gap-1 hover:text-violet-300 transition-colors">
            <Phone className="w-4 h-4" />
            {t('nav.contact')}
          </Link>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-violet-800 px-3 py-1 rounded-md hover:bg-violet-700 transition-colors"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};