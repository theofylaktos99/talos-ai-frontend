import React, { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.css';
// Import τη συνάρτηση αρχικοποίησης
import { initParticles } from '../../js/particles.js'; // Προσαρμοσε το path

function ParticlesBackground() {
  const containerRef = useRef(null); // Ref για το div που θα περιέχει το canvas

  useEffect(() => {
    let particlesInstance = null; // Για να κρατάμε την επιστρεφόμενη τιμή

    if (containerRef.current) {
      // Καλούμε το initParticles και περνάμε το DOM element
      particlesInstance = initParticles(containerRef.current);
    }

    // Η συνάρτηση cleanup που θα τρέξει όταν το component κάνει unmount
    return () => {
      particlesInstance?.cleanup(); // Κάλεσε τη cleanup που επιστρέφει το initParticles
    };
  }, []); // Το κενό array σημαίνει ότι τρέχει μόνο μια φορά (mount/unmount)

  return (
    // Αυτό το div θα χρησιμοποιηθεί από το particles.js για να βάλει το canvas
    <div ref={containerRef} className={styles.particleContainer}></div>
  );
}

export default ParticlesBackground;