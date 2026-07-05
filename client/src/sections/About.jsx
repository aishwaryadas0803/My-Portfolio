import React from 'react';
import { GraduationCap, Award, Brain, Laptop, Database, PenTool, CheckCircle, BookOpen } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Laptop,
      color: "text-girly-pink",
      skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      color: "text-girly-lavender",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-girly-pink",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & OS",
      icon: PenTool,
      color: "text-girly-lavender",
      skills: ["Git", "GitHub", "VS Code", "Arduino IDE", "Windows", "Ubuntu"]
    }
  ];

  const certifications = [
    { name: "Programming in Java (Elite Gold)", provider: "NPTEL, IIT Kharagpur", year: "2025" },
    { name: "Principles of Management", provider: "NPTEL, IIT Roorkee", year: "2025" },
    { name: "MERN Stack Training", provider: "Ardent Computech", year: "2026" },
    { name: "Python for AI & ML", provider: "Udemy", year: "2026" },
    { name: "Cyber Security Training", provider: "Ardent Computech", year: "2025" },
    { name: "Android App Development", provider: "Euphoria GenX", year: "2024" }
  ];

  const relevantCourses = [
    "Operating Systems", "Computer Networks", "Database Management Systems",
    "Software Engineering", "AI & Machine Learning", "Cloud Computing"
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-darkBg-secondary/20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-girly-lavender/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-girly-pink mb-3">About Me</h2>
          <p className="text-3xl md:text-5xl font-bold text-offwhite tracking-tight">Academic Profile & Qualifications</p>
          <div className="w-16 h-1 bg-gradient-to-r from-girly-pink to-girly-lavender mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Grid: Left (Education & Summary) | Right (Skills & Courses) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Education / Accomplishments */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-offwhite font-sans tracking-wide">My Journey</h3>
            <p className="text-offwhite/70 leading-relaxed font-light text-sm">
              I am a Computer Science Engineering student with hands-on expertise in full-stack web development (MERN Stack), 
              embedded systems, and real-time applications. Proficient in Java, Python, C++, and modern JavaScript frameworks, 
              I am capable of delivering production-grade projects from concept to deployment.
            </p>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-offwhite/90 font-sans tracking-wide flex items-center gap-2">
                <GraduationCap className="text-girly-pink" size={20} />
                Education Timeline
              </h4>

              {/* B.Tech */}
              <div className="p-4 rounded-xl bg-plum-muted/30 border border-girly-lavender/10 glass-morphism relative hover:border-girly-pink/30 transition-all duration-300">
                <span className="text-[10px] font-semibold text-girly-pink bg-girly-pink/10 px-2 py-0.5 rounded-full">2023 – 2027</span>
                <h5 className="text-sm font-bold text-offwhite mt-1.5">B.Tech in Computer Science & Engineering</h5>
                <p className="text-xs text-offwhite/60">JIS College of Engineering | Kalyani, WB</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-girly-lavender/10 border border-girly-lavender/20 text-girly-lavender">
                  <span>CGPA: 8.62</span>
                </div>
              </div>

              {/* XII */}
              <div className="p-4 rounded-xl bg-plum-muted/30 border border-girly-lavender/10 glass-morphism relative hover:border-girly-pink/30 transition-all duration-300">
                <span className="text-[10px] font-semibold text-girly-pink bg-girly-pink/10 px-2 py-0.5 rounded-full">2020 – 2022</span>
                <h5 className="text-sm font-bold text-offwhite mt-1.5">Higher Secondary (XII)</h5>
                <p className="text-xs text-offwhite/60">Kanksa High School, W.B.</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-girly-pink/10 border border-girly-pink/20 text-girly-pink">
                  <span>Score: 93%</span>
                </div>
              </div>

              {/* X */}
              <div className="p-4 rounded-xl bg-plum-muted/30 border border-girly-lavender/10 glass-morphism relative hover:border-girly-pink/30 transition-all duration-300">
                <span className="text-[10px] font-semibold text-girly-pink bg-girly-pink/10 px-2 py-0.5 rounded-full">2010 – 2020</span>
                <h5 className="text-sm font-bold text-offwhite mt-1.5">Secondary (X)</h5>
                <p className="text-xs text-offwhite/60">Ramkrishna Ashram Vidyapith, W.B.</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-offwhite/10 border border-offwhite/20 text-offwhite">
                  <span>Score: 89%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix & Coursework */}
          <div className="lg:col-span-7 space-y-8">
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-offwhite font-sans tracking-wide">Technical Matrix</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-5 rounded-xl bg-plum-muted/20 border border-girly-lavender/5 glass-morphism hover:border-girly-lavender/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className={`${category.color}`} size={16} />
                        <h4 className="text-sm font-bold text-offwhite">{category.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-2 py-0.8 rounded bg-darkBg-primary/60 border border-girly-pink/5 hover:border-girly-pink/20 text-offwhite/80 text-[10.5px] transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-offwhite/90 font-sans tracking-wide flex items-center gap-2">
                <BookOpen className="text-girly-lavender" size={20} />
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {relevantCourses.map((course, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-lg bg-plum-muted/10 border border-girly-lavender/5 text-center text-xs font-light text-offwhite/85 hover:border-girly-lavender/20 hover:bg-plum-muted/20 transition-all"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and Achievement Row */}
        <div className="border-t border-girly-lavender/5 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Certifications */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-offwhite font-sans tracking-wide flex items-center gap-2">
                <Award className="text-girly-lavender" size={20} />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-plum-muted/15 border border-girly-lavender/5 hover:border-girly-pink/20 transition-all duration-300">
                    <CheckCircle size={14} className="text-girly-pink mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-offwhite">{cert.name}</h4>
                      <p className="text-[10px] text-offwhite/50">{cert.provider} ({cert.year})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Highlight */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-plum-muted/30 border border-girly-pink/20 shadow-pink-glow/5 relative overflow-hidden glass-morphism">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-20 h-20 rounded-full bg-girly-pink/10 blur-xl pointer-events-none" />
              <h3 className="text-lg font-bold text-girly-pink font-sans tracking-wide mb-3 flex items-center gap-2">
                <Award size={18} className="animate-pulse" />
                Key Achievement
              </h3>
              <h4 className="text-sm font-bold text-offwhite mb-1">NPTEL Elite Gold Medal</h4>
              <p className="text-[11px] text-offwhite/60 mb-2">Programming in Java | IIT Kharagpur (2025)</p>
              <p className="text-xs font-light text-offwhite/70 leading-relaxed">
                Awarded for outstanding performance, positioning in the top national percentile of examinees for Java programming excellence.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
