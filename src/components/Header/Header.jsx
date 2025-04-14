// src/components/Header/Header.jsx (Ensuring correct logo path)
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

// Correct absolute path from 'public' folder
const logoPath = '/assets/images/logo.png';

function Header() {
  // ... (rest of the component code remains the same as the working version) ...
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => { /* ... scroll logic ... */ };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hiddenNav : ''}`;

  return (
    <header className={headerClasses}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logoPath} alt="TALOS A.I. Logo" /> {/* Uses logoPath */}
          </a>
        </div>
        <nav className={styles.mainNav}>
          <ul> {/* Ensure links are correct */}
            <li><a href="#home" className={styles.mainNavLink}>Αρχική</a></li>
            <li><a href="#features" className={styles.mainNavLink}>Χαρακτηριστικά</a></li>
            <li><a href="#about" className={styles.mainNavLink}>About</a></li>
            <li><a href="#how-it-works" className={styles.mainNavLink}>Πως Λειτουργεί</a></li>
            <li><a href="#use-cases" className={styles.mainNavLink}>Use Cases</a></li>
            <li><a href="#testimonials" className={styles.mainNavLink}>Testimonials</a></li>
            <li><a href="#talos-viz" className={styles.mainNavLink}>Οπτικοποίηση</a></li>
            <li><a href="#demo" className={styles.mainNavLink}>Λειτουργία</a></li>
            <li><a href="#contact" className={styles.mainNavLink}>Επικοινωνία</a></li>
          </ul>
        </nav>
        <a href="#demo" className={`btn primary-btn ${styles.navCtaBtn}`}> ΔΕΙΤΕ ΣΕ ΔΡΑΣΗ </a>
        <div className={styles.menuToggle}> <span></span> <span></span> <span></span> </div>
      </div>
    </header>
  );
}
export default Header;