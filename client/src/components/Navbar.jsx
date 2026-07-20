'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code2, GraduationCap, Award, Mail, Menu, X, Trophy } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'certifications', name: 'Certs', icon: Award },
    { id: 'hackathons', name: 'Hackathons', icon: Trophy },
    { id: 'works', name: 'Works', icon: Award },
    { id: 'projects', name: 'Projects', icon: Briefcase },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];

  // Track scroll position to update active nav state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      const scrollPosition = window.scrollY + 200; // offset for nav height

      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (id === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveSection('hero');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      {/* 
        Floating Capsule Navbar: 
        Minimal, centered black pill with white active tab matching reference. 
      */}
      <nav className="pointer-events-auto bg-[#0d0914]/90 border border-offwhite/10 rounded-full px-2.5 py-1.5 flex flex-col md:flex-row items-center gap-1 shadow-2xl backdrop-blur-md max-w-fit">
        
        {/* Mobile Navbar Header Row */}
        <div className="w-full md:w-auto flex items-center justify-between px-3 md:hidden">
          <span className="text-xs font-semibold uppercase tracking-widest text-offwhite/75 mr-8">Aishwarya Das</span>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-white/5 border border-girly-pink/20 hover:border-girly-pink/60 hover:shadow-pink-glow/30 text-offwhite transition-all duration-300 focus:outline-none cursor-pointer group flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
              <span className={`w-full h-0.5 bg-gradient-to-r from-girly-pink to-girly-lavender rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                isOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`} />
              <span className={`w-full h-0.5 bg-offwhite/90 rounded-full transition-all duration-200 ease-in-out ${
                isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`} />
              <span className={`w-full h-0.5 bg-gradient-to-r from-girly-lavender to-girly-pink rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                isOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Navigation Items Links */}
        <div className={`${
          isOpen ? 'flex flex-col mt-2.5 border-t border-offwhite/5 pt-2 w-48' : 'hidden'
        } md:flex md:flex-row md:items-center md:gap-1.5 md:mt-0 md:border-t-0 md:pt-0 md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-1 w-full">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id} className="w-full md:w-auto">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-center md:justify-start gap-1.5 font-sans text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-offwhite text-darkBg-primary font-bold shadow-md scale-105' 
                        : 'text-offwhite/70 hover:text-offwhite hover:bg-white/5'
                    }`}
                  >
                    {isActive && <IconComponent size={13} className="stroke-[2.5px]" />}
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
