// src/components/TestimonialsSection/TestimonialsSection.jsx (Updated Quotes & Logo Placeholders)
import React from 'react';
import styles from './TestimonialsSection.module.css';

// Updated Placeholder Testimonials
const testimonialsData = [
  {
    quote: "Με το TALOS A.I., ο χρόνος απόκρισης σε κρίσιμα περιστατικά μειώθηκε κατά 90%. Η προληπτική ανίχνευση άλλαξε τους κανόνες του παιχνιδιού για την ομάδα μας.",
    author: "Άννα Παπαδάκη",
    role: "CISO @ Global Innovations"
  },
  {
    quote: "Η ορατότητα που αποκτήσαμε σε όλο το υβριδικό μας περιβάλλον είναι πρωτοφανής. Το TALOS εντοπίζει απειλές που τα προηγούμενα 5 εργαλεία μας έχαναν.",
    author: "Γιώργος Δημητρίου",
    role: "IT Director @ SecureNet Solutions"
  },
  {
    quote: "Η ενσωμάτωση με την υπάρχουσα SIEM πλατφόρμα μας ήταν απρόσκοπτη. Η AI μηχανή του TALOS παρέχει actionable intelligence, όχι απλώς ατελείωτα alerts.",
    author: "Μαρία Κωστοπούλου",
    role: "Head of Infrastructure @ Digital Ventures"
  }
];

// Placeholder Logos - Using styled divs instead of just text
const clientLogosData = [
  { name: "TECHSOLUTIONS", styleVar: "--accent-blue" },
  { name: "FINSECURE", styleVar: "--accent-cyan" },
  { name: "DATA PROTECT", styleVar: "--accent-purple" },
  { name: "CLOUD PARTNER", styleVar: "--accent-orange" },
  { name: "GLOBAL INNOV.", styleVar: "--accent-green" }
];


function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <h2 className="section-title"> Τι Λένε οι <span className="highlight">Πελάτες</span> Μας </h2>
          <p className="section-subtitle"> Η εμπιστοσύνη και η επιτυχία των συνεργατών μας είναι η καλύτερη απόδειξη. </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonial.author}</span>
                <span className={styles.authorRole}>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className={styles.logosHeader}>Μας εμπιστεύονται:</h3>

        <div className={styles.logosContainer}>
          {clientLogosData.map((logo, index) => (
            // Use a styled div for logo placeholder
            <div key={index} className={styles.logoItem} style={{ '--logo-color': `var(${logo.styleVar})` }}>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;