'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Brain, BookOpen, Code2, Layers, Database, Wrench } from 'lucide-react';
import { GalaxySkills } from '../components/ui/GalaxySkills';

// Hook: fires once when element enters the viewport
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Timeline dot with pulsing ring animation
function TimelineDot({ color, delay = 0, inView }) {
  return (
    <div className="absolute -left-[9px] top-4 z-10">
      {/* Pulsing ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-0"
        style={{
          backgroundColor: color === 'pink' ? 'rgba(224,169,109,0.4)' : color === 'lavender' ? 'rgba(242,212,146,0.4)' : 'rgba(227,227,230,0.2)',
          animationDelay: `${delay}ms`,
          opacity: inView ? undefined : 0,
        }}
      />
      {/* Core dot */}
      <div
        className="relative w-4 h-4 rounded-full border-2 border-darkBg-primary transition-all duration-500"
        style={{
          backgroundColor: color === 'pink' ? '#E0A96D' : color === 'lavender' ? '#F2D492' : '#555',
          transform: inView ? 'scale(1)' : 'scale(0)',
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

// Animated timeline card
function TimelineCard({ delay, inView, dotColor, year, title, school, badge, badgeColor }) {
  const badgeStyles = {
    lavender: 'bg-girly-lavender/10 border-girly-lavender/20 text-girly-lavender',
    pink: 'bg-girly-pink/10 border-girly-pink/20 text-girly-pink',
    white: 'bg-offwhite/10 border-offwhite/20 text-offwhite',
  };

  return (
    <div
      className="relative pl-5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <TimelineDot color={dotColor} delay={delay + 200} inView={inView} />
      <div className="p-4 rounded-xl bg-plum-muted/30 border border-girly-lavender/10 glass-morphism hover:border-girly-pink/40 hover:-translate-y-0.5 hover:shadow-pink-glow transition-all duration-300 cursor-default">
        <span className="text-[10px] font-semibold text-girly-pink bg-girly-pink/10 px-2 py-0.5 rounded-full">{year}</span>
        <h5 className="text-sm font-bold text-offwhite mt-1.5">{title}</h5>
        <p className="text-xs text-offwhite/60">{school}</p>
        {badge && (
          <div className={`mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${badgeStyles[badgeColor]}`}>
            {badge}
          </div>
        )}
      </div>
    </div>
  );
}

// Full animated timeline section
function TimelineSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <div id="experience" ref={ref} className="space-y-5 scroll-mt-28">
      {/* Heading fade-in */}
      <h3
        className="text-xl font-bold text-offwhite font-sans tracking-wide flex items-center gap-2 transition-all duration-500"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-12px)' }}
      >
        <GraduationCap
          className="text-girly-pink"
          size={20}
          style={{
            filter: inView ? 'drop-shadow(0 0 8px rgba(224,169,109,0.6))' : 'none',
            transition: 'filter 0.8s ease 0.3s',
          }}
        />
        Education Timeline
      </h3>

      {/* Vertical line that draws in from top */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-girly-pink/60 via-girly-lavender/40 to-transparent rounded-full"
          style={{
            height: inView ? '100%' : '0%',
            transition: 'height 1.2s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}
        />

        {/* Cards */}
        <div className="space-y-5">
          <TimelineCard
            delay={150}
            inView={inView}
            dotColor="pink"
            year="2023 – 2027"
            title="B.Tech in Computer Science & Engineering"
            school="JIS College of Engineering | Kalyani, WB"
            badge="CGPA: 8.62"
            badgeColor="lavender"
          />
          <TimelineCard
            delay={350}
            inView={inView}
            dotColor="lavender"
            year="2020 – 2022"
            title="Higher Secondary (XII)"
            school="Kanksa High School, W.B."
            badge="Score: 93%"
            badgeColor="pink"
          />
          <TimelineCard
            delay={550}
            inView={inView}
            dotColor="white"
            year="2010 – 2020"
            title="Secondary (X)"
            school="Ramkrishna Ashram Vidyapith, W.B."
            badge="Score: 89%"
            badgeColor="white"
          />
        </div>
      </div>
    </div>
  );
}



const About = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "text-girly-pink",
      border: "hover:border-girly-pink/30",
      skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "text-girly-lavender",
      border: "hover:border-girly-lavender/30",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-girly-pink",
      border: "hover:border-girly-pink/30",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & OS",
      icon: Wrench,
      color: "text-girly-lavender",
      border: "hover:border-girly-lavender/30",
      skills: ["Git", "GitHub", "VS Code", "Arduino IDE", "Windows", "Ubuntu"]
    }
  ];

  const relevantCourses = [
    "Operating Systems", "Computer Networks", "Database Management Systems",
    "Software Engineering", "AI & Machine Learning", "Cloud Computing"
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          SECTION 1: ACADEMIC QUALIFICATIONS
      ═══════════════════════════════════════════════════ */}
      <section id="about" className="py-24 px-6 relative bg-darkBg-secondary/20">
        {/* Background orb */}
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-girly-pink/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-girly-lavender/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-girly-pink mb-3">
              <GraduationCap size={14} />
              Education
            </span>
            <p className="text-3xl md:text-5xl font-bold text-offwhite tracking-tight">Academic Qualifications</p>
            <div className="w-16 h-1 bg-gradient-to-r from-girly-pink to-girly-lavender mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-offwhite/50 text-sm font-light max-w-lg mx-auto">
              My educational journey and coursework that shaped my foundation in Computer Science.
            </p>
          </div>

          {/* Education Timeline + Coursework — Full Width Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Left: Education Timeline */}
            <TimelineSection />

            {/* Right: Relevant Coursework */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-offwhite/90 font-sans tracking-wide flex items-center gap-2">
                <BookOpen className="text-girly-lavender" size={20} />
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {relevantCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-xl bg-plum-muted/15 border border-girly-lavender/10 text-center text-sm font-medium text-offwhite/85 hover:border-girly-pink/30 hover:bg-plum-muted/30 hover:shadow-pink-glow/10 transition-all duration-300 cursor-default"
                  >
                    {course}
                  </div>
                ))}
              </div>

              {/* Professional Summary Card */}
              <div className="p-6 rounded-2xl bg-plum-muted/15 border border-girly-lavender/8 glass-morphism relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-28 h-28 rounded-full bg-girly-lavender/10 blur-2xl pointer-events-none" />
                <h4 className="text-base font-bold text-offwhite mb-3 relative z-10">Professional Summary</h4>
                <p className="text-sm text-offwhite/60 font-light leading-relaxed relative z-10">
                  Computer Science Engineering student currently working at{' '}
                  <a href="https://parot.dev/" target="_blank" rel="noopener noreferrer" className="text-girly-lavender hover:text-girly-pink transition-colors duration-200 font-semibold">PAROT</a>
                  , with hands-on expertise in full-stack web development (MERN Stack),
                  embedded systems, and real-time applications. Proficient in Java, Python, C++, and modern JavaScript frameworks.
                  Capable of independently delivering production-grade projects from concept to deployment, with a strong
                  foundation in algorithms, databases, and software engineering principles.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                  {["MERN Stack", "Embedded Systems", "Algorithms", "PID Control", "REST APIs"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-darkBg-primary/50 border border-girly-pink/10 text-[10px] font-semibold text-girly-pink/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: TECHNICAL KNOWLEDGE
      ═══════════════════════════════════════════════════ */}
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
    </>
  );
};

export default About;
