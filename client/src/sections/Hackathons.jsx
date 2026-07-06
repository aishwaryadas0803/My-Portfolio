'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Trophy, Code, Cpu, Server, Sparkles } from 'lucide-react';

const hackathons = [
  {
    name: 'Hack4Bengal',
    year: '2024',
    description: 'Participated in Hack4Bengal, building a community-driven solution for local challenges.',
    icon: Code,
    delay: '0s',
  },
  {
    name: 'Status Code 2',
    year: '2025',
    description: 'Organized by IIT Kalyani, focused on backend engineering and cloud-native applications.',
    icon: Server,
    delay: '0.5s',
  },
  {
    name: 'Technoverse',
    year: '2026',
    description: 'Hosted by Cognizant, theme centered around AI-driven innovations and full-stack development.',
    icon: Cpu,
    delay: '1s',
  },
  {
    name: 'AgentifAL Buildathon',
    year: '2026',
    description: 'Capgemini-sponsored buildathon focusing on intelligent agents and automation frameworks.',
    icon: Sparkles,
    delay: '1.5s',
  },
];

const Hackathons = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => setMounted(true), []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      id="hackathons" 
      className="py-32 px-6 relative overflow-hidden bg-[#09090B]"
    >
      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          mix-blend-mode: overlay;
        }
        @keyframes float-island {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }
        @keyframes pulse-line {
          0%, 100% { opacity: 0.1; box-shadow: none; }
          50% { opacity: 0.5; box-shadow: 0 0 15px rgba(245,197,66,0.3); }
        }
        @keyframes light-ray {
          0% { transform: rotate(-15deg) translateX(-100%); opacity: 0; }
          50% { opacity: 0.05; }
          100% { transform: rotate(-15deg) translateX(100%); opacity: 0; }
        }
        @keyframes particle-drift {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .animate-float {
          animation: float-island 6s ease-in-out infinite;
        }
        .animate-ray {
          animation: light-ray 12s linear infinite;
        }
        
        .spotlight-card {
          position: relative;
        }
        .spotlight-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 32px;
          background: radial-gradient(
            800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(245,197,66,0.06),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          z-index: 0;
        }
        .spotlight-container:hover .spotlight-card::before {
          opacity: 1;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(245,197,66,0.05), transparent);
          opacity: 0;
          pointer-events: none;
        }
        .group:hover .shine-effect::after {
          opacity: 1;
          animation: shine 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* --- Animated Background Elements --- */}
      {/* Base Dark Mesh / Charcoal Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#141417_0%,#09090B_100%)] pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Soft Golden Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F5C542]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F5C542]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#F5C542]/[0.03] to-transparent blur-2xl pointer-events-none" />

      {/* Animated Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[200%] h-32 bg-gradient-to-r from-transparent via-[#F5C542] to-transparent animate-ray origin-left blur-3xl opacity-30" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 left-0 w-[200%] h-48 bg-gradient-to-r from-transparent via-[#F5C542] to-transparent animate-ray origin-left blur-3xl opacity-20" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 left-1/3 w-[200%] h-24 bg-gradient-to-r from-transparent via-[#F5C542] to-transparent animate-ray origin-left blur-3xl opacity-40" style={{ animationDelay: '8s' }} />
      </div>

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#F5C542]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-drift ${8 + Math.random() * 7}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0,
                boxShadow: '0 0 6px 1px rgba(245,197,66,0.4)'
              }}
            />
          ))}
        </div>
      )}

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 tracking-tight drop-shadow-sm">
            Hackathons & Competitions
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#F5C542]/60 to-transparent mx-auto mt-8 opacity-80" />
        </div>

        {/* Floating Islands Container */}
        <div 
          className="relative spotlight-container" 
          ref={containerRef} 
          onMouseMove={handleMouseMove}
        >
          {/* Animated Glowing Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: -1 }}>
            <path d="M 25% 20% C 50% 30%, 50% 70%, 75% 80%" stroke="url(#goldGradientLine)" strokeWidth="1" fill="none" className="animate-[pulse-line_6s_infinite]" />
            <path d="M 75% 20% C 50% 30%, 50% 70%, 25% 80%" stroke="url(#goldGradientLine)" strokeWidth="1" fill="none" className="animate-[pulse-line_8s_infinite]" style={{ animationDelay: '2s' }} />
            
            <defs>
              <linearGradient id="goldGradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(245,197,66,0.3)" />
                <stop offset="50%" stopColor="rgba(245,197,66,0.05)" />
                <stop offset="100%" stopColor="rgba(245,197,66,0.3)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 relative px-4 md:px-12">
            {hackathons.map((hack, idx) => {
              const Icon = hack.icon;
              // Stagger cards vertically
              const offsetClass = idx % 2 === 0 ? "md:mt-0" : "md:mt-24";
              
              return (
                <div
                  key={idx}
                  className={`animate-float ${offsetClass} relative group perspective-1000 cursor-default`}
                  style={{ animationDelay: hack.delay }}
                >
                  {/* Island External Glow on Hover */}
                  <div className="absolute -inset-4 bg-[#F5C542]/0 rounded-[40px] blur-2xl group-hover:bg-[#F5C542]/10 transition-colors duration-700 pointer-events-none" />
                  
                  {/* The Glass Island Card */}
                  <div 
                    className="shine-effect spotlight-card relative p-8 md:p-10 rounded-[32px] overflow-hidden transition-all duration-700 ease-out transform group-hover:-translate-y-3 group-hover:scale-[1.03]"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(245,197,66,0.12)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Hover Border & Brightness Enhancement */}
                    <div className="absolute inset-0 rounded-[32px] border border-[#F5C542]/0 group-hover:border-[#F5C542]/30 group-hover:bg-white/[0.02] transition-all duration-700 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 rounded-full bg-[#F5C542] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-150" />
                        <div className="w-20 h-20 rounded-2xl bg-[#141417] border border-white/5 group-hover:border-[#F5C542]/30 flex items-center justify-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                          <Icon size={36} className="text-neutral-400 group-hover:text-[#F5C542] drop-shadow-sm transition-colors duration-500" />
                        </div>
                      </div>

                      {/* Year Badge */}
                      <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4 px-4 py-1.5 bg-black/40 rounded-full border border-white/5 transform transition-all duration-500 group-hover:scale-105 group-hover:text-[#F5C542] group-hover:border-[#F5C542]/30">
                        {hack.year}
                      </span>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-500 tracking-wide">
                        {hack.name}
                      </h3>

                      {/* Description Fading In */}
                      <div className="overflow-hidden transition-all duration-700 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3">
                        <p className="text-sm text-neutral-400 font-light leading-relaxed px-2">
                          {hack.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
