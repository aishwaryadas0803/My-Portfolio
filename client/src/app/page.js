import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Introduction from '../sections/Introduction';
import Certifications from '../sections/Certifications';
import Hackathons from '../sections/Hackathons';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default async function Home() {
  // Introduce a slight artificial delay to trigger Next.js Suspense
  // This allows the WeaveSpinner loading screen to show as a premium splash screen
  await new Promise((resolve) => setTimeout(resolve, 2000));

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

        {/* Academic Profile */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Dynamic Project Portfolios */}
        <Projects />

        {/* Hackathons */}
        <Hackathons />

        {/* Certifications & Training */}
        <Certifications />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Styled Footer */}
      <Footer />
    </>
  );
}
