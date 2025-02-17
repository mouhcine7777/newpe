"use client";

import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  return (
<section className="relative h-[50vh] bg-gradient-to-r from-white via-gray-200 to-white overflow-hidden">
{/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#d71b1b]" />
            <span className="text-sm font-montserrat text-gray-800">Restez connecté avec nous</span>
          </motion.div>
          
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center mb-4 relative">
            <span className="relative inline-block">
              Rejoignez
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-[#d71b1b]/20 -z-10"
              />
            </span>{' '}
            <span className="text-[#d71b1b]">l'Aventure</span>
          </h2>
          
          <p className="font-montserrat text-gray-700 text-lg md:text-xl mb-12 text-center max-w-xl">
            Soyez les premiers à découvrir nos événements exclusifs
          </p>

          <motion.a
  href="mailto:contact@publicevents.ma"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="group relative z-10 inline-flex items-center gap-3"
>
  <div className="relative z-10 inline-flex items-center gap-4 px-8 py-4 bg-[#d71b1b] text-white rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#d71b1b] via-[#ff4b4b] to-[#d71b1b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Mail className="w-5 h-5 relative z-10" />
    <span className="font-montserrat font-medium text-lg relative z-10">
      Contactez-nous
    </span>
    <ArrowRight className="w-5 h-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />
  </div>
</motion.a>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-gray-600"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;