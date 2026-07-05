'use client';

import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal } from 'lucide-react';
import CustomButton from './CustomButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  // Track scrolled state for styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // offset for nav height

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-morphism-nav shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2 group font-sans font-bold text-2xl tracking-tight"
        >
          <Terminal size={22} className="text-girly-pink group-hover:rotate-6 transition-transform duration-300" />
          <span className="text-offwhite">Aishwarya</span>
          <span className="text-girly-pink text-glow-pink">Das.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 py-1 ${
                    activeSection === item.id 
                      ? 'text-girly-pink font-semibold' 
                      : 'text-offwhite/70 hover:text-girly-pink'
                  }`}
                >
                  {item.name}
                  {/* Highlight bar */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-girly-pink to-girly-lavender shadow-pink-glow rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <CustomButton 
            href="/resume.pdf" 
            variant="primary" 
            className="text-xs py-2 px-5"
            download="Aishwarya_Das_Resume.pdf"
          >
            <Download size={14} className="mr-1 inline" />
            Resume
          </CustomButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-offwhite/90 hover:text-girly-pink transition-colors focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-darkBg-secondary border-b border-girly-lavender/10 shadow-2xl glass-morphism py-6 px-6 md:hidden transition-all duration-300">
          <ul className="flex flex-col gap-5 mb-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block font-sans text-base font-medium py-1 ${
                    activeSection === item.id 
                      ? 'text-girly-pink text-glow-pink' 
                      : 'text-offwhite/70 hover:text-girly-pink'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <CustomButton 
            href="/resume.pdf" 
            variant="primary" 
            className="w-full justify-center"
            download="Aishwarya_Das_Resume.pdf"
          >
            <Download size={16} className="mr-1 inline" />
            Download Resume
          </CustomButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
