'use client';

import React from 'react';
import { Brain } from 'lucide-react';
import { GalaxySkills } from '../components/ui/GalaxySkills';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative scroll-mt-20">
      {/* Background orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-girly-lavender/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-girly-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-girly-lavender mb-3">
            <Brain size={14} />
            Tech Stack
          </span>
          <p className="text-3xl md:text-5xl font-bold text-offwhite tracking-tight">Technical Knowledge</p>
          <div className="w-16 h-1 bg-gradient-to-r from-girly-lavender to-girly-pink mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-offwhite/50 text-sm font-light max-w-lg mx-auto">
            Languages, frameworks, databases and tools I use to build robust, scalable, and elegant digital experiences.
          </p>
        </div>

        {/* 3D Galaxy Visualization */}
        <GalaxySkills />

        {/* Summary Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { number: "8+", label: "Languages Known" },
            { number: "5+", label: "Frameworks & Libraries" },
            { number: "6+", label: "Certifications Earned" },
            { number: "8.62", label: "CGPA (B.Tech)" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-5 rounded-2xl glass-morphism bg-plum-muted/15 border border-girly-lavender/8 hover:border-girly-pink/20 transition-all">
              <p className="text-3xl md:text-4xl font-black bg-text-gradient bg-clip-text"
                 style={{backgroundImage: 'linear-gradient(135deg, #E0A96D, #F2D492)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                {stat.number}
              </p>
              <p className="text-xs text-offwhite/55 mt-1.5 font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
