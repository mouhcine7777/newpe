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
      {/* about Section */}
      <div className="relative w-full py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center w-full">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Notre qualité première...
              <span className="block text-[#d71b1b] text-4xl md:text-6xl mt-4">
                La complémentarité !
              </span>
            </h2>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d71b1b] to-transparent" />
          </div>
          
          <div className="relative mt-16 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d71b1b] to-black opacity-5 blur-3xl" />
            <p className="text-xl leading-relaxed text-gray-300 relative z-10">
              Bénéficiant de la diversité culturelle et académique de ses membres, 
              notre équipe apporte à chaque client un conseil personnalisé et des 
              plans d'action pertinents.
            </p>
          </div>
        </div>
      </div>
      
      {/* Features Grid - Redesigned */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#d71b1b]/20 to-transparent opacity-30 blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#d71b1b]/20 to-transparent opacity-30 blur-3xl -z-10" />
        
        <motion.div 
          className="relative"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Mission Card */}
          <motion.div 
            variants={fadeUpItem}
            className="relative mb-24 md:mb-32 mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
              <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 relative z-10">
                <Target className="w-16 h-16 text-[#d71b1b] mb-6 relative z-10" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">Notre Mission</h3>
                <p className="text-lg text-white/80 relative z-10">
                  Public Events est une agence de communication globale et événementielle. 
                  Filiale de PARTHENON HOLDING, spécialisé dans la production audiovisuelle.
                </p>
                
              </div>
              
              <motion.div 
                className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d71b1b]/20 to-black/60 z-10" />
                <Image
                  src="/about1.jpg" // Replace with your actual image
                  alt="Notre Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
                <div className="absolute bottom-4 left-6 z-30">
                  <span className="text-xs text-white/80">NOTRE VISION</span>
                  <h4 className="text-xl font-bold">Excellence & Créativité</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Equipe Card */}
          <motion.div 
            variants={fadeUpItem}
            className="relative mb-24 md:mb-32 mx-auto"
          >
            <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-5xl mx-auto">
              <div className="w-full md:w-1/2 md:pl-8 mb-8 md:mb-0 relative z-10">
                <Users className="w-16 h-16 text-[#d71b1b] mb-6 relative z-10" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">Notre Équipe</h3>
                <p className="text-lg text-white/80 relative z-10">
                  Grâce à la répartition en différents pôles, chacun intervient sur des projets 
                  qui relève de son domaine d'expertise.
                </p>
              </div>
              
              <motion.div 
                className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d71b1b]/20 to-black/60 z-10" />
                <Image
                  src="/about3.jpg" // Replace with your actual image
                  alt="Notre Équipe"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
                <div className="absolute bottom-4 left-6 z-30">
                  <span className="text-xs text-white/80">NOS TALENTS</span>
                  <h4 className="text-xl font-bold">Passionnés & Créatifs</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Expertise Card */}
          <motion.div 
            variants={fadeUpItem}
            className="relative mb-16 mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
              <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 relative z-10">
                <Sparkles className="w-16 h-16 text-[#d71b1b] mb-6 relative z-10" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">Notre Expertise</h3>
                <p className="text-lg text-white/80 relative z-10">
                  Bénéficiant de la diversité culturelle et académique, notre équipe apporte 
                  un conseil personnalisé et des plans d'action pertinents.
                </p>
              </div>
              
              <motion.div 
                className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d71b1b]/20 to-black/60 z-10" />
                <Image
                  src="/about2.webp" // Replace with your actual image
                  alt="Notre Expertise"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
                <div className="absolute bottom-4 left-6 z-30">
                  <span className="text-xs text-white/80">NOTRE SAVOIR-FAIRE</span>
                  <h4 className="text-xl font-bold">Innovation & Précision</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
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