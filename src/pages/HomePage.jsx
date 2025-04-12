import React from 'react';
// Import τα components της αρχικής σελίδας
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import TalosVisualization from '../components/TalosVisualization/TalosVisualization';
import Demo from '../components/Demo/Demo';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TalosVisualization />
      <Demo />
    </>
  );
}
export default HomePage;