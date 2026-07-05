import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Introduction from '../sections/Introduction';
import Certifications from '../sections/Certifications';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Introduction */}
        <Introduction />

        {/* Academic Profile & Skills */}
        <About />

        {/* Certifications & Training */}
        <Certifications />

        {/* Dynamic Project Portfolios */}
        <Projects />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Styled Footer */}
      <Footer />
    </>
  );
}
