'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, Cpu, Smartphone, Cloud, BookOpen, Terminal, Calendar, Award as BadgeIcon } from 'lucide-react';

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  badge: string;
  description: string;
  image: string;
}

interface CircularCertificatesProps {
  certificates: Certificate[];
}

// Map index to respective icon for visual diversity
const getIcon = (index: number) => {
  const icons = [Award, BookOpen, Shield, Smartphone, Cpu, Terminal, Cloud];
  return icons[index % icons.length];
};

export const CircularCertificates: React.FC<CircularCertificatesProps> = ({ certificates }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Auto-rotation effect
  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== null) {
        // Only rotate if not hovering over the entire orbit
        if (!isHovered) {
          const deltaTime = time - previousTimeRef.current;
          // ~10 degrees per second (adjusted speed)
          setRotation((prev) => (prev + (deltaTime * 0.012)) % 360);
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered]);

  const activeCert = certificates[activeIndex];

  // Dynamic radius adjustments based on viewport width
  const [radius, setRadius] = useState(160);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(110); // Mobile
      } else if (window.innerWidth < 1024) {
        setRadius(140); // Tablet
      } else {
        setRadius(170); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-8 w-full max-w-6xl mx-auto">
      
      {/* LEFT COLUMN: The Orbit Showcase */}
      <div 
        className="relative flex items-center justify-center select-none"
        style={{ width: radius * 2.8, height: radius * 2.8 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          previousTimeRef.current = null; // Prevent jump in delta time
        }}
      >
        {/* Ambient Glowing Golden Background */}
        <div className="absolute w-72 h-72 rounded-full bg-[#F5C542]/5 blur-3xl pointer-events-none" />

        {/* Orbit Ring */}
        <div 
          className="absolute rounded-full border border-white/5 pointer-events-none"
          style={{ 
            width: radius * 2, 
            height: radius * 2,
            boxShadow: 'inset 0 0 20px rgba(245, 197, 66, 0.03), 0 0 20px rgba(255, 255, 255, 0.01)'
          }}
        />

        {/* Center Logo/Orbit Core */}
        <motion.div 
          className="absolute z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center bg-[#09090B]/90 border border-white/10 shadow-[0_0_30px_rgba(245,197,66,0.1)] backdrop-blur-md"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-3xl mb-1 filter drop-shadow-[0_2px_8px_rgba(245,197,66,0.4)]">🏆</span>
          <span className="text-[10px] font-bold tracking-widest text-[#F5C542] uppercase">Certificates</span>
        </motion.div>

        {/* Floating Certificates Orbiting Nodes */}
        {certificates.map((cert, index) => {
          const IconComponent = getIcon(index);
          // Angle calculation distributed evenly on circle + current rotation angle
          const angleRad = ((index * (360 / certificates.length) + rotation) * Math.PI) / 180;
          
          // Node Coordinates
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);
          const isActive = index === activeIndex;

          return (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`absolute z-20 flex items-center justify-center rounded-full transition-all duration-300 ${
                isActive 
                  ? 'w-16 h-16 bg-[#09090B] border-2 border-[#F5C542] text-[#F5C542] shadow-[0_0_25px_rgba(245,197,66,0.45)] scale-110' 
                  : 'w-12 h-12 bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20'
              } backdrop-blur-md cursor-pointer`}
              style={{
                x,
                y,
                // Align nodes straight regardless of rotation
                rotate: 0, 
              }}
              whileHover={{ 
                scale: isActive ? 1.15 : 1.1,
                boxShadow: isActive 
                  ? '0 0 30px rgba(245, 197, 66, 0.6)' 
                  : '0 0 20px rgba(255, 255, 255, 0.15)'
              }}
              layout
            >
              {/* Floating inner visual cue */}
              <motion.div
                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <IconComponent size={isActive ? 24 : 18} />
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {/* RIGHT COLUMN: Details Card with AnimatePresence */}
      <div className="flex-grow w-full max-w-lg lg:max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:scale-[1.01] hover:border-[#F5C542]/30 hover:shadow-[0_0_40px_rgba(245,197,66,0.12)] transition-all duration-500"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#F5C542]/5 blur-3xl group-hover:bg-[#F5C542]/10 transition-colors duration-500 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              
              {/* Badge + Year Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium">
                  <Calendar size={12} className="text-[#F5C542]" />
                  {activeCert.year}
                </span>

                {activeCert.badge && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 text-[#F5C542] text-[10px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(245,197,66,0.1)]">
                    <BadgeIcon size={10} />
                    {activeCert.badge}
                  </span>
                )}
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-[#F5C542] transition-colors duration-300 mb-2">
                  {activeCert.title}
                </h3>
                <p className="text-sm font-semibold text-white/70">
                  {activeCert.issuer}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {activeCert.description}
              </p>

              {/* Action Button/View Mockup */}
              <div className="pt-2 flex items-center gap-4">
                <div className="h-px bg-white/10 flex-grow" />
                <span className="text-[11px] font-bold tracking-widest text-[#F5C542]/70 group-hover:text-[#F5C542] transition-colors uppercase">
                  Credential Details
                </span>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};
