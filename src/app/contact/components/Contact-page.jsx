"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Sparkles, Globe } from 'lucide-react';

const ContactPage = () => {
  // Fixed positions for background elements
  const bgElements = [
    { left: '10%', top: '10%' },
    { left: '20%', top: '20%' },
    { left: '30%', top: '30%' },
    { left: '40%', top: '40%' },
    { left: '50%', top: '50%' },
    { left: '60%', top: '60%' },
    { left: '70%', top: '70%' },
    { left: '80%', top: '80%' },
    { left: '90%', top: '90%' },
    { left: '15%', top: '85%' },
    { left: '25%', top: '75%' },
    { left: '35%', top: '65%' },
    { left: '45%', top: '55%' },
    { left: '55%', top: '45%' },
    { left: '65%', top: '35%' },
    { left: '75%', top: '25%' },
    { left: '85%', top: '15%' },
    { left: '95%', top: '5%' },
    { left: '5%', top: '95%' },
    { left: '50%', top: '25%' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements with fixed positions */}
      <div className="absolute inset-0 overflow-hidden">
        {bgElements.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#d71b1b]/20 rounded-full"
            style={pos}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-lg rounded-full mb-6 border border-gray-700"
          >
            <Sparkles className="w-4 h-4 text-[#d71b1b]" />
            <span className="text-sm font-montserrat text-gray-300">Entrez en contact</span>
          </motion.div>
          
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center mb-4 relative">
            <span className="relative inline-block">
              Créons
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-[#d71b1b]/20 -z-10"
              />
            </span>{' '}
            <span className="text-[#d71b1b]">Ensemble</span>
          </h2>
        </motion.div>

        {/* Contact Info & Map Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 shadow-lg shadow-[#d71b1b]/5 hover:shadow-[#d71b1b]/10 transition-all duration-300">
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-[#d71b1b]/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#d71b1b]" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-white mb-2">Notre Adresse</h3>
                    <p className="font-montserrat text-gray-400">Porte 3, 106 Rue Abderrahman Sahraoui, Casablanca 20100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-[#d71b1b]/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#d71b1b]" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-white mb-2">Email</h3>
                    <a href="mailto:contact@publicevents.ma" className="font-montserrat text-gray-400 hover:text-[#d71b1b] transition-colors">
                      contact@publicevents.ma
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-[#d71b1b]/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#d71b1b]" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-white mb-2">Téléphone</h3>
                    <a href="tel:+212500000000" className="font-montserrat text-gray-400 hover:text-[#d71b1b] transition-colors">
                      +212 5 00 00 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-[#d71b1b]/20 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-[#d71b1b]" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-white mb-2">Horaires</h3>
                    <p className="font-montserrat text-gray-400">Lun - Ven: 9h00 - 18h00</p>
                    <p className="font-montserrat text-gray-400">Sam - Dim: Sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map with creative frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#d71b1b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-gray-800 shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20 z-10" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4993903992327!2d-7.620810799999998!3d33.5923449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29a5fb4219d%3A0x2e1e28ad2bb99ba0!2sPublic%20Evenements!5e0!3m2!1sfr!2sma!4v1739783747818!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#d71b1b] rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#d71b1b] rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#d71b1b] rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#d71b1b] rounded-br-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;