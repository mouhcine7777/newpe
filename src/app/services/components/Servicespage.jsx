"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Award, Users, ArrowRight, Lightbulb, Zap, Globe, 
  X, MapPin, Calendar, BarChart, Trophy, CheckCircle, Clock
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [expandedService, setExpandedService] = useState(null);
  const expandedRef = React.useRef(null);
  

  const services = [
    {
      title: "Stand et Exhibitions",
      subtitle: "Design Experience",
      description: "Créations uniques et immersives pour vos expositions les plus ambitieuses. Nous concevons des espaces qui captent l'attention et laissent une impression durable.",
      image: "/about1.jpg",
      stats: ["200+ Stands", "45 Pays", "98% Satisfaction"],
      icon: <Sparkles className="w-6 h-6" />,
      color: "#FF3A5E",
      expandedContent: {
        longDescription: "Notre équipe d'experts en design crée des stands d'exposition qui transforment votre marque en expérience immersive. Nous combinons architecture innovante, technologie interactive et narration visuelle pour captiver votre audience et maximiser votre impact. Chaque stand est conçu pour refléter votre identité tout en optimisant le flux de visiteurs et les points d'engagement.",
        features: [
          "Conception architecturale sur mesure",
          "Intégration de technologies interactives",
          "Gestion de projet de A à Z",
          "Installation et démontage international",
          "Solutions écologiques disponibles"
        ],
        caseStudy: {
          client: "TechVision Global",
          event: "CES Las Vegas",
          result: "Augmentation de 43% des leads qualifiés",
          testimonial: "L'équipe a dépassé toutes nos attentes. Notre stand a été le point focal du salon et a généré un ROI exceptionnel."
        },
        gallery: ["/about1.jpg", "/about2.webp", "/about3.jpg"]
      }
    },
    {
      title: "Conteneurs Éphémères",
      subtitle: "Design Experience",
      description: "Solutions modulables et innovantes pour transformer vos espaces. Nos conteneurs personnalisés créent des expériences uniques et flexibles pour votre marque.",
      image: "/about2.webp",
      stats: ["150+ Projets", "40+ Clients", "95% Satisfaction"],
      icon: <Award className="w-6 h-6" />,
      color: "#3A86FF",
      expandedContent: {
        longDescription: "Nos solutions de conteneurs éphémères redéfinissent les espaces temporaires avec style et fonctionnalité. Parfaits pour les pop-up stores, showrooms mobiles ou installations artistiques, nos conteneurs modulaires s'adaptent à tous les environnements. Nous intégrons des finitions haut de gamme, des systèmes techniques avancés et des designs personnalisés pour créer des espaces qui captivent et engagent.",
        features: [
          "Personnalisation complète intérieure et extérieure",
          "Systèmes d'éclairage et climatisation intégrés",
          "Mobilité et installation rapide",
          "Options d'autonomie énergétique",
          "Conformité aux normes internationales"
        ],
        caseStudy: {
          client: "Maison Lumière",
          event: "Tour Européen",
          result: "Présence dans 12 villes en 3 mois",
          testimonial: "Le concept modulaire nous a permis d'adapter notre présentation à chaque emplacement tout en maintenant une identité cohérente."
        },
        gallery: ["/about2.webp", "/about3.jpg", "/about1.jpg"]
      }
    },
    {
      title: "Stage Design",
      subtitle: "Design Experience",
      description: "Scénographies spectaculaires pour des moments inoubliables. Nous concevons des espaces scéniques qui amplifient votre message et créent des souvenirs durables.",
      image: "/about1.jpg",
      stats: ["300+ Events", "25 Awards", "1M+ Spectateurs"],
      icon: <Users className="w-6 h-6" />,
      color: "#8338EC",
      expandedContent: {
        longDescription: "Notre approche du stage design combine art, technologie et émotion pour créer des moments spectaculaires. Que ce soit pour un concert, un défilé de mode ou une conférence corporate, nous concevons des scénographies qui amplifient votre message et créent une connexion profonde avec le public. Notre équipe maîtrise les dernières technologies en matière d'éclairage, de projection et d'effets spéciaux.",
        features: [
          "Conception scénographique complète",
          "Solutions LED et mapping vidéo avancées",
          "Effets spéciaux et pyrotechnie",
          "Structures sur mesure et modulables",
          "Régie technique et coordination live"
        ],
        caseStudy: {
          client: "Festival Lumières",
          event: "Édition Anniversaire",
          result: "Couverture médiatique internationale",
          testimonial: "La scénographie a transcendé notre vision artistique et créé une expérience sensorielle totale pour notre audience."
        },
        gallery: ["/about3.jpg", "/about1.jpg", "/about2.webp"]
      }
    },
    {
      title: "Événements Corporate",
      subtitle: "Event Experience",
      description: "Renforcez votre image de marque avec des événements d'exception. Nous orchestrons chaque détail pour créer des expériences professionnelles qui reflètent vos valeurs.",
      image: "/about3.jpg",
      stats: ["500+ Events", "200+ Clients", "97% Satisfaction"],
      icon: <Lightbulb className="w-6 h-6" />,
      color: "#FFB703",
      expandedContent: {
        longDescription: "Nos événements corporate sont conçus pour renforcer votre culture d'entreprise et impressionner vos parties prenantes. De la planification stratégique à l'exécution impeccable, nous créons des expériences qui communiquent vos valeurs et objectifs de manière mémorable. Séminaires, lancements de produits, galas ou team buildings - chaque événement est une opportunité de renforcer votre marque.",
        features: [
          "Stratégie événementielle alignée sur vos objectifs",
          "Gestion logistique complète",
          "Expériences digitales et physiques intégrées",
          "Mesure d'impact et analyse post-événement",
          "Solutions durables et RSE"
        ],
        caseStudy: {
          client: "Groupe Financier International",
          event: "Fusion Stratégique",
          result: "100% d'adhésion des collaborateurs",
          testimonial: "L'événement a parfaitement incarné notre nouvelle vision et créé un sentiment d'unité parmi nos équipes globales."
        },
        gallery: ["/about3.jpg", "/about2.webp", "/about1.jpg"]
      }
    },
    {
      title: "Expériences Digitales",
      subtitle: "Digital Experience",
      description: "Créez des connexions numériques puissantes avec votre audience. Nos solutions digitales interactives complètent vos expériences physiques pour un impact maximal.",
      image: "/about2.webp",
      stats: ["300+ Projets", "50+ Innovations", "96% Engagement"],
      icon: <Zap className="w-6 h-6" />,
      color: "#38B000",
      expandedContent: {
        longDescription: "Nos expériences digitales créent des ponts entre le monde physique et virtuel, offrant des interactions mémorables et mesurables. Du développement d'applications sur mesure aux installations interactives, en passant par la réalité augmentée et les plateformes d'engagement, nous concevons des solutions qui prolongent l'impact de vos événements et amplifient votre message.",
        features: [
          "Applications mobiles personnalisées",
          "Réalité augmentée et virtuelle",
          "Installations interactives tactiles",
          "Plateformes d'engagement social",
          "Analyse de données en temps réel"
        ],
        caseStudy: {
          client: "Luxury Brand Network",
          event: "Lancement Collection Annuelle",
          result: "28M d'impressions sur les réseaux sociaux",
          testimonial: "L'expérience digitale a transformé notre événement physique en phénomène viral, étendant notre portée bien au-delà de nos attentes."
        },
        gallery: ["/about2.webp", "/about1.jpg", "/about3.jpg"]
      }
    },
    {
      title: "Expansion Internationale",
      subtitle: "Global Experience",
      description: "Étendez votre présence au-delà des frontières. Notre expertise mondiale vous aide à adapter vos expériences aux marchés internationaux tout en préservant votre identité.",
      image: "/about3.jpg",
      stats: ["35+ Pays", "150+ Projets Globaux", "92% Réussite"],
      icon: <Globe className="w-6 h-6" />,
      color: "#9D4EDD",
      expandedContent: {
        longDescription: "Notre service d'expansion internationale vous accompagne dans le déploiement global de vos expériences de marque. Grâce à notre réseau de partenaires locaux et notre expertise interculturelle, nous adaptons vos concepts aux spécificités régionales tout en maintenant la cohérence de votre identité. Nous gérons les complexités logistiques, réglementaires et culturelles pour assurer votre succès sur de nouveaux marchés.",
        features: [
          "Analyse de marché et stratégie d'adaptation locale",
          "Réseau de partenaires dans 35+ pays",
          "Gestion des réglementations internationales",
          "Logistique et chaîne d'approvisionnement globale",
          "Support multilingue et interculturel"
        ],
        caseStudy: {
          client: "TechStart Innovation",
          event: "Programme d'Accélération Global",
          result: "Implantation réussie sur 3 continents",
          testimonial: "L'équipe a transformé notre vision locale en une présence mondiale cohérente, respectant nos valeurs tout en s'adaptant aux nuances culturelles."
        },
        gallery: ["/about3.jpg", "/about1.jpg", "/about2.webp"]
      }
    }
  ];

  const handleDiscoverClick = (index) => {
    setExpandedService(index);
    if (expandedService !== index) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const closeExpandedView = () => {
    setExpandedService(null);
  };

  React.useEffect(() => {
    if (expandedService !== null && expandedRef.current) {
      expandedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [expandedService]);

  return (
    <section className="relative bg-black pt-32 pb-20">
      {/* Dynamic background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full">
          <svg width="100%" height="100%" className="opacity-10">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle id="pattern-circle" cx="20" cy="20" r="1" fill="#d71b1b" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#d71b1b] to-transparent opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-[#d71b1b] to-transparent opacity-20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-[90%] mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-montserrat font-black text-5xl md:text-7xl text-white mb-6 relative inline-block">
            <span className="relative z-10">NOS EXPERTISES</span>
            <motion.span 
              className="absolute -bottom-2 left-0 right-0 h-3 bg-[#d71b1b] rounded-full -z-0"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h1>
          <p className="font-montserrat text-xl text-white/80 max-w-2xl mx-auto">
            Des solutions créatives qui transforment vos idées en expériences mémorables
          </p>
        </motion.div>

        {/* Expanded Service View */}
        <AnimatePresence>
          {expandedService !== null && (
            <motion.div
              ref={expandedRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-16 relative"
            >
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${services[expandedService].color}15 0%, black 100%)`,
                  border: `1px solid ${services[expandedService].color}30`
                }}
              >
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeExpandedView}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left side: Image gallery */}
                  <div className="lg:col-span-1 relative h-[300px] lg:h-auto">
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 20,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-full h-full"
                      >
                        <img 
                          src={services[expandedService].expandedContent.gallery[0]} 
                          alt={services[expandedService].title} 
                          className="w-full h-full object-cover"
                        />
                        <div 
                          className="absolute inset-0"
                          style={{ background: `linear-gradient(to right, black 0%, transparent 100%)` }}
                        />
                      </motion.div>
                    </div>

                    {/* Service icon floating */}
                    <div className="absolute bottom-8 right-8">
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-16 h-16 rounded-2xl backdrop-blur-xl flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${services[expandedService].color}20`,
                          border: `2px solid ${services[expandedService].color}50`
                        }}
                      >
                        <div style={{ color: services[expandedService].color }}>
                          {services[expandedService].icon}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right side: Content */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="mb-2 inline-flex items-center gap-2 px-4 py-1 rounded-xl bg-white/10 backdrop-blur-sm w-fit">
                      <span className="text-white/80 text-sm font-montserrat">
                        {services[expandedService].subtitle}
                      </span>
                    </div>

                    <h2 className="font-montserrat font-bold text-3xl text-white mb-4">
                      {services[expandedService].title}
                    </h2>

                    <p className="font-montserrat text-lg text-white/80 mb-6">
                      {services[expandedService].expandedContent.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-montserrat font-semibold text-xl text-white mb-4">
                        Nos Services
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[expandedService].expandedContent.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: services[expandedService].color }} />
                            <span className="font-montserrat text-white/90 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Case Study */}
                    <div 
                      className="rounded-xl p-6 mb-8"
                      style={{ 
                        backgroundColor: `${services[expandedService].color}10`,
                        border: `1px solid ${services[expandedService].color}30`
                      }}
                    >
                      <h3 className="font-montserrat font-semibold text-white mb-4 flex items-center gap-2">
                        <Trophy className="w-5 h-5" style={{ color: services[expandedService].color }} />
                        <span>Étude de Cas</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        <div className="flex items-start gap-3">
                          <BarChart className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: services[expandedService].color }} />
                          <div>
                            <p className="font-montserrat text-white/60 text-xs">Résultat</p>
                            <p className="font-montserrat text-white text-sm">{services[expandedService].expandedContent.caseStudy.result}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: services[expandedService].color }} />
                          <div>
                            <p className="font-montserrat text-white/60 text-xs">Client</p>
                            <p className="font-montserrat text-white text-sm">{services[expandedService].expandedContent.caseStudy.client}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: services[expandedService].color }} />
                          <div>
                            <p className="font-montserrat text-white/60 text-xs">Événement</p>
                            <p className="font-montserrat text-white text-sm">{services[expandedService].expandedContent.caseStudy.event}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pl-3 border-l-2" style={{ borderColor: services[expandedService].color }}>
                        <p className="italic text-white/80 text-sm">
                          "{services[expandedService].expandedContent.caseStudy.testimonial}"
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundColor: services[expandedService].color }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-montserrat"
                      >
                        <span>Demander un devis</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-montserrat"
                      >
                        <span>Voir plus de projets</span>
                        <Clock className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Service Grid with Hexagon Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="h-[380px] rounded-2xl overflow-hidden relative">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 opacity-90 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(45deg, black 0%, ${service.color}70 100%)`,
                      opacity: activeService === index ? "1" : "0.85"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  {/* Icon Container */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md" 
                    style={{ 
                      backgroundColor: `${service.color}20`, 
                      border: `2px solid ${service.color}50` 
                    }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>

                  <div>
                    {/* Title and Subtitle */}
                    <div className="mb-4">
                      <p className="text-sm font-montserrat text-white/70 mb-1">{service.subtitle}</p>
                      <h3 className="font-montserrat font-bold text-2xl text-white group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description - Hidden on small screens */}
                    <p className="font-montserrat text-white/80 text-sm mb-4 line-clamp-2 md:line-clamp-3">
                      {service.description}
                    </p>

                    {/* Stats in horizontal layout */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 rounded-lg backdrop-blur-md"
                          style={{ 
                            backgroundColor: `${service.color}20`, 
                            border: `1px solid ${service.color}50` 
                          }}
                        >
                          <p className="font-montserrat text-white text-xs">
                            {stat}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Discover Button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 group/btn"
                      onClick={() => handleDiscoverClick(index)}
                    >
                      <span 
                        className="font-medium text-sm transition-colors"
                        style={{ color: service.color }}
                      >
                        Découvrir
                      </span>
                      <ArrowRight 
                        className="w-4 h-4 transition-colors"
                        style={{ color: service.color }}
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 py-10 px-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="font-montserrat font-bold text-3xl text-white mb-4">
                Vous avez un projet spécial en tête?
              </h2>
              <p className="font-montserrat text-white/80 max-w-2xl mb-6">
                Notre équipe d'experts peut vous aider à créer une solution sur mesure pour répondre à vos besoins uniques. De la conception à la réalisation, nous sommes là pour donner vie à vos idées les plus ambitieuses.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d71b1b] hover:bg-[#ff2222] transition-colors font-montserrat"
              >
                <span className="font-medium text-white tracking-wide">Demander un devis</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.div>
              </motion.button>
            </div>
            
            <div className="relative h-64 lg:h-full">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="w-full h-full bg-gradient-to-tr from-[#d71b1b] to-[#d71b1b]/30 opacity-90">
                  <div className="absolute inset-0 mix-blend-overlay">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                      <path fill="#FFFFFF" d="M42.7,-62.9C53.9,-53.3,61.2,-38.7,65.9,-23.4C70.7,-8.1,73.1,7.9,68.4,21.2C63.8,34.4,52.2,45,39.1,53.6C26,62.2,11.6,68.8,-2.2,71.6C-15.9,74.4,-29.1,73.4,-41.1,67.1C-53.2,60.7,-64.2,49,-69.2,35.3C-74.3,21.6,-73.5,5.9,-69.4,-8.2C-65.2,-22.2,-57.6,-34.6,-47,-45.1C-36.3,-55.6,-22.5,-64.1,-7.3,-65.5C7.9,-66.9,22,-72.4,42.7,-62.9Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-32 h-32 backdrop-blur-md bg-white/10 rounded-full flex items-center justify-center"
                  >
                    <div className="w-24 h-24 backdrop-blur-md bg-white/20 rounded-full flex items-center justify-center">
                      <div className="text-white text-3xl font-bold">
                        <Sparkles className="w-12 h-12" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;