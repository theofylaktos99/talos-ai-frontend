// src/App.jsx (Ensure ParticlesBackground is imported)
import React, { useState, useEffect } from 'react';

// Import Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import AboutSection from './components/AboutSection/AboutSection';
import UseCasesSection from './components/UseCasesSection/UseCasesSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import TalosVisualization from './components/TalosVisualization/TalosVisualization';
import Demo from './components/Demo/Demo';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'; // <<< ENSURE THIS LINE IS PRESENT AND NOT COMMENTED OUT
import Preloader from './components/Preloader/Preloader';

import './App.css'; // Make sure .main-content styles are here or index.css

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preloader duration (e.g., 4.5 seconds)
    const preloaderDuration = 4500;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, preloaderDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />

      {/* Wrapper div for main content fade-in */}
      <div className={`main-content ${isLoading ? 'hidden' : 'visible'}`}>
         {/* Conditionally render main content only when not loading */}
         {!isLoading && (
           <>
             <ParticlesBackground /> {/* Use the imported component */}
             <Header />
             <main>
               <Hero />
               <Features />
               <AboutSection />
               <UseCasesSection />
               <HowItWorksSection />
               <TestimonialsSection />
               <TalosVisualization />
               <Demo />
               <ContactSection />
             </main>
             <Footer />
           </>
         )}
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
            <linearGradient id="gradient-border-svg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'var(--accent-orange)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'var(--accent-purple)', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
      </svg>
    </>
  );
}
export default App;