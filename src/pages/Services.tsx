import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from '../components/ServiceCard';
import { BookingForm } from '../components/BookingForm';
import { Paintbrush as Paint, SprayCan as Spray, Home, Bath, Twitch as Kitchen, Bug } from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = {
    painting: [
      {
        title: t('services.painting.wall'),
        description: t('services.painting.description'),
        icon: <Paint className="w-8 h-8" />
      },
      {
        title: t('services.painting.instruments'),
        description: t('services.painting.instrumentsDescription'),
        icon: <Spray className="w-8 h-8" />
      }
    ],
    cleaning: [
      {
        title: t('services.cleaning.house'),
        description: t('services.cleaning.houseDescription'),
        icon: <Home className="w-8 h-8" />
      },
      {
        title: t('services.cleaning.bathroom'),
        description: t('services.cleaning.bathroomDescription'),
        icon: <Bath className="w-8 h-8" />
      },
      {
        title: t('services.cleaning.kitchen'),
        description: t('services.cleaning.kitchenDescription'),
        icon: <Kitchen className="w-8 h-8" />
      },
      {
        title: t('services.cleaning.pest'),
        description: t('services.cleaning.pestDescription'),
        icon: <Bug className="w-8 h-8" />
      },
      {
        title: t('services.cleaning.termites'),
        description: t('services.cleaning.termitesDescription'),
        icon: <Bug className="w-8 h-8" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 to-blue-950 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          {t('services.title')}
        </h1>
        
        {/* Painting Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {t('services.painting.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.painting.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                onBook={() => setSelectedService(service.title)}
              />
            ))}
          </div>
        </div>
        
        {/* Cleaning Services */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            {t('services.cleaning.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.cleaning.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                onBook={() => setSelectedService(service.title)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedService && (
        <BookingForm
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};