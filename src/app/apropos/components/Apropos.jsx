"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Target, Sparkles } from 'lucide-react';

const Apropos = () => {
  const staggerChildren = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUpItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="h-[80vh] sm:h-screen flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <Image
              src="/about3.jpg"
              alt="Hero Background"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
          
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Notre équipe, <span className="text-[#d71b1b]">vos créateurs d'émotions!</span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUpItem}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-8 hover:from-white/10 hover:to-white/20 transition-all duration-500"
            >
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#d71b1b] mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Notre Mission</h3>
              <p className="text-sm sm:text-base text-white/80">
                Public Events est une agence de communication globale et événementielle. 
                Filiale de PARTHENON HOLDING, spécialisé dans la production audiovisuelle.
              </p>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#d71b1b]/10 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500" />
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-8 hover:from-white/10 hover:to-white/20 transition-all duration-500"
            >
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#d71b1b] mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Notre Équipe</h3>
              <p className="text-sm sm:text-base text-white/80">
                Grâce à la répartition en différents pôles, chacun intervient sur des projets 
                qui relève de son domaine d'expertise.
              </p>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#d71b1b]/10 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500" />
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-8 hover:from-white/10 hover:to-white/20 transition-all duration-500 sm:col-span-2 lg:col-span-1"
            >
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[#d71b1b] mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Notre Expertise</h3>
              <p className="text-sm sm:text-base text-white/80">
                Bénéficiant de la diversité culturelle et académique, notre équipe apporte 
                un conseil personnalisé et des plans d'action pertinents.
              </p>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#d71b1b]/10 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500" />
            </motion.div>
          </motion.div>
        </div>

         {/* Timeline Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <motion.h2 
          className="text-center font-montserrat text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Notre <span className="text-[#d71b1b]">Histoire</span>
        </motion.h2>

        <div className="container relative max-w-6xl mx-auto px-4">
          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 w-px h-full md:-translate-x-1/2 bg-gradient-to-b from-[#d71b1b] via-[#d71b1b]/50 to-transparent" />
          
          {[2002, 2010, 2015, 2024].map((year, index) => (
            <motion.div
              key={year}
              className={`relative flex items-start md:items-center gap-8 mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d71b1b] rounded-full mt-3 md:mt-0">
                <div className="absolute w-8 h-8 bg-[#d71b1b]/30 rounded-full -inset-2 animate-ping" />
              </div>
              <div className="pl-8 md:pl-0 w-full md:w-1/2 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-[#d71b1b] mb-4">{year}</h3>
                <p className="text-white/80">Une étape importante dans notre histoire...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

        {/* CTA Section */}
        <motion.div 
          className="relative py-12 sm:py-16 md:py-24 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative z-10 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Prêt à Créer Quelque Chose <span className="text-[#d71b1b]">d'Extraordinaire?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8">
                Contactez-nous pour transformer vos idées en expériences mémorables
              </p>
              <motion.button 
                className="bg-[#d71b1b] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#d71b1b]/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-nous
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Apropos;