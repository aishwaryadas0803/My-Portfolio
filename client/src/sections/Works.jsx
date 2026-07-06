import React from 'react';
import { Briefcase, Building, ExternalLink, Laptop } from 'lucide-react';

const workExperiences = [
  {
    title: "Currently Working",
    company: "PAROT",
    companyUrl: "https://parot.dev/",
    period: "Present",
    description: "Currently working and contributing to the PAROT ecosystem. Actively involved in building and maintaining features, collaborating with the team to enhance the platform's capabilities.",
    skills: ["Web Development", "Collaboration", "Software Engineering"],
    icon: Laptop
  }
];

const Works = () => {
  return (
    <section id="works" className="py-24 px-6 relative">
      {/* Background orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-girly-lavender/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-girly-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-girly-lavender mb-3">Professional Experience</h2>
          <p className="text-3xl md:text-5xl font-bold text-offwhite tracking-tight">Works & Roles</p>
          <div className="w-16 h-1 bg-gradient-to-r from-girly-pink to-girly-lavender mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {workExperiences.map((work, idx) => {
            const Icon = work.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-plum-muted/20 border border-girly-pink/15 glass-morphism relative overflow-hidden group hover:border-girly-pink/40 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-girly-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative z-10">
                  {/* Left side: Icon & Date */}
                  <div className="flex flex-col items-center md:w-48 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-darkBg-primary/80 border border-girly-lavender/20 flex items-center justify-center mb-4 text-girly-lavender group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-bold text-girly-pink/80 uppercase tracking-widest bg-girly-pink/10 px-3 py-1 rounded-full border border-girly-pink/20 text-center">
                      {work.period}
                    </span>
                  </div>

                  {/* Right side: Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-offwhite group-hover:text-girly-pink transition-colors">
                        {work.title}
                      </h3>
                      {work.companyUrl ? (
                        <a 
                          href={work.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-girly-lavender hover:text-white bg-girly-lavender/10 hover:bg-girly-lavender/20 px-3 py-1.5 rounded-full transition-colors"
                        >
                          <Building size={14} />
                          {work.company}
                          <ExternalLink size={12} className="ml-1 opacity-70" />
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-girly-lavender bg-girly-lavender/10 px-3 py-1.5 rounded-full">
                          <Building size={14} />
                          {work.company}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-offwhite/75 font-light leading-relaxed mb-6 mt-4">
                      {work.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {work.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-darkBg-primary/50 border border-girly-lavender/15 text-xs font-medium text-offwhite/70">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
