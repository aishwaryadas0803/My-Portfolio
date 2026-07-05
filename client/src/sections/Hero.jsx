'use client';

import React from 'react';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import CustomButton from '../components/CustomButton';

const Hero = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background blur orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-girly-pink/15 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-girly-lavender/15 blur-[120px] animate-pulse-slow pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio Details */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Subtle top badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum-muted/60 border border-girly-pink/20 text-girly-pink text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles size={12} className="animate-spin text-girly-pink" />
              <span>B.Tech CSE Student (2023 - 2027)</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight font-sans leading-tight">
              <span className="text-offwhite block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-girly-pink via-girly-lavender to-girly-pink bg-clip-text text-transparent text-glow-pink">
                Aishwarya Das
              </span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-lg md:text-2xl text-offwhite/85 font-medium tracking-wide leading-relaxed">
              CSE Student & Full-Stack Developer
            </h2>

            {/* Bio Blurb */}
            <p className="text-offwhite/65 text-sm md:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Building responsive MERN applications, QR-based asset logs, and PID-controlled hardware systems. 
              Infusing deep computer science fundamentals with an elegant, modern visual identity.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <CustomButton 
                onClick={(e) => handleScrollTo(e, 'projects')}
                variant="primary"
                className="w-full sm:w-auto text-sm py-2.5 px-6"
              >
                Explore Projects
                <ArrowRight size={16} />
              </CustomButton>

              <CustomButton 
                onClick={(e) => handleScrollTo(e, 'contact')}
                variant="secondary"
                className="w-full sm:w-auto text-sm py-2.5 px-6"
              >
                Get In Touch
              </CustomButton>
            </div>

            {/* Technical Terminal Widget */}
            <div className="max-w-md mx-auto lg:mx-0 p-4 rounded-xl bg-plum-muted/30 border border-girly-lavender/10 backdrop-blur-md text-left text-xs font-mono text-offwhite/50 glass-morphism pt-3">
              <div className="flex items-center justify-between border-b border-girly-lavender/10 pb-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-girly-pink/60" />
                  <span className="w-2 h-2 rounded-full bg-girly-lavender/60" />
                  <span className="w-2 h-2 rounded-full bg-offwhite/20" />
                </div>
                <span className="text-[9px]">AishwaryaTerminal v1.2.0</span>
              </div>
              <div className="space-y-1">
                <p className="text-girly-lavender flex items-center gap-1">
                  <span className="text-girly-pink">&gt;</span> const dev = new Student("Aishwarya");
                </p>
                <p className="text-offwhite/60">
                  <span className="text-girly-pink">&gt;</span> dev.college = "JIS College of Engineering";
                </p>
                <p className="text-offwhite/60">
                  <span className="text-girly-pink">&gt;</span> dev.cgpa = 8.62;
                </p>
                <p className="text-girly-pink flex items-center gap-1">
                  <span className="text-girly-pink">&gt;</span> dev.openForInternships = true;
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-girly-pink to-girly-lavender rounded-full blur opacity-35 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              {/* Image Container Frame (Circular & Large) */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border border-girly-pink/20 group-hover:border-girly-pink/50 transition-colors duration-500 bg-plum-muted glass-morphism">
                
                {/* Background ambient lighting behind image */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg-primary/80 via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-girly-pink/10 to-girly-lavender/10 group-hover:scale-105 transition-transform duration-500" />
                
                {/* Actual image */}
                <img 
                  src="/profile.jpg" 
                  alt="Aishwarya Das" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                
                {/* Floating badge centered at the bottom of the circle */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-darkBg-primary/95 border border-girly-lavender/30 backdrop-blur-sm text-[9px] font-mono text-girly-pink font-semibold shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Actively Coding</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating background decorative icons */}
      <div className="hidden xl:block absolute top-1/4 left-8 text-girly-lavender/20 pointer-events-none animate-float">
        <Code2 size={60} />
      </div>
      <div className="hidden xl:block absolute bottom-1/4 right-8 text-girly-pink/15 pointer-events-none animate-float" style={{ animationDelay: '3s' }}>
        <Terminal size={70} />
      </div>
    </section>
  );
};

export default Hero;
