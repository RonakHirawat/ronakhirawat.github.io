import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SideIndicator } from './components/SideIndicator';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Offset for navbar and visual threshold

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#E4E6EA] selection:bg-[#FFB020]/20 selection:text-[#FFB020] relative">
      
      {/* Fixed HUD Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Side Section Tracker Rail */}
      <SideIndicator activeSection={activeSection} />

      {/* Single Continuous Scrolling Page */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Technical HUD Footer */}
      <Footer />

    </div>
  );
}
