'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

// Offline fallback projects matching the real CV
const fallbackProjects = [
  {
    id: "medilink",
    title: "MediLink",
    category: "Full-Stack Web App",
    description: "A comprehensive healthcare management system designed to streamline patient-doctor interaction. Features real-time consultation messaging and secure record storage.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
    features: [
      "Built full-stack healthcare platform with real-time WebSocket-based doctor-patient communication.",
      "Implemented JWT-based authentication, role-based access control, and medical records management."
    ],
    githubLink: "https://github.com/SOUGATA2205/Drug_Discovery-medilink",
    liveLink: "#"
  },
  {
    id: "a-musicals",
    title: "A-Musicals",
    category: "Frontend Web App",
    description: "An interactive, visually rich music and entertainment streaming dashboard. Supports visualizer panels, custom playlists, and high-fidelity layouts.",
    technologies: ["React.js", "JavaScript", "CSS"],
    features: [
      "Developed a responsive music web platform with modern UI/UX and cross-device compatibility."
    ],
    githubLink: "https://github.com/parotdevs/Team_Ayan-Amusicals",
    liveLink: "https://www.amusicals.in/"
  },
  {
    id: "glow",
    title: "Glow",
    category: "Frontend Web App",
    description: "An elegant e-commerce prototype for a makeup and beauty brand. Designed with standard layouts, item filters, responsive checkout flows, and animations.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    features: [
      "Built a beauty e-commerce website with reusable components and smooth navigation."
    ],
    githubLink: "https://github.com/parotdevs/Glow",
    liveLink: "https://glow.parot.dev/"
  },
  {
    id: "aahar-setu",
    title: "Aahar Setu",
    category: "Full-Stack Web App",
    description: "Digital Medicine Passport System featuring QR-based tracking for livestock health history, diet regimes, and medication history.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    features: [
      "Engineered QR-based livestock medicine tracking system with automated alerts for food safety compliance."
    ],
    githubLink: "https://github.com/Aritra-221B/AhaarSetu",
    liveLink: "https://ahaarsetu-theta.vercel.app/"
  },
  {
    id: "sandrover",
    title: "SandRover",
    category: "Embedded Systems / Robotics",
    description: "Hardware rover system designed for adaptive terrain traversal and wireless command logging.",
    technologies: ["ESP32", "C/C++", "L298N Motor Driver"],
    features: [
      "Designed and programmed an ESP32-controlled robotic vehicle for terrain exploration and surveillance."
    ],
    githubLink: "https://github.com/aishwaryadas0803/SandRover",
    liveLink: "#"
  },
  {
    id: "line-following-robot",
    title: "Line Following Robot",
    category: "Embedded Systems / Robotics",
    description: "Autonomous line tracking vehicle using proportional control logic for high speed course navigation.",
    technologies: ["Arduino Nano", "C/C++", "IR Sensors", "PID Control"],
    features: [
      "Developed a PID-based autonomous line-following robot with accurate path detection and stable navigation."
    ],
    githubLink: "https://github.com/aishwaryadas0803/Line-Following-Robot",
    liveLink: "#"
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/projects`);
        
        if (!response.ok) {
          throw new Error('Failed to retrieve project payload from server.');
        }
        
        const resData = await response.json();
        if (resData && resData.success) {
          setProjects(resData.data);
        } else {
          throw new Error('Server returned unsuccessful project retrieval status.');
        }
      } catch (err) {
        console.warn('Backend API connection failed, using offline fallback data:', err.message);
        setErrorMsg('Note: Currently displaying offline fallback data.');
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-girly-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-girly-lavender mb-3">Portfolio</h2>
          <p className="text-3xl md:text-5xl font-bold text-offwhite tracking-tight">Featured Projects</p>
          <div className="w-16 h-1 bg-gradient-to-r from-girly-pink to-girly-lavender mx-auto mt-4 rounded-full" />
          
          {errorMsg && (
            <p className="text-xs text-girly-pink/60 mt-2 font-mono">{errorMsg}</p>
          )}
        </div>

        {loading ? (
          // Glow skeleton cards layout when loading
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-[400px] rounded-2xl bg-plum-muted/20 border border-girly-lavender/5 p-6 animate-pulse flex flex-col justify-between">
                <div>
                  <div className="w-24 h-6 bg-plum-muted rounded-full mb-4" />
                  <div className="w-3/4 h-8 bg-plum-muted rounded mb-3" />
                  <div className="w-full h-16 bg-plum-muted rounded mb-6" />
                </div>
                <div className="space-y-3">
                  <div className="w-full h-8 bg-plum-muted rounded" />
                  <div className="w-full h-10 bg-plum-muted rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Grid Mapping of Projects
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
