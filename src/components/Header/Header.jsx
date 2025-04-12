// src/components/Header/Header.jsx (Add Contact Link)
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const logoPath = '/assets/images/logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current && currentScrollY > 150) { setIsHidden(true); } else { setIsHidden(false); }
        lastScrollY.current = currentScrollY;
        if (currentScrollY > 50) { setIsScrolled(true); } else { setIsScrolled(false); }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hiddenNav : ''}`;

  return (
    <header className={headerClasses}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}> <a href="/"> <img src={logoPath} alt="TALOS A.I. Logo" /> </a> </div>
        <nav className={styles.mainNav}>
          <ul>
            <li><a href="#home" className={styles.mainNavLink}>Αρχική</a></li>
            <li><a href="#features" className={styles.mainNavLink}>Χαρακτηριστικά</a></li>
            <li><a href="#about" className={styles.mainNavLink}>About</a></li>
            <li><a href="#talos-viz" className={styles.mainNavLink}>Οπτικοποίηση</a></li>
            <li><a href="#demo" className={styles.mainNavLink}>Λειτουργία</a></li>
            <li><a href="#contact" className={styles.mainNavLink}>Επικοινωνία</a></li> {/* <-- ADDED LINK */}
          </ul>
        </nav>
        <a href="#demo" className={`btn primary-btn ${styles.navCtaBtn}`}> ΔΕΙΤΕ ΣΕ ΔΡΑΣΗ </a>
        <div className={styles.menuToggle}> <span></span> <span></span> <span></span> </div>
      </div>
    </header>
  );
}
export default Header;