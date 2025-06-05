"use client";
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ArrowLeft } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const containerRef = useRef(null);
  
  // Handle escape key for closing project details
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDetailView) {
        setIsDetailView(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDetailView]);
  
  // Lock/unlock scroll when detail view is open/closed
  useEffect(() => {
    if (isDetailView) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isDetailView]);

  const projects = [
    {
      title: "Nostalgia Lovers Festival",
      description: "Un voyage dans le temps à travers une expérience immersive unique",
      fullDescription: "Ce festival a transformé le centre historique de Casablanca en une capsule temporelle vivante, combinant technologie de pointe et esthétique rétro. Nous avons créé des installations interactives représentant chaque décennie du 20ème siècle, avec des projections holographiques, des expériences sensorielles et des performances live. Le festival a attiré plus de 50 000 visiteurs et a généré un engagement massif sur les réseaux sociaux, avec plus de 2 millions de partages.",
      image: "/about2.webp",
      additionalImages: ["/about2.webp", "/about2.webp", "/about2.webp"],
      category: "Festival Design",
      year: "2024",
      client: "Ministère de la Culture",
      location: "Casablanca, Maroc",
      accentColor: "#9d4edd"
    },
    {
      title: "AMDIE GIFA Dusseldorf",
      description: "L'essence du Maroc contemporain dans une architecture avant-gardiste",
      fullDescription: "Pour l'exposition internationale de design, nous avons conçu un pavillon qui réinterprète les éléments architecturaux marocains traditionnels à travers un prisme futuriste. La structure modulaire en aluminium et verre s'inspire des motifs géométriques zellige, avec un système d'éclairage dynamique qui transforme l'espace au fil de la journée. Le pavillon a remporté le prix de l'innovation architecturale et a été couvert par plus de 30 publications internationales d'architecture.",
      image: "/about1.jpg",
      additionalImages: ["/about1-detail1.jpg", "/about1-detail2.jpg", "/about1-detail3.jpg"],
      category: "Exhibition Design",
      year: "2023",
      client: "ONMT",
      location: "Dusseldorf, Allemagne",
      accentColor: "#ff6b6b"  
    },
    {
      title: "ONMT",
      description: "Redéfinir l'expérience touristique marocaine pour le monde moderne",
      fullDescription: "Notre refonte complète de l'identité visuelle et des espaces physiques de l'Office National Marocain du Tourisme a créé une expérience de marque cohérente et contemporaine. Nous avons développé un langage visuel flexible qui célèbre la diversité du Maroc tout en étant résolument moderne. Le projet comprend la conception de bureaux interactifs, d'applications numériques et d'installations expérientielles dans dix villes internationales, générant une augmentation de 35% des demandes de renseignements touristiques.",
      image: "/about3.jpg",
      additionalImages: ["/about3-detail1.jpg", "/about3-detail2.jpg", "/about3-detail3.jpg"],
      category: "Brand Experience",
      year: "2023",
      client: "ONMT",
      location: "Multiple Locations",
      accentColor: "#00b4d8"
    },
    {
      title: "UM6P Culture Day",
      description: "Célébration culturelle immersive pour l'Université Mohammed VI Polytechnique",
      fullDescription: "Un événement culturel d'envergure qui a transformé le campus de l'UM6P en un véritable festival des cultures du monde. Nous avons conçu des pavillons thématiques représentant différentes cultures, avec des installations interactives, des spectacles et des ateliers participatifs. L'événement a rassemblé plus de 15 000 participants de 50 nationalités différentes.",
      image: "/realisations/UM6P.png",
      additionalImages: ["/realisations/UM6P.png", "/realisations/UM6P.png", "/realisations/UM6P.png"],
      category: "Cultural Event",
      year: "2024",
      client: "Université Mohammed VI Polytechnique",
      location: "Ben Guerir, Maroc",
      accentColor: "#10b981"
    },
    {
      title: "OCP Speed Networking",
      description: "Événement de networking innovant pour le Groupe OCP",
      fullDescription: "Un concept révolutionnaire de networking qui combine technologie et design d'espace pour optimiser les rencontres professionnelles. Nous avons créé des zones thématiques avec des outils numériques de mise en relation, des espaces modulaires adaptables et un système de gamification. L'événement a généré plus de 3000 connexions professionnelles en une journée.",
      image: "/realisations/ocp.png",
      additionalImages: ["/realisations/ocp.png", "/realisations/ocp.png", "/realisations/ocp.png"],
      category: "Corporate Event",
      year: "2024",
      client: "Groupe OCP",
      location: "Casablanca, Maroc",
      accentColor: "#3b82f6"
    },
    {
      title: "Casa Events Smart City",
      description: "Vision futuriste de la ville intelligente casablancaise",
      fullDescription: "Une exposition immersive présentant les solutions technologiques pour la ville de demain. Nous avons développé des maquettes interactives, des expériences de réalité augmentée et des démonstrations live de technologies smart city. Le projet a sensibilisé plus de 20 000 visiteurs aux enjeux urbains du futur.",
      image: "/realisations/smartcity.png",
      additionalImages: ["/realisations/smartcity.png", "/realisations/smartcity.png", "/realisations/smartcity.png"],
      category: "Smart City",
      year: "2024",
      client: "Casa Events",
      location: "Casablanca, Maroc",
      accentColor: "#8b5cf6"
    },
    {
      title: "Afriquia Team Building",
      description: "Expérience de cohésion d'équipe créative pour Afriquia",
      fullDescription: "Un programme de team building innovant combinant défis créatifs, activités sportives et ateliers collaboratifs. Nous avons conçu des espaces modulaires adaptés à différentes activités et développé un parcours gamifié personnalisé. L'événement a renforcé la cohésion de plus de 500 collaborateurs.",
      image: "/realisations/teambuilding.png",
      additionalImages: ["/realisations/teambuilding.png", "/realisations/teambuilding.png", "/realisations/teambuilding.png"],
      category: "Team Building",
      year: "2024",
      client: "Afriquia",
      location: "Mohammedia, Maroc",
      accentColor: "#f59e0b"
    },
    {
      title: "Immogallery",
      description: "Galerie immobilière interactive et moderne",
      fullDescription: "Un showroom immobilier révolutionnaire qui utilise la réalité virtuelle et la visualisation 3D pour présenter les projets. Nous avons créé un espace futuriste avec des écrans interactifs, des visites virtuelles immersives et des outils de personnalisation en temps réel. La galerie a augmenté les ventes de 40% en six mois.",
      image: "/realisations/immo.png",
      additionalImages: ["/realisations/immo.png", "/realisations/immo.png", "/realisations/immo.png"],
      category: "Real Estate",
      year: "2024",
      client: "Immogallery",
      location: "Casablanca, Maroc",
      accentColor: "#06b6d4"
    },
    {
      title: "WTCR Village Afriquia",
      description: "Village événementiel pour le Championnat du Monde des Voitures de Tourisme",
      fullDescription: "Un village temporaire spectaculaire pour accueillir le WTCR, combinant espaces VIP, zones de divertissement et installations techniques. Nous avons conçu une architecture modulaire inspirée de l'univers automobile, avec des matériaux durables et des technologies de pointe. L'événement a attiré plus de 100 000 spectateurs sur trois jours.",
      image: "/realisations/afriquia.png",
      additionalImages: ["/realisations/afriquia.png", "/realisations/afriquia.png", "/realisations/afriquia.png"],
      category: "Motorsport Event",
      year: "2024",
      client: "Afriquia",
      location: "Marrakech, Maroc",
      accentColor: "#ef4444"
    },
    {
      title: "Safran Group Gulfstream G700",
      description: "Présentation exclusive du jet privé Gulfstream G700 pour Safran",
      fullDescription: "Un événement de lancement prestigieux pour présenter le nouveau jet Gulfstream G700. Nous avons créé un hangar d'exposition théâtralisé avec un éclairage cinématographique, des projections immersives et des espaces de réception luxueux. L'événement a rassemblé 300 invités VIP et généré une couverture médiatique internationale.",
      image: "/realisations/safran.png",
      additionalImages: ["/realisations/safran.png", "/realisations/safran.png", "/realisations/safran.png"],
      category: "Aviation Event",
      year: "2024",
      client: "Safran Group",
      location: "Casablanca, Maroc",
      accentColor: "#1e40af"
    },
    {
      title: "UM6P Folk Show",
      description: "Spectacle folklorique traditionnel pour l'Université Mohammed VI Polytechnique",
      fullDescription: "Un spectacle grandiose célébrant la richesse du patrimoine culturel marocain. Nous avons conçu une scénographie évolutive avec des décors modulaires, des costumes traditionnels revisités et des effets spéciaux modernes. Le show a été présenté devant plus de 5000 spectateurs et a été diffusé en direct.",
      image: "/realisations/fulk.png",
      additionalImages: ["/realisations/fulk.png", "/realisations/fulk.png", "/realisations/fulk.png"],
      category: "Cultural Show",
      year: "2024",
      client: "Université Mohammed VI Polytechnique",
      location: "Ben Guerir, Maroc",
      accentColor: "#dc2626"
    },
    {
      title: "Solution Agency ITB Berlin Egypt",
      description: "Pavillon étatique égyptien au salon international du tourisme de Berlin",
      fullDescription: "Conception et réalisation du pavillon officiel de l'Égypte au salon ITB Berlin, le plus grand salon du tourisme au monde. Nous avons créé un espace immersif célébrant la richesse historique et les nouvelles destinations égyptiennes, avec des technologies interactives et des expériences sensorielles. Le pavillon a attiré plus de 50 000 visiteurs professionnels.",
      image: "/realisations/pavillons-etatiques.png",
      additionalImages: ["/realisations/pavillons-etatiques.png", "/realisations/pavillons-etatiques.png", "/realisations/pavillons-etatiques.png"],
      category: "State Pavilion",
      year: "2022",
      client: "Ministère du Tourisme d'Égypte",
      location: "Berlin, Allemagne",
      accentColor: "#f97316"
    },
    {
      title: "ADA ADIFE",
      description: "Stand d'exposition pour l'Agence de Développement Agricole",
      fullDescription: "Un stand innovant présentant les solutions durables pour l'agriculture moderne au Maroc. Nous avons intégré des technologies de présentation interactives, des espaces de démonstration live et des zones de rencontre professionnelle. Le stand a généré plus de 2000 contacts qualifiés et plusieurs partenariats stratégiques.",
      image: "/realisations/adif2023.png",
      additionalImages: ["/realisations/adif2023.png", "/realisations/adif2023.png", "/realisations/adif2023.png"],
      category: "Agricultural Exhibition",
      year: "2023",
      client: "Agence de Développement Agricole",
      location: "Meknès, Maroc",
      accentColor: "#22c55e"
    },
    {
      title: "Gitex Stand INWI",
      description: "Stand technologique innovant pour l'opérateur INWI au salon GITEX",
      fullDescription: "Un stand futuriste présentant les innovations 5G et les solutions digitales d'INWI. Nous avons développé des démonstrations interactives, des espaces de réalité virtuelle et des zones de test technologique. Le stand a été élu 'Meilleur Stand Innovation' du salon et a généré une couverture médiatique exceptionnelle.",
      image: "/realisations/inwi.png",
      additionalImages: ["/realisations/adif2023.png", "/realisations/adif2023.png", "/realisations/adif2023.png"],
      category: "Tech Exhibition",
      year: "2023",
      client: "INWI",
      location: "Dubai, UAE",
      accentColor: "#a855f7"
    },
    {
      title: "SIAM Groupe Crédit Agricole",
      description: "Présence remarquable du Crédit Agricole au Salon International de l'Agriculture",
      fullDescription: "Un pavillon d'exposition mettant en valeur l'engagement du Crédit Agricole dans le développement du secteur agricole marocain. Nous avons créé des espaces thématiques présentant les solutions de financement, avec des présentations interactives et des rencontres B2B. Le pavillon a accueilli plus de 15 000 visiteurs professionnels.",
      image: "/realisations/gca.png",
      additionalImages: ["/realisations/gca.png", "/realisations/gca.png", "/realisations/gca.png"],
      category: "Agricultural Fair",
      year: "2023",
      client: "Groupe Crédit Agricole",
      location: "Meknès, Maroc",
      accentColor: "#059669"
    },
    {
      title: "IRESEN Solar Decathlon Africa",
      description: "Pavillon solaire innovant pour la compétition Solar Decathlon Africa",
      fullDescription: "Conception d'un pavillon exemplaire combinant architecture durable et technologies solaires avancées. Nous avons développé une structure autonome en énergie, avec des matériaux éco-responsables et des systèmes intelligents. Le projet a remporté le prix de l'innovation architecturale et a été répliqué dans plusieurs universités africaines.",
      image: "/realisations/iresen.png",
      additionalImages: ["/realisations/iresen.png", "/realisations/iresen.png", "/realisations/iresen.png"],
      category: "Sustainable Energy",
      year: "2023",
      client: "IRESEN",
      location: "Ben Guerir, Maroc",
      accentColor: "#eab308"
    },
    {
      title: "Pavillon Russe Dubai",
      description: "Représentation culturelle russe prestigieuse à Dubai",
      fullDescription: "Un pavillon grandiose célébrant la culture russe contemporaine à Dubai. Nous avons conçu un espace immersif combinant architecture traditionnelle et technologies modernes, avec des espaces d'exposition, de spectacle et de gastronomie. Le pavillon a attiré plus de 200 000 visiteurs et a renforcé les liens culturels russo-émiratis.",
      image: "/realisations/russe.png",
      additionalImages: ["/realisations/russe.png", "/realisations/russe.png", "/realisations/russe.png"],
      category: "Cultural Pavilion",
      year: "2019",
      client: "Consulat de Russie",
      location: "Dubai, UAE",
      accentColor: "#dc2626"
    },
    {
      title: "FRMB World Series Boxing",
      description: "Événement international de boxe World Series organisé par la FRMB",
      fullDescription: "Organisation complète d'un événement de boxe de niveau mondial, incluant la conception de l'arène, la scénographie du spectacle et la gestion technique. Nous avons créé une expérience spectaculaire pour 12 000 spectateurs, avec des effets pyrotechniques, un éclairage professionnel et une retransmission TV internationale.",
      image: "/realisations/wbs.png",
      additionalImages: ["/realisations/wbs.png", "/realisations/wbs.png", "/realisations/wbs.png"],
      category: "Sports Event",
      year: "2015",
      client: "Fédération Royale Marocaine de Boxe",
      location: "Casablanca, Maroc",
      accentColor: "#991b1b"
    }
  ];

  // Handle click on project card
  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
    setIsDetailView(true);
  };

  return (
    <div ref={containerRef} className="bg-black min-h-screen relative">
      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <header className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-[10%] right-[5%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] opacity-20"
            >
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center relative z-10 mt-8"
            >
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative inline-block mb-8"
              >
                <div className="absolute inset-0 bg-[#d71b1b]/20 rounded-lg blur-sm transform -skew-x-12" />
                <span className="font-montserrat relative inline-block px-4 py-1.5 bg-[#d71b1b]/10 rounded-lg text-sm font-medium text-[#d71b1b] border border-[#d71b1b]/30">
                  Notre Portfolio
                </span>
              </motion.div>
              
              <h1 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                <span className="relative inline-block">
                  Des projets qui
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-[#d71b1b]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
                {" "}repoussent les limites du{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#d71b1b]">design</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[6px] bg-white/10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
                {" "}et de{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#d71b1b]">l'innovation</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[6px] bg-white/10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/70 font-montserrat text-base md:text-xl leading-relaxed max-w-2xl"
              >
                Des expériences immersives qui transforment l'espace, le temps et la perception. Chaque projet raconte une histoire unique à travers l'innovation et la créativité.
              </motion.p>
            </motion.div>
          </div>
        </header>

        {/* Portfolio Grid */}
        <section className="w-full px-4 pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <EnhancedProjectCard 
                key={index}
                project={project}
                index={index}
                onClick={() => handleProjectClick(index)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {isDetailView && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailView(false)}
              className="absolute inset-0 bg-black"
            />

            {/* Project content panel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative h-full overflow-y-auto">
                {/* Header image and close button */}
                <div className="relative h-[40vh] overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <button
                    onClick={() => setIsDetailView(false)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white z-10 hover:bg-black/60 transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={() => setIsDetailView(false)}
                    className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md text-white z-10 hover:bg-black/60 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Retour</span>
                  </button>
                </div>

                {/* Content body */}
                <div className="p-6 md:p-8 lg:p-12">
                  <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2">
                      <h3 className="font-montserrat font-semibold text-lg text-white/90 mb-4">Aperçu du projet</h3>
                      <p className="text-white/80 text-base leading-relaxed mb-6">
                        {selectedProject.fullDescription}
                      </p>
                    </div>
                    
                    <div className="bg-zinc-800/50 rounded-xl p-6">
                      <h3 className="font-montserrat font-semibold text-lg text-white/90 mb-4">Détails du projet</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-white/60 text-sm">Catégorie</h4>
                          <p className="text-white font-medium">{selectedProject.category}</p>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm">Année</h4>
                          <p className="text-white font-medium">{selectedProject.year}</p>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm">Client</h4>
                          <p className="text-white font-medium">{selectedProject.client}</p>
                        </div>
                        <div>
                          <h4 className="text-white/60 text-sm">Lieu</h4>
                          <p className="text-white font-medium">{selectedProject.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gallery */}
                  <h3 className="font-montserrat font-semibold text-xl text-white/90 mb-6">Galerie du projet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {selectedProject.additionalImages.map((img, idx) => (
                      <div key={idx} className="min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} - Image ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Project Card Component (fully clickable)
const EnhancedProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group h-[450px] rounded-xl overflow-hidden relative flex flex-col cursor-pointer"
    >
      {/* Card background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)` 
          }}
        />
      </div>
      
      {/* Content - Always visible */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
        <div className="font-montserrat transform transition-all duration-500">
          {/* Category badge - always visible */}
          <div className="inline-flex mb-4">
            <span 
              className="px-3 py-1 rounded-full text-xs text-white backdrop-blur-md"
              style={{ backgroundColor: `${project.accentColor}55` }}
            >
              {project.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="font-montserrat font-bold text-2xl text-white mb-3 tracking-tight group-hover:text-[#d71b1b] transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Description - always visible */}
          <p className="text-white/80 text-sm mb-5 line-clamp-3">
            {project.description}
          </p>
          
          {/* Action indicator */}
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white relative overflow-hidden">
            <span>Découvrir le projet</span>
            <div className="relative">
              <ArrowUpRight 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: project.accentColor }}
              />
            </div>
            <span 
              className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: project.accentColor }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

EnhancedProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    additionalImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    accentColor: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PortfolioPage;