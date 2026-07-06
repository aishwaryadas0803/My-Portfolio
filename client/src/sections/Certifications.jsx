'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';
import { Award, BadgeCheck, Medal, ShieldCheck, Cpu, Smartphone, X } from 'lucide-react';

const certifications = [
  {
    name: "Programming in Java",
    provider: "NPTEL, IIT Kharagpur",
    year: "2025",
    highlight: "Elite Gold Medal",
    icon: Medal,
    accentColor: "from-yellow-400/20 to-orange-500/10",
    borderColor: "border-yellow-400/30",
    hoverBorderColor: "group-hover/card:border-yellow-400/80",
    iconColor: "text-yellow-400",
    badgeColor: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    isGold: true,
    image: "/certificates/java.jpg"
  },
  {
    name: "Principles of Management",
    provider: "NPTEL, IIT Roorkee",
    year: "2025",
    highlight: null,
    icon: BadgeCheck,
    accentColor: "from-pink-500/15 to-purple-500/10",
    borderColor: "border-pink-500/20",
    hoverBorderColor: "group-hover/card:border-pink-500/50",
    iconColor: "text-pink-400",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    isGold: false,
    image: "/certificates/management.jpg"
  },
  {
    name: "Full Stack Development Using MERN",
    provider: "Ardent Computech",
    year: "2026",
    highlight: null,
    icon: ShieldCheck,
    accentColor: "from-purple-500/15 to-pink-500/10",
    borderColor: "border-purple-500/20",
    hoverBorderColor: "group-hover/card:border-purple-500/50",
    iconColor: "text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    isGold: false,
    image: "/certificates/mern.jpg"
  },
  {
    name: "Python for AI & ML",
    provider: "Udemy",
    year: "2026",
    highlight: null,
    icon: Cpu,
    accentColor: "from-blue-500/15 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    hoverBorderColor: "group-hover/card:border-blue-500/50",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    isGold: false,
    image: "/certificates/python.png"
  },
  {
    name: "Cyber Security Training",
    provider: "Ardent Computech",
    year: "2025",
    highlight: null,
    icon: ShieldCheck,
    accentColor: "from-emerald-500/15 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    hoverBorderColor: "group-hover/card:border-emerald-500/50",
    iconColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    isGold: false,
    image: "/certificates/cybersecurity.png"
  },
  {
    name: "Android App Development",
    provider: "Euphoria GenX",
    year: "2024",
    highlight: null,
    icon: Smartphone,
    accentColor: "from-indigo-500/15 to-blue-500/10",
    borderColor: "border-indigo-500/20",
    hoverBorderColor: "group-hover/card:border-indigo-500/50",
    iconColor: "text-indigo-400",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    isGold: false,
    image: "/certificates/android.jpg"
  },
  {
    name: "Cloud Computing",
    provider: "NPTEL, IIT Kharagpur",
    year: "2026",
    highlight: "Elite Silver",
    icon: BadgeCheck,
    accentColor: "from-slate-400/20 to-slate-500/10",
    borderColor: "border-slate-400/30",
    hoverBorderColor: "group-hover/card:border-slate-400/70",
    iconColor: "text-slate-300",
    badgeColor: "bg-slate-400/10 text-slate-300 border-slate-400/20",
    isGold: false,
    isSilver: true,
    image: "/certificates/cloudcomputing.png"
  }
];

const CertificationCard = ({ cert, index, onClick }) => {
  const Icon = cert.icon;
  const hasPreview = !!cert.image;
  
  // Spotlight effect logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Randomized floating animation for each card
  const floatingY = [0, -(Math.random() * 2 + 4), 0]; // 4-6px float
  const duration = Math.random() * 1.5 + 2.5; // 2.5-4s duration

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth reveal
        delay: index * 0.1 
      }}
      className="h-full w-full"
    >
      <motion.div
        animate={{ y: floatingY }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.03, y: -5 }}
        onClick={() => hasPreview && onClick(cert)}
        onMouseMove={handleMouseMove}
        className={`group/card relative h-full flex flex-col p-6 md:p-8 rounded-3xl bg-black border ${cert.borderColor} ${cert.hoverBorderColor} glass-morphism overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] ${hasPreview ? 'cursor-pointer active:scale-95 touch-manipulation' : 'cursor-default'}`}
        // The grid has group/grid, so we dim non-hovered cards
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)',
          minHeight: '240px'
        }}
      >
        {/* Spotlight Radial Gradient */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 215, 0, 0.08),
                transparent 80%
              )
            `
          }}
        />

        {/* Hover Background Gradient Accent */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.accentColor} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

        {/* Ambient Shimmers */}
        {cert.isGold && (
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-yellow-400/10 blur-[40px] pointer-events-none group-hover/card:bg-yellow-400/20 transition-colors duration-500 z-0" />
        )}
        {cert.isSilver && (
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-slate-300/10 blur-[40px] pointer-events-none group-hover/card:bg-slate-300/20 transition-colors duration-500 z-0" />
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Top Row: Icon + Year Badge */}
          <div className="flex items-start justify-between mb-5">
            <motion.div 
              className={`p-3 rounded-xl bg-white/5 border border-white/5 ${cert.iconColor} group-hover/card:bg-white/10 group-hover/card:shadow-[0_0_15px_rgba(255,215,0,0.15)] transition-all duration-300`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Icon size={24} strokeWidth={1.5} />
            </motion.div>
            
            <div className="flex items-center gap-2">
              {hasPreview && (
                <div className="text-[10px] font-semibold text-black bg-white/10 group-hover/card:bg-yellow-400 px-3 py-1 rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform scale-90 group-hover/card:scale-100">
                  View
                </div>
              )}
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${cert.badgeColor} backdrop-blur-md`}>
                {cert.year}
              </span>
            </div>
          </div>

          {/* Certificate Name */}
          <h3 className="text-xl md:text-[22px] leading-tight font-bold text-white mb-2 group-hover/card:text-yellow-400 transition-colors duration-300">
            {cert.name}
          </h3>

          {/* Provider */}
          <p className="text-sm md:text-[15px] text-white/50 font-light mb-6 flex-grow">
            {cert.provider}
          </p>

          {/* Highlight Badge */}
          {cert.highlight && (
            <div className="mt-auto relative overflow-hidden rounded-full">
              {/* Shimmer sweeping effect for Gold Medal */}
              {cert.isGold && (
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-20 pointer-events-none" />
              )}
              
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border ${
                cert.isGold 
                  ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400 group-hover/card:border-yellow-400/60' 
                  : 'bg-slate-400/10 border-slate-400/30 text-slate-300 group-hover/card:border-slate-400/60'
                } text-[10px] font-bold uppercase tracking-wide transition-colors duration-300`}
              >
                <Medal size={14} className={cert.isGold ? 'text-yellow-400' : 'text-slate-300'} />
                <span>{cert.highlight}</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-32 px-6 relative bg-black overflow-hidden">
      {/* Required CSS for custom animations like shimmer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          50% { transform: translateX(150%) skewX(12deg); }
          100% { transform: translateX(150%) skewX(12deg); }
        }
      `}} />

      {/* Luxury Background Decor (Blobs) */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-yellow-600/10 blur-[120px] pointer-events-none" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -60, 0], 
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[150px] pointer-events-none" 
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading Animated */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500 mb-4"
          >
            Credentials
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Certifications & Training
          </motion.p>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-6" 
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/40 mt-6 font-light"
          >
            (Click any card with a preview to view the certificate)
          </motion.p>
        </div>

        {/* Certifications Grid with sibling dimming using group/grid */}
        <div className="group/grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="h-full transition-opacity duration-300 group-hover/grid:opacity-40 hover:!opacity-100"
            >
              <CertificationCard 
                cert={cert} 
                index={idx} 
                onClick={setSelectedCert} 
              />
            </div>
          ))}
        </div>

        {/* Achievement Callout Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent"
        >
          <div className="p-8 md:p-10 rounded-[22px] bg-black border border-white/5 relative overflow-hidden group">
            {/* Callout internal blobs */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none group-hover:bg-yellow-500/20 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-40 h-40 rounded-full bg-orange-500/10 blur-2xl pointer-events-none group-hover:bg-orange-500/20 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/10 border border-yellow-400/30 shrink-0 shadow-[0_0_30px_rgba(250,204,21,0.15)] group-hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] transition-shadow duration-500">
                <Award size={48} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Key Achievement — <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">NPTEL Elite Gold Medal</span>
                </h3>
                <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-3xl">
                  Awarded for exceptional performance in <strong className="text-white">Programming in Java</strong> by IIT Kharagpur (2025). 
                  Positioned among the top national percentile of examinees, demonstrating mastery of object-oriented programming, 
                  data structures, and software design patterns.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popup Modal for Certificate Preview */}
      {selectedCert && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg touch-none"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.8)] p-4 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex justify-between items-center px-4 py-3 border-b border-white/5 mb-4">
              <div>
                <h4 className="text-base md:text-lg font-bold text-white leading-tight">{selectedCert.name}</h4>
                <p className="text-xs text-white/50">{selectedCert.provider} ({selectedCert.year})</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all cursor-pointer focus:outline-none shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image container */}
            <div className="relative flex-grow w-full flex items-center justify-center bg-black rounded-2xl p-2 overflow-hidden">
              <img 
                src={selectedCert.image} 
                alt={`${selectedCert.name} Certificate`} 
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl select-none"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
