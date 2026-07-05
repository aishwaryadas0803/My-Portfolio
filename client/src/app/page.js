import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
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

        {/* Academic Profile & Skills */}
        <About />

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
