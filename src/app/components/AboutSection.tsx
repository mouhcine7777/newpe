// components/AboutSection.tsx
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stack vertically on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery - Full width on mobile */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="grid grid-cols-6 sm:grid-cols-3 gap-3 sm:gap-4 relative">
              {/* Large Image - Spans 4 columns on mobile, 2 on desktop */}
              <div className="col-span-6 sm:col-span-2 sm:row-span-2 relative">
                <div className="relative h-[300px] xs:h-[400px] sm:h-[500px] overflow-hidden rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/about3.jpg"
                    alt="Public Events Main"
                    width={800}
                    height={1000}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Side Images - Stack on mobile, side by side on desktop */}
              <div className="col-span-3 sm:col-span-1">
                <div className="relative h-[200px] xs:h-[240px] overflow-hidden rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/about1.jpg"
                    alt="Event Highlight 1"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[#D71B1B]/20 mix-blend-overlay" />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-1">
                <div className="relative h-[200px] xs:h-[240px] overflow-hidden rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/about2.webp"
                    alt="Event Highlight 2"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[#D71B1B]/20 mix-blend-overlay" />
                </div>
              </div>

              {/* Stats Card - Adjusted positioning for mobile */}
              <div className="col-span-6 sm:col-span-3 lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2 
                            bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 
                            mt-4 lg:mt-0 lg:w-auto w-full sm:w-auto">
                <div className="text-[#D71B1B] font-montserrat font-bold text-4xl sm:text-5xl mb-1 sm:mb-2 text-center lg:text-left">
                  21+
                </div>
                <div className="text-white/80 text-sm text-center lg:text-left">
                  années d'expérience
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Full width on mobile */}
          <div className="w-full lg:w-1/2 text-white">
            {/* Responsive title */}
            <div className="relative mb-8 sm:mb-12">
              <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Créateurs
                <span className="relative inline-block mx-2 sm:mx-3">
                  <span className="relative z-10 text-[#D71B1B]">d'émotions</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D71B1B]/20" viewBox="0 0 100 10">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                depuis 2002
              </h2>
            </div>

            {/* Content with adjusted spacing */}
            <div className="space-y-6 sm:space-y-8 relative">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#D71B1B] via-[#D71B1B]/50 to-transparent" />
              
              <p className="pl-4 sm:pl-6 font-inter text-base sm:text-lg text-white/90">
                Depuis plus de 15 ans, nous accompagnons nos clients en élaborant des{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold">concepts de communication innovants</span>
                  <span className="absolute bottom-0 left-0 w-full h-[30%] bg-[#D71B1B]/10" />
                </span>{" "}
                ou en mettant en place des{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold">dispositifs opérationnels performants</span>
                  <span className="absolute bottom-0 left-0 w-full h-[30%] bg-[#D71B1B]/10" />
                </span>{" "}
                entre marques, consommateurs, et distributeurs.
              </p>

              <p className="pl-4 sm:pl-6 font-inter text-base sm:text-lg text-white/90">
                Quels que soient votre secteur d'activité, la problématique ou l'importance du budget, 
                nous mettons en oeuvre{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold">notre expertise technique, notre créativité et notre capacité à anticiper les tendances</span>
                  <span className="absolute bottom-0 left-0 w-full h-[30%] bg-[#D71B1B]/10" />
                </span>{" "}
                au profit de votre marque.
              </p>

              {/* Final statement with adjusted padding */}
              <div className="mt-8 sm:mt-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D71B1B]/10 to-transparent rounded-lg" />
                <p className="relative p-4 sm:p-8 font-montserrat text-xl sm:text-2xl font-medium">
                  Avec Public Events, déployez des expériences marquantes qui vous connectent à votre audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;