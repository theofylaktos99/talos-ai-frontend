import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import styles from './GlobeVisualization.module.css';
// Import τη συνάρτηση αρχικοποίησης από το globe.js
// Βεβαιώσου ότι το globe.js κάνει export τη συνάρτηση initThreatGlobe
import { initThreatGlobe } from '../../js/globe'; // Προσαρμοσε το path

// Χρησιμοποιούμε forwardRef για να μπορεί το Demo component να πάρει reference στο globe instance
const GlobeVisualization = forwardRef((props, ref) => {
  const mountRef = useRef(null);
  const globeInstanceRef = useRef(null);

  // Αρχικοποίηση και cleanup του Three.js
  useEffect(() => {
    if (mountRef.current && !globeInstanceRef.current) {
      // Περνάμε το DOM element στο initThreatGlobe
      globeInstanceRef.current = initThreatGlobe(mountRef.current);
    }

    // Cleanup function όταν το component κάνει unmount
    return () => {
      globeInstanceRef.current?.dispose(); // Κάλεσε τη dispose αν υπάρχει
      globeInstanceRef.current = null;
      if (mountRef.current) {
         // Αφαίρεσε το canvas αν προστέθηκε απευθείας
         // while (mountRef.current.firstChild) {
         //   mountRef.current.removeChild(mountRef.current.firstChild);
         // }
      }
    };
  }, []); // Τρέχει μόνο μια φορά

  // Εκθέτουμε τη μέθοδο updateWithAttack στο γονικό component μέσω του ref
  useImperativeHandle(ref, () => ({
    updateWithAttack: (threatCount) => {
      globeInstanceRef.current?.updateWithAttack(threatCount);
    }
  }), []); // Το κενό array σημαίνει ότι το ref δεν αλλάζει

  return (
    <div className={styles.globeContainer}>
      <div className={styles.overlayText}>Real-time Threat Feed</div>
      {/* Το div όπου θα γίνει mount το Three.js canvas */}
      <div className={styles.globe} ref={mountRef}></div>
    </div>
  );
});

export default GlobeVisualization;