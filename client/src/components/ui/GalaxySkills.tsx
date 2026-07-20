'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layers, Cpu, Database, Wrench, Sparkles } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  experience: string;
  icon: string; // Lucide or raw character
  color: string;
}

const galaxySkills: { [key: string]: TechItem[] } = {
  languages: [
    { name: "Java", category: "Languages", experience: "Advanced (NPTEL Gold Medal)", icon: "☕", color: "#F89820" },
    { name: "Python", category: "Languages", experience: "AI & ML Frameworks", icon: "🐍", color: "#3776AB" },
    { name: "C++", category: "Languages", experience: "Algorithms & DS", icon: "➕", color: "#00599C" },
    { name: "JavaScript", category: "Languages", experience: "Interactive Web Apps", icon: "JS", color: "#F7DF1E" },
    { name: "TypeScript", category: "Languages", experience: "Type-safe Engineering", icon: "TS", color: "#3178C6" }
  ],
  frontend: [
    { name: "React.js", category: "Frontend", experience: "2+ Years (Dynamic SPAs)", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", category: "Frontend", experience: "1.5+ Years (SSR & App Router)", icon: "N", color: "#FFFFFF" },
    { name: "Tailwind CSS", category: "Frontend", experience: "2+ Years (Responsive layouts)", icon: "🎨", color: "#06B6D4" }
  ],
  backend: [
    { name: "Node.js", category: "Backend", experience: "2+ Years (Runtime engines)", icon: "🟢", color: "#339933" },
    { name: "Express.js", category: "Backend", experience: "2+ Years (RESTful APIs)", icon: "EX", color: "#FFFFFF" }
  ],
  database: [
    { name: "MongoDB", category: "Database", experience: "1.5+ Years (NoSQL Document Store)", icon: "🍃", color: "#47A248" },
    { name: "MySQL", category: "Database", experience: "2+ Years (Relational Databases)", icon: "🐬", color: "#4479A1" }
  ],
  tools: [
    { name: "Git", category: "Tools", experience: "Version control workflows", icon: "🌿", color: "#F05032" },
    { name: "GitHub", category: "Tools", experience: "Collaboration & Actions", icon: "🐙", color: "#FFFFFF" },
    { name: "VS Code", category: "Tools", experience: "Daily IDE customization", icon: "💻", color: "#007ACC" },
    { name: "Arduino IDE", category: "Tools", experience: "IoT & ESP32 Robotics", icon: "🤖", color: "#00979D" },
    { name: "Ubuntu/Linux", category: "Tools", experience: "Server deployment & Bash", icon: "🐧", color: "#E95420" }
  ]
};

// Orbit rings specifications
const ringSpecs = [
  { key: "languages", radius: 95, speed: 0.12, label: "Languages", icon: Code2 },
  { key: "frontend", radius: 145, speed: -0.09, label: "Frontend", icon: Layers },
  { key: "backend", radius: 195, speed: 0.07, label: "Backend", icon: Cpu },
  { key: "database", radius: 245, speed: -0.05, label: "Database", icon: Database },
  { key: "tools", radius: 295, speed: 0.04, label: "Tools", icon: Wrench }
];

export const GalaxySkills: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
  const [orbitRotation, setOrbitRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const previousTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);

  // Background stars generator
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: number }[]>([]);
  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5
    }));
    setStars(generatedStars);
  }, []);

  // Continuous animation frame loop
  useEffect(() => {
    const tick = (time: number) => {
      if (previousTimeRef.current !== null && !isPaused) {
        const delta = time - previousTimeRef.current;
        // Increment global angle factor
        setOrbitRotation((prev) => (prev + delta * 0.015) % 360);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPaused]);

  // Handle scaling on responsive
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setScale(0.5);
      } else if (window.innerWidth < 768) {
        setScale(0.65);
      } else if (window.innerWidth < 1024) {
        setScale(0.85);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-[650px] md:h-[750px] bg-[#09090B] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center select-none shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      
      {/* 1. COSMIC BACKGROUND SYSTEM */}
      
      {/* Deep Space Nebula Gradients */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-[#E0A96D]/3 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-[#F5C542]/4 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F5C542]/2 blur-[150px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Shimmering Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            opacity: 0.3
          }}
        />
      ))}

      {/* Shooting Stars */}
      <div className="absolute top-12 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[-100px] w-[120px] h-[1px] bg-gradient-to-r from-transparent via-[#F5C542]/50 to-transparent rotate-[30deg] animate-float" style={{ animationDuration: '8s' }} />
        <div className="absolute top-2/3 right-[-100px] w-[160px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[-25deg] animate-float" style={{ animationDuration: '11s', animationDelay: '3s' }} />
      </div>

      {/* 2. THE 3D ORBIT SYSTEM STAGE */}
      <div 
        className="relative flex items-center justify-center transition-transform duration-500"
        style={{ transform: `scale(${scale})` }}
      >
        
        {/* CENTER CORE: Developer Avatar */}
        <motion.div 
          className="absolute z-40 w-24 h-24 rounded-full flex items-center justify-center p-[3px] bg-gradient-to-br from-[#F5C542] via-white/10 to-[#E0A96D] shadow-[0_0_50px_rgba(245,197,66,0.3)]"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-[#09090B] flex flex-col items-center justify-center overflow-hidden border border-white/5 relative group">
            {/* Cutout Image of the user */}
            <img 
              src="/illustration.png?v=2" 
              alt="Developer Avatar" 
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback to stylized text icon
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-[#09090B]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Sparkles size={16} className="text-[#F5C542]" />
            </div>
          </div>
        </motion.div>

        {/* Orbit Rings Render */}
        {ringSpecs.map((spec) => {
          const items = galaxySkills[spec.key];
          
          return (
            <div 
              key={spec.key}
              className="absolute pointer-events-none"
              style={{
                width: spec.radius * 2,
                height: spec.radius * 2,
              }}
            >
              {/* The Orbit Track Ring */}
              <div 
                className="absolute inset-0 rounded-full border border-white/[0.04] flex items-center justify-center"
                style={{
                  boxShadow: 'inset 0 0 15px rgba(255,255,255,0.01)'
                }}
              />

              {/* Orbit Ring Label (Hidden on small viewports, visible on hover rings) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] tracking-widest uppercase text-white/15 font-semibold">
                {spec.label}
              </div>

              {/* Orbiting Tech Items */}
              {items.map((item, index) => {
                // Angle distribution around this circle
                const baseAngle = index * (360 / items.length);
                const currentAngle = (baseAngle + orbitRotation * (spec.speed > 0 ? 1 : -1)) * (Math.PI / 180);
                
                // Trignometrical location calculations
                const x = spec.radius * Math.cos(currentAngle);
                const y = spec.radius * Math.sin(currentAngle);

                return (
                  <div
                    key={item.name}
                    className="absolute z-30 pointer-events-auto"
                    style={{
                      left: `calc(50% + ${(x - 20).toFixed(2)}px)`,
                      top: `calc(50% + ${(y - 20).toFixed(2)}px)`,
                    }}
                  >
                    <button
                      onMouseEnter={() => {
                        setHoveredTech(item);
                        setIsPaused(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredTech(null);
                        setIsPaused(false);
                      }}
                      className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] hover:border-[#F5C542]/40 shadow-lg backdrop-blur-xl flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95"
                      style={{
                        boxShadow: hoveredTech?.name === item.name 
                          ? `0 0 25px ${item.color}44` 
                          : 'none'
                      }}
                    >
                      <span 
                        className="text-xs font-bold" 
                        style={{ color: item.color || '#E3E3E6' }}
                      >
                        {item.icon}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* 3. TOOLTIP OVERLAY (Apple Vision Pro HUD style) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-sm px-6 z-50 pointer-events-none">
        <AnimatePresence mode="wait">
          {hoveredTech ? (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(245,197,66,0.15)] flex flex-col items-center text-center relative overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 w-full h-[2px]" 
                style={{ backgroundColor: hoveredTech.color || '#F5C542' }}
              />
              
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#F5C542] mb-1">
                {hoveredTech.category}
              </span>
              <h4 className="text-base font-black text-white mb-0.5">
                {hoveredTech.name}
              </h4>
              <p className="text-xs text-white/70 font-light">
                {hoveredTech.experience}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="w-full text-center py-2"
            >
              <p className="text-xs text-white/40 tracking-wider">
                Hover over any technology node to view details
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};
