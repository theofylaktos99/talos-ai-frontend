// src/components/Footer/Footer.jsx (Added Copyright)
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        {/* You can add more footer content here later - e.g., links, logo */}
        <p className={styles.copyright}>
          &copy; {currentYear} TALOS A.I. Protection Systems. All Rights Reserved. (Placeholder)
        </p>
        {/* Example: Add subtle links
        <nav className={styles.footerNav}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </nav>
        */}
      </div>
    </footer>
  );
}

export default Footer;