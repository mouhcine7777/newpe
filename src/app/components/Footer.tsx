import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D71B1B]/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logope.png"
              alt="Public Events Logo"
              width={120}
              height={45}
              className="w-auto h-auto"
            />
            <p className="text-white/70 font-montserrat text-sm max-w-xs text-center md:text-left">
              Créateur d'expériences événementielles depuis 2002
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center font-montserrat md:justify-end gap-x-8 gap-y-3">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors duration-300 text-sm relative group"
              aria-label="Go to Home page"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D71B1B] group-hover:w-full transition-all duration-300" />
            </Link>
            {['À Propos', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'À Propos' ? '/apropos' : `/${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm relative group"
                aria-label={`Go to ${item} page`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D71B1B] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
              { Icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
              { Icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
            ].map(({ Icon, url, label }, index) => (
              <Link
                key={index}
                href={url}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group hover:border-[#D71B1B] transition-colors duration-300"
                aria-label={`Visit our ${label} page`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4 text-white/70 group-hover:text-[#D71B1B] transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 font-montserrat text-sm">
            © {currentYear} Public Events. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal" className="text-white/50 font-montserrat hover:text-white text-sm transition-colors duration-300" aria-label="Go to Legal Mentions page">
              Mentions Légales
            </Link>
            <Link href="/privacy" className="text-white/50 font-montserrat hover:text-white text-sm transition-colors duration-300" aria-label="Go to Privacy Policy page">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;