// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-pe.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-[#D71B1B]/30 z-10" />

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-6">
        {/* Logo with red glow effect */}
        <div className="w-48 md:w-64 mb-12 relative">
          <div className="absolute inset-0 blur-md bg-[#D71B1B]/20 animate-pulse" />

        </div>

        {/* Hero Text with Creative Layout */}
        <div className="space-y-6 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl text-white font-bold mb-2">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">AGENCE DE</span>
            <br />
            <span className="inline-block text-[#D71B1B] transform hover:scale-105 transition-transform duration-300 delay-100">COMMUNICATION</span>
            <br />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-200">ÉVÈNEMENTIELLE</span>
          </h1>

          {/* Red line separator */}
          <div className="w-24 h-1 bg-[#D71B1B] mx-auto transform hover:scale-150 transition-transform duration-300" />

          {/* Subheading with gradient text */}
          <p className="font-inter text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 max-w-2xl mx-auto leading-relaxed">
            Créons ensemble des expériences mémorables qui dépassent vos attentes
          </p>
        </div>

        {/* CTA Button with creative hover effect - Fixed Link implementation */}
        <div className="mt-12 relative group">
          <div className="absolute inset-0 bg-[#D71B1B] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          <Link 
            href="/services"
            className="inline-block relative font-inter bg-white text-black px-8 py-3 rounded-full text-lg font-semibold 
                       hover:bg-[#D71B1B] hover:text-white transition-all duration-300 transform hover:scale-105
                       border-2 border-transparent hover:border-white"
          >
            Découvrir nos services
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-3 bg-white rounded-full mx-auto animate-ping" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;