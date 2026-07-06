'use client';

import React from 'react';
import { CircularCertificates, Certificate } from './ui/CircularCertificates';

export const certificates: Certificate[] = [
  {
    title: "Programming in Java",
    issuer: "NPTEL IIT Kharagpur",
    year: "2025",
    badge: "Elite Gold Medal",
    description: "Programming fundamentals, OOP, Collections, Exception Handling and Multithreading.",
    image: "/certificates/java.png"
  },
  {
    title: "Principles of Management",
    issuer: "NPTEL IIT Roorkee",
    year: "2025",
    badge: "",
    description: "Management principles, planning, organizing and leadership.",
    image: "/certificates/management.png"
  },
  {
    title: "Cyber Security Training",
    issuer: "Ardent Computech",
    year: "2025",
    badge: "",
    description: "Network security, ethical hacking and cyber defense.",
    image: "/certificates/cyber.png"
  },
  {
    title: "Android App Development",
    issuer: "Euphoria GenX",
    year: "2024",
    badge: "",
    description: "Android Studio, Java and Firebase.",
    image: "/certificates/android.png"
  },
  {
    title: "Full Stack Development Using MERN",
    issuer: "Ardent Computech",
    year: "2026",
    badge: "",
    description: "MongoDB, Express, React and Node.js.",
    image: "/certificates/mern.png"
  },
  {
    title: "Python for AI & ML",
    issuer: "Udemy",
    year: "2026",
    badge: "",
    description: "NumPy, Pandas, Machine Learning and Deep Learning.",
    image: "/certificates/python.png"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL IIT Kharagpur",
    year: "2026",
    badge: "Elite Silver",
    description: "Cloud fundamentals, virtualization and deployment.",
    image: "/certificates/cloud.png"
  }
];

export const CertificatesSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative bg-[#09090B]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#F5C542]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#F5C542] mb-3">Credentials</h2>
          <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">Certificates & Achievements</p>
          <div className="w-16 h-1 bg-[#F5C542] mx-auto mt-4 rounded-full" />
        </div>

        {/* Circular Animation Showcase */}
        <CircularCertificates certificates={certificates} />
      </div>
    </section>
  );
};

export default CertificatesSection;
