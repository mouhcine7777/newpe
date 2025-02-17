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
      title: "Pavillon Maroc",
      description: "L'essence du Maroc contemporain dans une architecture avant-gardiste",
      fullDescription: "Pour l'exposition internationale de design, nous avons conçu un pavillon qui réinterprète les éléments architecturaux marocains traditionnels à travers un prisme futuriste. La structure modulaire en aluminium et verre s'inspire des motifs géométriques zellige, avec un système d'éclairage dynamique qui transforme l'espace au fil de la journée. Le pavillon a remporté le prix de l'innovation architecturale et a été couvert par plus de 30 publications internationales d'architecture.",
      image: "/about1.jpg",
      additionalImages: ["/about1-detail1.jpg", "/about1-detail2.jpg", "/about1-detail3.jpg"],
      category: "Exhibition Design",
      year: "2023",
      client: "ONMT",
      location: "Dubai, UAE",
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
      title: "Smart City Casablanca",
      description: "L'avenir urbain intelligent prend forme à Casablanca",
      fullDescription: "Ce projet d'urbanisme à grande échelle intègre technologie, durabilité et design centré sur l'humain pour transformer un quartier de Casablanca. Nous avons conçu des espaces publics interactifs, des systèmes de transport intelligent et des mobiliers urbains connectés, créant un écosystème urbain qui répond aux besoins changeants de ses habitants. Le projet pilote a démontré une réduction de 40% de la consommation d'énergie et une amélioration significative de la qualité de vie pour les résidents.",
      image: "/smartcity.jpg",
      additionalImages: ["/smartcity-detail1.jpg", "/smartcity-detail2.jpg", "/smartcity-detail3.jpg"],
      category: "Urban Design",
      year: "2024",
      client: "Ville de Casablanca",
      location: "Casablanca, Maroc",
      accentColor: "#2ec4b6"
    }
  ];

  // Handle click on "Découvrir" button
  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
    setIsDetailView(true);
    // Scroll to top when opening detail view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div ref={containerRef} className="bg-black min-h-screen relative">
      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <header className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
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
              className="flex flex-col items-start relative z-10"
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
              
              <h1 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-4xl">
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
                className="text-white/70 font-montserrat text-base md:text-xl max-w-2xl mb-16 leading-relaxed"
              >
                Des expériences immersives qui transforment l'espace, le temps et la perception. Chaque projet raconte une histoire unique à travers l'innovation et la créativité.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
              >
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Portfolio Grid */}
      <section className="max-w-[1400px] mx-auto px-4 pb-32">
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
                  <div 
                    className="absolute inset-0" 
                    style={{ 
                      background: `linear-gradient(to top, #000 0%, transparent 100%), linear-gradient(to right, ${selectedProject.accentColor}66, transparent)` 
                    }}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {selectedProject.additionalImages.map((img, idx) => (
                      <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden">
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

// Enhanced Project Card Component (with always visible description)
const EnhancedProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-[450px] rounded-xl overflow-hidden relative flex flex-col"
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
            background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%), linear-gradient(45deg, ${project.accentColor}66, transparent 70%)` 
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
          <h3 className="font-montserrat font-bold text-2xl text-white mb-3 tracking-tight group-hover:text-[#d71b1b]">
            {project.title}
          </h3>
          
          {/* Description - always visible */}
          <p className="text-white/80 text-sm mb-5 max-w-sm line-clamp-3">
            {project.description}
          </p>
          
          {/* Action button */}
          <button
            onClick={onClick}
            className="inline-flex items-center gap-2 text-sm font-medium text-white relative overflow-hidden group/btn"
          >
            <span>Découvrir le projet</span>
            <div className="relative">
              <ArrowUpRight 
                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                style={{ color: project.accentColor }}
              />
            </div>
            <span 
              className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover/btn:w-full"
              style={{ backgroundColor: project.accentColor }}
            />
          </button>
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