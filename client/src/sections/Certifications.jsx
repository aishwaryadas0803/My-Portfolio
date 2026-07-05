'use client';

import React, { useState } from 'react';
import { Award, BadgeCheck, Medal, ShieldCheck, Cpu, Smartphone, X } from 'lucide-react';

const certifications = [
  {
    name: "Programming in Java",
    provider: "NPTEL, IIT Kharagpur",
    year: "2025",
    highlight: "Elite Gold Medal",
    icon: Medal,
    accentColor: "from-yellow-400/20 to-girly-pink/20",
    borderColor: "border-yellow-400/30 hover:border-yellow-400/60",
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
    accentColor: "from-girly-lavender/15 to-girly-pink/10",
    borderColor: "border-girly-lavender/15 hover:border-girly-lavender/40",
    iconColor: "text-girly-lavender",
    badgeColor: "bg-girly-lavender/10 text-girly-lavender border-girly-lavender/20",
    isGold: false,
    image: "/certificates/management.jpg"
  },
  {
    name: "Full Stack Development Using MERN",
    provider: "Ardent Computech",
    year: "2026",
    highlight: null,
    icon: ShieldCheck,
    accentColor: "from-girly-pink/15 to-girly-lavender/10",
    borderColor: "border-girly-pink/15 hover:border-girly-pink/40",
    iconColor: "text-girly-pink",
    badgeColor: "bg-girly-pink/10 text-girly-pink border-girly-pink/20",
    isGold: false,
    image: "/certificates/mern.jpg"
  },
  {
    name: "Python for AI & ML",
    provider: "Udemy",
    year: "2026",
    highlight: null,
    icon: Cpu,
    accentColor: "from-girly-lavender/15 to-girly-pink/10",
    borderColor: "border-girly-lavender/15 hover:border-girly-lavender/40",
    iconColor: "text-girly-lavender",
    badgeColor: "bg-girly-lavender/10 text-girly-lavender border-girly-lavender/20",
    isGold: false,
    image: "/certificates/python.png"
  },
  {
    name: "Cyber Security Training",
    provider: "Ardent Computech",
    year: "2025",
    highlight: null,
    icon: ShieldCheck,
    accentColor: "from-girly-pink/15 to-girly-lavender/10",
    borderColor: "border-girly-pink/15 hover:border-girly-pink/40",
    iconColor: "text-girly-pink",
    badgeColor: "bg-girly-pink/10 text-girly-pink border-girly-pink/20",
    isGold: false,
    image: "/certificates/cybersecurity.png"
  },
  {
    name: "Android App Development",
    provider: "Euphoria GenX",
    year: "2024",
    highlight: null,
    icon: Smartphone,
    accentColor: "from-girly-lavender/15 to-girly-pink/10",
    borderColor: "border-girly-lavender/15 hover:border-girly-lavender/40",
    iconColor: "text-girly-lavender",
    badgeColor: "bg-girly-lavender/10 text-girly-lavender border-girly-lavender/20",
    isGold: false,
    image: "/certificates/android.jpg"
  },
  {
    name: "Cloud Computing",
    provider: "NPTEL, IIT Kharagpur",
    year: "2026",
    highlight: "Elite Silver",
    icon: BadgeCheck,
    accentColor: "from-slate-400/20 to-girly-lavender/15",
    borderColor: "border-slate-400/30 hover:border-slate-400/60",
    iconColor: "text-slate-300",
    badgeColor: "bg-slate-400/10 text-slate-300 border-slate-400/20",
    isGold: false,
    isSilver: true,
    image: "/certificates/cloudcomputing.png"
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock body scroll when certificate popup is active (especially important for mobile browsers)
  React.useEffect(() => {
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
    <section id="certifications" className="py-24 px-6 relative">
      {/* Background ambient decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-girly-lavender/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-girly-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-girly-lavender mb-3">Credentials</h2>
          <p className="text-3xl md:text-5xl font-bold text-offwhite tracking-tight">Certifications & Training</p>
          <div className="w-16 h-1 bg-gradient-to-r from-girly-pink to-girly-lavender mx-auto mt-4 rounded-full" />
          <p className="text-xs text-offwhite/40 mt-3">(Click any card with a preview to view the certificate)</p>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const hasPreview = !!cert.image;
            return (
              <div
                key={idx}
                onClick={() => hasPreview && setSelectedCert(cert)}
                className={`group relative p-6 rounded-2xl bg-plum-muted/30 border ${cert.borderColor} glass-morphism transition-all duration-500 hover:shadow-pink-glow/30 overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                  hasPreview ? 'cursor-pointer active:scale-95 touch-manipulation' : 'cursor-default'
                }`}
              >
                {/* Background gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Gold shimmer */}
                {cert.isGold && (
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-yellow-400/10 blur-2xl animate-pulse-slow pointer-events-none" />
                )}

                {/* Silver shimmer */}
                {cert.isSilver && (
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-slate-400/15 blur-2xl animate-pulse-slow pointer-events-none" />
                )}

                <div className="relative z-10">
                  {/* Top Row: Icon + Year Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-darkBg-primary/60 ${cert.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex items-center gap-2">
                      {hasPreview && (
                        <span className="text-[9px] font-semibold text-girly-pink bg-girly-pink/10 border border-girly-pink/20 px-2 py-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">
                          View
                        </span>
                      )}
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${cert.badgeColor}`}>
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-base font-bold text-offwhite mb-1.5 group-hover:text-girly-pink transition-colors duration-300">
                    {cert.name}
                  </h3>

                  {/* Provider */}
                  <p className="text-xs text-offwhite/55 font-light mb-3">
                    {cert.provider}
                  </p>

                  {/* Highlight Badge — gold or silver */}
                  {cert.highlight && cert.isGold && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-[10px] font-bold">
                      <Medal size={12} />
                      <span>{cert.highlight}</span>
                    </div>
                  )}
                  {cert.highlight && cert.isSilver && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-400/10 border border-slate-400/25 text-slate-300 text-[10px] font-bold">
                      <Medal size={12} />
                      <span>{cert.highlight}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Callout Card */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-plum-muted/20 border border-girly-pink/15 glass-morphism relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 rounded-full bg-girly-pink/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-girly-lavender/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/25 shrink-0">
              <Award size={36} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-offwhite mb-2">
                Key Achievement — <span className="text-yellow-400">NPTEL Elite Gold Medal</span>
              </h3>
              <p className="text-sm text-offwhite/65 font-light leading-relaxed max-w-2xl">
                Awarded for exceptional performance in <strong className="text-offwhite/90">Programming in Java</strong> by IIT Kharagpur (2025). 
                Positioned among the top national percentile of examinees, demonstrating mastery of object-oriented programming, 
                data structures, and software design patterns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* popup Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/90 backdrop-blur-md animate-fade-in touch-none"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] md:max-h-[85vh] rounded-2xl border border-offwhite/10 bg-darkBg-secondary/95 shadow-2xl p-3 overflow-hidden flex flex-col items-center justify-center glass-morphism animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex justify-between items-center px-2 md:px-4 py-2 border-b border-offwhite/5 mb-3">
              <div className="pr-4">
                <h4 className="text-xs md:text-base font-bold text-offwhite leading-tight">{selectedCert.name}</h4>
                <p className="text-[9px] md:text-xs text-offwhite/50">{selectedCert.provider} ({selectedCert.year})</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 active:bg-white/10 text-offwhite/70 active:text-offwhite hover:bg-white/10 hover:text-offwhite transition-colors cursor-pointer focus:outline-none shrink-0 touch-manipulation"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image container */}
            <div className="relative flex-grow w-full overflow-auto flex items-center justify-center bg-black/40 rounded-xl p-1.5 md:p-2 max-h-[75vh] md:max-h-[70vh]">
              <img 
                src={selectedCert.image} 
                alt={`${selectedCert.name} Certificate`} 
                className="max-w-full max-h-[70vh] md:max-h-[65vh] object-contain rounded-lg shadow-xl select-none pointer-events-none md:pointer-events-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
