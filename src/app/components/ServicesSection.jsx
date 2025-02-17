"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Sparkles, Award, Users } from 'lucide-react';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const services = [
    {
      title: "Stand et Exhibitions",
      subtitle: "Design Experience",
      description: "Créations uniques et immersives pour vos expositions les plus ambitieuses",
      image: "/about1.jpg",
      stats: ["200+ Stands", "45 Pays", "98% Satisfaction"],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Conteneurs Éphémères",
      subtitle: "Design Experience",
      description: "Solutions modulables et innovantes pour transformer vos espaces",
      image: "/about2.webp",
      stats: ["150+ Projets", "40+ Clients", "95% Satisfaction"],
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Stage Design",
      subtitle: "Design Experience",
      description: "Scénographies spectaculaires pour des moments inoubliables",
      image: "/about1.jpg",
      stats: ["300+ Events", "25 Awards", "1M+ Spectateurs"],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Événements Corporate",
      subtitle: "Event Experience",
      description: "Renforcez votre image de marque avec des événements d'exception",
      image: "/about3.jpg",
      stats: ["500+ Events", "200+ Clients", "97% Satisfaction"],
      icon: <Award className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#d71b1b] to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#d71b1b] to-transparent rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="text-center mb-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-block"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-2">
            NOS <span className="text-[#d71b1b]">EXPERTISES</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-[90%] mx-auto">
        <div className="relative h-[600px] md:h-[700px] rounded-xl overflow-hidden">
          {/* Mobile Navigation */}
          <div className="md:hidden absolute bottom-4 right-4 z-30 flex flex-col gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              aria-label="Service précédent"
              className="w-12 h-12 rounded-full bg-[#d71b1b] flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-[#ff2222] transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={nextSlide}
  aria-label="Service suivant"
  className="w-12 h-12 rounded-full bg-[#d71b1b] flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-[#ff2222] transition-colors"
>
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {services.map((service, idx) => (
              idx === activeIndex && (
                <motion.div
                  key={service.title}
                  id={`service-panel-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  role="tabpanel"
                  aria-label={`Service ${service.title}`}
                >
                  <div className="relative h-full overflow-hidden group">
                    <motion.div 
                      className="absolute inset-0"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center">
                      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                        <div className="max-w-2xl">
                          {/* Updated Subtitle Style */}
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-6"
                          >
                            <motion.div 
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                              whileHover={{ scale: 1.05 }}
                            >
                              {service.icon}
                              <span className="text-white text-sm md:text-base font-montserrat font-medium tracking-wide">
                                {service.subtitle}
                              </span>
                            </motion.div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8"
                          >
                            <h3 className="font-montserrat font-bold text-3xl md:text-6xl text-white mb-4 md:mb-6">
                              {service.title}
                            </h3>
                            <p className="font-montserrat text-base md:text-xl text-white/80 max-w-xl">
                              {service.description}
                            </p>
                          </motion.div>

                          {/* Updated Stats Style */}
                          <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
                            {service.stats.map((stat, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                              >
                                <p className="font-montserrat text-white text-sm md:text-base font-medium">
                                  {stat}
                                </p>
                              </motion.div>
                            ))}
                          </div>

                          {/* Updated CTA Button */}
                          <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d71b1b] shadow-lg hover:bg-[#ff2222] transition-colors font-montserrat"
                    aria-label={`Découvrir ${service.title}`}
                  >
                            <span className="font-medium text-white tracking-wide">Découvrir</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-4 h-4 text-white" />
                            </motion.div>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-4 z-20"
            role="navigation"
            aria-label="Navigation des services"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              aria-label="Service précédent"
              className="w-12 h-12 rounded-full bg-[#d71b1b] flex items-center justify-center shadow-lg hover:bg-[#ff2222] transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            
            <div 
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Sélecteur de services"
            >
              {services.map((service, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  role="tab"
                  aria-selected={idx === activeIndex ? "true" : "false"}
                  aria-controls={`service-panel-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  aria-label={`${service.title} (${idx + 1} sur ${services.length})`}
                  tabIndex={idx === activeIndex ? 0 : -1}
                  className={`w-8 h-1 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-[#d71b1b]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              aria-label="Service suivant"
              className="w-12 h-12 rounded-full bg-[#d71b1b] flex items-center justify-center shadow-lg hover:bg-[#ff2222] transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Mobile Progress Indicators */}
          <div className="md:hidden absolute bottom-4 left-4 z-20" role="tablist">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              {services.map((service, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`Voir ${service.title}`}
                  aria-selected={idx === activeIndex}
                  role="tab"
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-[#d71b1b]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;