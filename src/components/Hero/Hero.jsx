<<<<<<< Updated upstream
// src/components/Hero/Hero.jsx (Added Alt Text)
=======
// src/components/Hero/Hero.jsx (Ensuring correct image path)
>>>>>>> Stashed changes
import React from 'react';
import styles from './Hero.module.css';

const guardianImagePath = '/assets/images/talos-guardian.png';

function Hero() {
<<<<<<< Updated upstream
  // This is the static version with side-by-side layout
=======
  // Static version
>>>>>>> Stashed changes
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.heroLayoutContainer} container`}>
          <div className={styles.heroText}>
            {/* This H1 is likely the main heading for the page */}
            <h1 className={styles.glitchText} data-text="TALOS A.I."> TALOS A.I. </h1>
            {/* This H2 acts as a subheading/tagline for the Hero */}
            <h2> ΠΡΟΗΓΜΕΝΟΣ ΔΙΑΔΡΑΣΤΙΚΟΣ <span className={styles.highlight}>CYBER ΦΥΛΑΚΑΣ</span> </h2>
            <p> Η ασπίδα επόμενης γενιάς για το αποκεντρωμένο διαδίκτυο. Το TALOS A.I. συνδυάζει προγνωστική ανάλυση και αυτόνομη απόκριση για να θωρακίσει τα Web3 περιουσιακά σας στοιχεία από τις πιο εξελιγμένες επιθέσεις. </p>
            <div className={styles.ctaButtons}> <a href="#demo" className={`btn primary-btn ${styles.heroBtn}`}>ΔΕΙΤΕ ΣΕ ΔΡΑΣΗ</a> <a href="#features" className={`btn secondary-btn ${styles.heroBtn}`}>ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ</a> </div>
          </div>
          <div className={styles.heroImage}>
             {/* ADDED ALT TEXT HERE */}
            <img
<<<<<<< Updated upstream
                src={guardianImagePath}
                // Περιγραφικό Alt Text στα Αγγλικά (σύνηθες) ή Ελληνικά
=======
                src={guardianImagePath} // Uses guardianImagePath
>>>>>>> Stashed changes
                alt="Cybernetic guardian figure representing TALOS A.I. security"
                className={styles.guardianImg}
            />
          </div>
      </div>
      <div className={styles.scrollIndicator}> <div className={styles.mouse}></div> </div>
    </section>
  );
}
export default Hero;