import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Home } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Home className="w-6 h-6" />
              HomeServ
            </Link>
            <p className="text-violet-300">
              Professional home services for all your needs. Quality and satisfaction guaranteed.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-violet-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-violet-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-violet-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-violet-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-violet-300">Painting</li>
              <li className="text-violet-300">Cleaning</li>
              <li className="text-violet-300">Pest Control</li>
              <li className="text-violet-300">Home Maintenance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-violet-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-violet-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-violet-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-violet-800 mt-8 pt-8 text-center text-violet-300">
          <p>&copy; {new Date().getFullYear()} HomeServ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};