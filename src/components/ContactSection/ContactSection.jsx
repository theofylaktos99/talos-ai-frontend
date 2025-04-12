// src/components/ContactSection/ContactSection.jsx (Corrected/Cleaned Code)
import React from 'react';
import styles from './ContactSection.module.css';
import ContactForm from '../ContactForm/ContactForm'; // Check path is correct

// --- Simple Inline SVG Icons (Regenerated) ---
const IconLocation = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
 </svg>
);
const IconMail = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
 </svg>
);
const IconPhone = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
 </svg>
);
// --- End Icons ---

function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <h2 className="section-title"> Ελάτε σε <span className="highlight">Επαφή</span> </h2>
          <p className="section-subtitle"> Έχετε ερωτήσεις ή θέλετε να μάθετε περισσότερα; Συμπληρώστε τη φόρμα ή χρησιμοποιήστε τα παρακάτω στοιχεία. </p>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h3>Στοιχεία Επικοινωνίας</h3>
            <p> Η ομάδα μας είναι διαθέσιμη να απαντήσει στις ερωτήσεις σας και να συζητήσει πώς το TALOS A.I. μπορεί να θωρακίσει την επιχείρησή σας. </p>
            <ul>
              <li>
                 {/* Ensure Icon is valid before rendering */}
                 {typeof IconLocation === 'function' && <span className={styles.iconWrapper}><IconLocation /></span>}
                <span>TALOS A.I. HQ, Science & Tech Park of Crete, Rethymno</span>
              </li>
              <li>
                 {typeof IconMail === 'function' && <span className={styles.iconWrapper}><IconMail /></span>}
                <a href="mailto:contact@talos-aiprotect.gr">contact@talos-aiprotect.gr</a>
              </li>
              <li>
                 {typeof IconPhone === 'function' && <span className={styles.iconWrapper}><IconPhone /></span>}
                <a href="tel:+302831012345">+30 28310 12345</a>
              </li>
            </ul>
          </div>
          <div className={styles.formContainer}>
            <h3>Φόρμα Επικοινωνίας</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;