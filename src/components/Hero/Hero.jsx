// src/components/Hero/Hero.jsx (Correct final version - Ensure NO conflict markers remain)
import React from 'react';
import styles from './Hero.module.css';

// Ensure path starts with / assuming assets is in public
const guardianImagePath = '/assets/images/talos-guardian.png';

function Hero() {
  // Static version, no useEffect or complex logic
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.heroLayoutContainer} container`}>
          <div className={styles.heroText}>
            <h1 className={styles.glitchText} data-text="TALOS A.I."> TALOS A.I. </h1>
            <h2> ΠΡΟΗΓΜΕΝΟΣ ΔΙΑΔΡΑΣΤΙΚΟΣ <span className={styles.highlight}>CYBER ΦΥΛΑΚΑΣ</span> </h2>
            <p> Η ασπίδα επόμενης γενιάς για το αποκεντρωμένο διαδίκτυο. Το TALOS A.I. συνδυάζει προγνωστική ανάλυση και αυτόνομη απόκριση για να θωρακίσει τα Web3 περιουσιακά σας στοιχεία από τις πιο εξελιγμένες επιθέσεις. </p>
            <div className={styles.ctaButtons}>
                <a href="#demo" className={`btn primary-btn ${styles.heroBtn}`}>ΔΕΙΤΕ ΣΕ ΔΡΑΣΗ</a>
                <a href="#features" className={`btn secondary-btn ${styles.heroBtn}`}>ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
                src={guardianImagePath}
                alt="Cybernetic guardian figure representing TALOS A.I. security" // Alt text included
                className={styles.guardianImg}
            />
          </div>
      </div>
      <div className={styles.scrollIndicator}>
          <div className={styles.mouse}></div>
      </div>
    </section>
  );
}
export default Hero;