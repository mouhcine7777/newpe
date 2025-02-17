"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ACCEUIL', href: '/' },
    { name: 'À PROPOS', href: '/apropos' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-black/95 backdrop-blur-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/logope.png"
              alt="Public Events Logo"
              width={120}
              height={45}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-8' : 'h-10'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 font-montserrat hover:text-[#D71B1B] text-sm font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D71B1B] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="tel:+33123456789"
              className="flex items-center gap-2 bg-[#D71B1B] text-white px-4 py-2 rounded-full hover:bg-[#FF4B4B] transition-colors duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-montserrat">+212 1 23 45 67 89</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 text-white hover:text-[#D71B1B] transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-lg font-montserrat text-white/90 hover:text-[#D71B1B] transition-colors duration-300 group"
              >
                {item.name}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ))}
          </nav>
          
          {/* Mobile Contact */}
          <div className="mt-auto mb-8">
            <a
              href="tel:+33123456789"
              className="flex items-center font-montserrat justify-center gap-2 bg-[#D71B1B] text-white p-3 rounded-full hover:bg-[#FF4B4B] transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>+212 1 23 45 67 89</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;