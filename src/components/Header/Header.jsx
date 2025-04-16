// src/components/Header/Header.jsx (Corrected Logic and Structure)
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const logoPath = '/assets/images/logo.png'; // Βεβαιώσου ότι το path είναι σωστό

const statusMessages = [
  "SYSTEM STATUS: ALL SYSTEMS NOMINAL",
  "AI CORE MONITOR: ONLINE | THREAT LEVEL: LOW",
  "LAST NETWORK SCAN: 3ms AGO | ANOMALIES DETECTED: 0",
  "WEB3 DEFENSE SHIELD: ACTIVE",
  "THREAT INTELLIGENCE FEED: SYNCED",
  "AUTONOMOUS RESPONSE PROTOCOL: STANDBY"
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [tickerMessage, setTickerMessage] = useState(statusMessages[0]);
  const [tickerKey, setTickerKey] = useState(0); // Key to trigger CSS animation

  const toggleNav = () => setIsNavOpen(prev => !prev);
  const closeNav = () => setIsNavOpen(false);

  // Effect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // Don't hide header if nav panel is open
        if (currentScrollY > lastScrollY.current && currentScrollY > 150 && !isNavOpen) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
        lastScrollY.current = currentScrollY;
        // Add scrolled class for background change
        if (currentScrollY > 50) { setIsScrolled(true); } else { setIsScrolled(false); }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavOpen]); // Dependency ensures header doesn't hide when nav is open

  // Effect for ticker message cycling
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % statusMessages.length;
      setTickerMessage(statusMessages[currentIndex]);
      setTickerKey(prevKey => prevKey + 1); // Update key to re-trigger animation
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval
  }, []); // Run only once on mount

  // Combine classes for the header element
  const headerClasses = [
    styles.header,
    isScrolled ? styles.scrolled : '',
    isHidden ? styles.hiddenNav : '',
    isNavOpen ? styles.navOpen : ''
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
      {/* Container uses flexbox for layout */}
      <div className={`${styles.container} container`}>
        {/* Logo (Left) */}
        <div className={styles.logo}>
          <a href="/" onClick={closeNav}>
            <img src={logoPath} alt="TALOS A.I. Logo" />
          </a>
        </div>

        {/* Ticker Area (Center/Fills Space) */}
        <div className={styles.tickerContainer}>
          <p className={styles.tickerText}>
              <span key={tickerKey} className={styles.tickerTextSpan}>{tickerMessage}</span>
          </p>
        </div>

        {/* Hamburger Menu Toggle Button (Right) */}
        <button
          className={`${styles.menuToggle} ${isNavOpen ? styles.active : ''}`}
          onClick={toggleNav}
          aria-label={isNavOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={isNavOpen}
        >
           <span></span><span></span><span></span>
        </button>

        {/* Navigation Panel (Initially Hidden) */}
        <nav className={`${styles.mainNav} ${isNavOpen ? styles.active : ''}`}>
          <ul>
             {/* Links close panel on click */}
             <li><a href="#home" className={styles.mainNavLink} onClick={closeNav}>Αρχική</a></li>
             <li><a href="#features" className={styles.mainNavLink} onClick={closeNav}>Χαρακτηριστικά</a></li>
             <li><a href="#about" className={styles.mainNavLink} onClick={closeNav}>About</a></li>
             <li><a href="#how-it-works" className={styles.mainNavLink} onClick={closeNav}>Πως Λειτουργεί</a></li>
             <li><a href="#use-cases" className={styles.mainNavLink} onClick={closeNav}>Use Cases</a></li>
             <li><a href="#testimonials" className={styles.mainNavLink} onClick={closeNav}>Testimonials</a></li>
             <li><a href="#talos-viz" className={styles.mainNavLink} onClick={closeNav}>Οπτικοποίηση</a></li>
             <li><a href="#demo" className={styles.mainNavLink} onClick={closeNav}>Λειτουργία</a></li>
             <li><a href="#contact" className={styles.mainNavLink} onClick={closeNav}>Επικοινωνία</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;