'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Laptop, Brain, Puzzle, Lightbulb, GraduationCap, Compass, Target } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
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
    }
  };

  // Background twinkling stars configuration
  const sparkles = [
    { top: '15%', left: '12%', size: 4, delay: '0s' },
    { top: '22%', left: '85%', size: 5, delay: '1.5s' },
    { top: '75%', left: '10%', size: 4, delay: '2.5s' },
    { top: '80%', left: '50%', size: 5, delay: '0.8s' },
    { top: '45%', left: '90%', size: 4, delay: '3.2s' },
  ];

  // Falling cherry blossom petals configuration
  const petals = [
    { left: '8%', size: 8, delay: '0s', duration: '14s' },
    { left: '28%', size: 10, delay: '4s', duration: '16s' },
    { left: '60%', size: 7, delay: '2s', duration: '12s' },
    { left: '82%', size: 9, delay: '6s', duration: '19s' },
  ];

  return (
    <section 
      id="hero" 
      className={`relative min-h-screen w-full flex flex-col justify-between items-center pt-32 pb-8 px-6 overflow-hidden bg-black transition-opacity duration-1000 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Awwwards-style grain overlay covering the entire viewport */}
      <div className="absolute inset-0 bg-grain pointer-events-none z-20" />

      {/* Ambient color gradient backdrops (Subdued to preserve matte jet black) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] rounded-full bg-gradient-to-tr from-girly-pink/5 to-girly-lavender/5 blur-[150px]" />
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-girly-pink/5 blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-girly-lavender/5 blur-[150px] animate-pulse-slow" />
      </div>

      {/* Atmospheric Twinkling Stars & Drifting Petals */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {sparkles.map((star, idx) => (
          <div 
            key={idx}
            className="absolute rounded-full bg-offwhite/60 animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              boxShadow: '0 0 6px 1px rgba(235, 231, 245, 0.3)'
            }}
          />
        ))}

        {petals.map((petal, idx) => (
          <div 
            key={idx}
            className="absolute rounded-full bg-girly-pink/15"
            style={{
              left: petal.left,
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              top: '-20px',
              animation: `drift-sakura ${petal.duration} linear infinite`,
              animationDelay: petal.delay,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* 
        Background Layer: Huge Bold Text "AISHWARYA" 
        Positioned behind the portrait to create depth (z-0)
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
        <h1 className="text-[13vw] sm:text-[14vw] md:text-[15vw] xl:text-[16vw] font-black uppercase tracking-tighter leading-none bg-text-gradient opacity-[0.85] text-center w-full">
          Aishwarya
        </h1>
      </div>

      {/* 
        Foreground Layer: Centered portrait illustration (z-10) 
        and overlapping floating glassmorphism cards
      */}
      <div className="relative flex-grow flex items-center justify-center z-10 w-full max-w-2xl mt-8">
        
        {/* Soft aura glow behind illustration */}
        <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-girly-pink/20 to-girly-lavender/25 blur-[65px] pointer-events-none" />

        {/* The portrait box (Scaled down on mobile to prevent overflow) */}
        <div className="relative w-64 h-[300px] sm:w-[420px] sm:h-[500px] md:w-[480px] md:h-[580px] lg:w-[520px] lg:h-[630px] z-10">
          <img 
            src="/illustration.png" 
            alt="Aishwarya Das" 
            className="w-full h-full object-contain mask-portrait"
          />
        </div>

        {/* FLOATING GLASS CARDS (Positioned around the centered illustration card) */}

        {/* Card 1: Problem Solver */}
        <div className="absolute top-4 left-0 sm:-left-20 md:-left-32 animate-float-b1">
          <div className="glass-morphism-premium px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-2.5 border border-girly-lavender/20 shadow-lavender-glow"
               style={{boxShadow: '0 4px 24px rgba(242,212,146,0.18), inset 0 1px 0 rgba(255,255,255,0.08)'}}>
            <Puzzle size={16} className="text-girly-lavender shrink-0 sm:w-[18px] sm:h-[18px]" />
            <span className="text-[10px] sm:text-sm font-semibold text-offwhite/95 font-sans tracking-wide whitespace-nowrap">Problem Solver</span>
          </div>
        </div>

        {/* Card 2: Full-Stack Developer */}
        <div className="absolute top-12 right-0 sm:-right-22 md:-right-34 animate-float-b2">
          <div className="glass-morphism-premium px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-2.5 border border-girly-pink/20 shadow-pink-glow"
               style={{boxShadow: '0 4px 24px rgba(224,169,109,0.18), inset 0 1px 0 rgba(255,255,255,0.08)'}}>
            <Laptop size={16} className="text-girly-pink shrink-0 sm:w-[18px] sm:h-[18px]" />
            <span className="text-[10px] sm:text-sm font-semibold text-offwhite/95 font-sans tracking-wide whitespace-nowrap">Full-Stack Developer</span>
          </div>
        </div>

        {/* Card 3: Creative Thinker */}
        <div className="absolute top-[33%] -left-2 sm:-left-24 md:-left-36 animate-float-b3">
          <div className="glass-morphism-premium px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-2.5 border border-girly-pink/20 shadow-pink-glow"
               style={{boxShadow: '0 4px 24px rgba(224,169,109,0.18), inset 0 1px 0 rgba(255,255,255,0.08)'}}>
            <Lightbulb size={16} className="text-girly-pink shrink-0 sm:w-[18px] sm:h-[18px]" />
            <span className="text-[10px] sm:text-sm font-semibold text-offwhite/95 font-sans tracking-wide whitespace-nowrap">Creative Thinker</span>
          </div>
        </div>

        {/* Card 4: Continuous Learner */}
        <div className="absolute top-[50%] -right-2 sm:-right-24 md:-right-36 animate-float-b1">
          <div className="glass-morphism-premium px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-2.5 border border-girly-lavender/20 shadow-lavender-glow"
               style={{boxShadow: '0 4px 24px rgba(242,212,146,0.18), inset 0 1px 0 rgba(255,255,255,0.08)'}}>
            <GraduationCap size={16} className="text-girly-lavender shrink-0 sm:w-[18px] sm:h-[18px]" />
            <span className="text-[10px] sm:text-sm font-semibold text-offwhite/95 font-sans tracking-wide whitespace-nowrap">Continuous Learner</span>
          </div>
        </div>

        {/* Card 5: Innovator */}
        <div className="absolute bottom-24 left-0 sm:-left-22 md:-left-34 animate-float-b2">
          <div className="glass-morphism-premium px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-2.5 border border-girly-lavender/20 shadow-lavender-glow"
               style={{boxShadow: '0 4px 24px rgba(242,212,146,0.18), inset 0 1px 0 rgba(255,255,255,0.08)'}}>
            <Compass size={16} className="text-girly-lavender shrink-0 sm:w-[18px] sm:h-[18px]" />
            <span className="text-[10px] sm:text-sm font-semibold text-offwhite/95 font-sans tracking-wide whitespace-nowrap">Innovator</span>
          </div>
        </div>

        {/* Card 6: Detail-Oriented */}
        <div className="absolute bottom-12 right-0 sm:bottom-8 sm:-right-20 md:-right-32 animate-float-b3">
          <div className="glass-morphism-premium px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 sm:gap-2.5 border border-girly-pink/20 shadow-pink-glow"
               style={{boxShadow: '0 4px 24px rgba(224,169,109,0.18), inset 0 1px 0 rgba(255,255,255,0.08)'}}>
            <Target size={16} className="text-girly-pink shrink-0 sm:w-[18px] sm:h-[18px]" />
            <span className="text-[10px] sm:text-sm font-semibold text-offwhite/95 font-sans tracking-wide whitespace-nowrap">Detail-Oriented</span>
          </div>
        </div>

        {/* Card 7: Currently @ PAROT */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-bottom-4 sm:-left-4 md:-left-10 animate-float-b1 z-20">
          <a
            href="https://parot.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-morphism-premium px-4 py-2.5 rounded-full flex items-center gap-2.5 border border-girly-lavender/30 shadow-lavender-glow hover:border-girly-pink/50 hover:shadow-pink-glow transition-all duration-300 group cursor-pointer"
            style={{boxShadow: '0 4px 24px rgba(242,212,146,0.25), inset 0 1px 0 rgba(255,255,255,0.10)'}}
          >
            {/* Pulsing green dot = online/active */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-offwhite/90 font-sans tracking-wide whitespace-nowrap">
              Currently @{' '}
              <span className="text-girly-lavender group-hover:text-girly-pink transition-colors duration-200">PAROT</span>
            </span>
          </a>
        </div>

      </div>

      {/* 
        Bottom Layout Layer: split details and actions (z-20) 
      */}
      <div className="w-full max-w-7xl mx-auto z-10">
        
        {/* Horizontal dividing line */}
        <div className="w-full h-[1px] bg-offwhite/10 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          
          {/* Bottom Left: Bio & Call to Actions */}
          <div className="md:col-span-6 text-left space-y-3.5">
            <p className="text-offwhite/85 text-xs sm:text-sm font-light leading-relaxed max-w-md">
              Hello, I'm Aishwarya Das, a <strong className="font-semibold text-girly-pink">Full Stack Developer</strong> and AI Enthusiast based in India — currently working at{' '}
              <a href="https://parot.dev/" target="_blank" rel="noopener noreferrer" className="font-semibold text-girly-lavender hover:text-girly-pink transition-colors duration-200 underline underline-offset-2 decoration-girly-lavender/40">PAROT</a>.
              {' '}I build elegant, scalable, and intelligent digital experiences that blend creativity with technology.
            </p>
            
            {/* Call to Actions (Minimal links matching editorial theme) */}
            <div className="flex items-center gap-5 pt-1">
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, 'projects')} 
                className="text-xs font-bold text-girly-pink hover:text-girly-lavender transition-all flex items-center gap-1 cursor-pointer group"
              >
                View Projects 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              
              <a 
                href="/resume.pdf" 
                download="Aishwarya_Das_Resume.pdf" 
                className="text-xs font-bold text-offwhite/60 hover:text-offwhite transition-all flex items-center gap-1 cursor-pointer group"
              >
                Download Resume 
                <span className="group-hover:translate-y-0.5 transition-transform">&darr;</span>
              </a>
            </div>
          </div>

          {/* Bottom Right: Slogan Detail */}
          <div className="md:col-span-6 md:text-right text-left">
            <p className="text-offwhite/60 text-xs sm:text-sm font-light leading-relaxed max-w-sm md:ml-auto">
              Passionate about crafting beautiful user interfaces, solving real-world problems, and developing impactful AI-powered applications.
            </p>
          </div>

        </div>

        {/* Footer Notes (Copyright & Scroll indicator) */}
        <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-offwhite/30 uppercase tracking-widest pt-8 mt-6 border-t border-offwhite/5">
          <span>© Aishwarya Das {new Date().getFullYear()}</span>
          <a 
            href="#about" 
            onClick={(e) => handleScrollTo(e, 'about')}
            className="hover:text-girly-pink transition-colors duration-300 flex items-center gap-1 cursor-pointer"
          >
            (Scroll down)
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;
