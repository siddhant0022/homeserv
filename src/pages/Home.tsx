import react from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';
import { Star, Users, CheckCircle } from 'lucide-react';

export const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The best home service experience I've ever had. Professional and efficient!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      content: "Exceptional quality and attention to detail. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer",
      content: "Their painting service transformed my clients' homes completely.",
      rating: 5
    }
  ];

  return (
    <div className="bg-violet-950">
      <Hero />
      
      {/* Popular Services */}
      <section className="py-20 bg-gradient-to-b from-violet-950 to-blue-950">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Popular Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Painting', 'Cleaning', 'Pest Control'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-violet-900 rounded-xl p-6 text-white"
              >
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-violet-200 mb-4">Professional {service.toLowerCase()} services for your home</p>
                <a href="/services" className="text-purple-300 hover:text-white transition-colors">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-violet-400 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Professional Experts</h3>
                    <p className="text-violet-200">Our team consists of certified professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-violet-400 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Quality Service</h3>
                    <p className="text-violet-200">We use premium products and follow industry best practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-violet-400 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Customer Satisfaction</h3>
                    <p className="text-violet-200">Your satisfaction is our top priority</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
                alt="Professional Service"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-violet-950">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-violet-900 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12 text-violet-400" />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-violet-300">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};