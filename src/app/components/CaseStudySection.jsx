"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Nostalgia Lovers Festival",
      description: "Un voyage dans le temps à travers une expérience immersive unique",
      image: "/about2.webp",
      category: "Festival Design",
      year: "2024"
    },
    {
      title: "Pavillon Maroc",
      description: "L'essence du Maroc contemporain dans une architecture avant-gardiste",
      image: "/about1.jpg",
      category: "Exhibition Design",
      year: "2023"
    },
    {
      title: "ONMT",
      description: "Redéfinir l'expérience touristique marocaine pour le monde moderne",
      image: "/about3.jpg",
      category: "Brand Experience",
      year: "2023"
    },
    {
      title: "Smart City Casablanca",
      description: "L'avenir urbain intelligent prend forme à Casablanca",
      image: "/smartcity.jpg",
      category: "Urban Design",
      year: "2024"
    },
    {
      title: "UM6P Culture Day",
      description: "Célébration culturelle immersive pour l'Université Mohammed VI Polytechnique",
      image: "/realisations/UM6P.png",
      category: "Cultural Event",
      year: "2024"
    },
    {
      title: "OCP Speed Networking",
      description: "Événement de networking innovant pour le Groupe OCP",
      image: "/realisations/ocp.png",
      category: "Corporate Event",
      year: "2024"
    },
    {
      title: "Casa Events Smart City",
      description: "Vision futuriste de la ville intelligente casablancaise",
      image: "/realisations/smartcity.png",
      category: "Smart City",
      year: "2024"
    },
    {
      title: "Afriquia Team Building",
      description: "Expérience de cohésion d'équipe créative pour Afriquia",
      image: "/realisations/teambuilding.png",
      category: "Team Building",
      year: "2024"
    },
    {
      title: "Immogallery",
      description: "Galerie immobilière interactive et moderne",
      image: "/realisations/immo.png",
      category: "Real Estate",
      year: "2024"
    },
    {
      title: "WTCR Village Afriquia",
      description: "Village événementiel pour le Championnat du Monde des Voitures de Tourisme",
      image: "/realisations/afriquia.png",
      category: "Motorsport Event",
      year: "2024"
    },
    {
      title: "Safran Group Gulfstream G700",
      description: "Présentation exclusive du jet privé Gulfstream G700 pour Safran",
      image: "/realisations/safran.png",
      category: "Aviation Event",
      year: "2024"
    },
    {
      title: "UM6P Folk Show",
      description: "Spectacle folklorique traditionnel pour l'Université Mohammed VI Polytechnique",
      image: "/realisations/fulk.png",
      category: "Cultural Show",
      year: "2024"
    },
    {
      title: "Solution Agency ITB Berlin Egypt",
      description: "Pavillon étatique égyptien au salon international du tourisme de Berlin",
      image: "/realisations/pavillons-etatiques.png",
      category: "State Pavilion",
      year: "2022"
    },
    {
      title: "ADA ADIFE",
      description: "Stand d'exposition pour l'Agence de Développement Agricole",
      image: "/realisations/adif2023.png",
      category: "Agricultural Exhibition",
      year: "2023"
    },
    {
      title: "Gitex Stand INWI",
      description: "Stand technologique innovant pour l'opérateur INWI au salon GITEX",
      image: "/realisations/inwi.png",
      category: "Tech Exhibition",
      year: "2023"
    },
    {
      title: "SIAM Groupe Crédit Agricole",
      description: "Présence remarquable du Crédit Agricole au Salon International de l'Agriculture",
      image: "/realisations/gca.png",
      category: "Agricultural Fair",
      year: "2023"
    },
    {
      title: "IRESEN Solar Decathlon Africa",
      description: "Pavillon solaire innovant pour la compétition Solar Decathlon Africa",
      image: "/realisations/iresen.png",
      category: "Sustainable Energy",
      year: "2023"
    },
    {
      title: "Pavillon Russe Dubai",
      description: "Représentation culturelle russe prestigieuse à Dubai",
      image: "/realisations/russe.png",
      category: "Cultural Pavilion",
      year: "2019"
    },
    {
      title: "FRMB World Series Boxing",
      description: "Événement international de boxe World Series organisé par la FRMB",
      image: "/realisations/wbs.png",
      category: "Sports Event",
      year: "2015"
    }
  ];

  return (
    <section className="relative bg-black py-12 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#d71b1b]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#d71b1b]/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-6xl text-white text-center mb-6">
            NOS <span className="text-[#d71b1b]">PROJETS</span>
          </h2>
          <div className="w-24 h-1 bg-[#d71b1b]" />
        </motion.div>
      </div>

      {/* Swiper Container with Custom Pagination Styles */}
      <div className="max-w-[95%] mx-auto relative [&_.swiper-pagination-bullet]:bg-[#d71b1b] [&_.swiper-pagination-bullet-active]:bg-[#d71b1b] [&_.swiper-pagination]:pb-4 md:pb-0">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4"
                  >
                    <span className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-montserrat text-xs md:text-sm">
                      {project.category}
                    </span>
                    <span className="text-white/60 font-montserrat text-xs md:text-sm">
                      {project.year}
                    </span>
                  </motion.div>

                  <h3 className="font-montserrat font-bold text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-4">
                    {project.title}
                  </h3>

                  <p className="font-montserrat text-sm md:text-base text-white/80 mb-4 md:mb-6">
                    {project.description}
                  </p>

                  {/* Updated Compact Button */}
                  <div className="flex items-start">
                    <button className="group/btn relative flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden">
                      <span className="relative z-10 text-white font-montserrat text-sm md:text-base">
                        Découvrir
                      </span>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d71b1b] transform origin-left scale-x-0 transition-transform duration-300 group-hover/btn:scale-x-100" />
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#d71b1b] relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button 
          className="swiper-button-prev hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Projet précédent"
          title="Voir le projet précédent"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button 
          className="swiper-button-next hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Projet suivant"
          title="Voir le projet suivant"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;