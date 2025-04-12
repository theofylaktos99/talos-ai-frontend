import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm'; // Θα το φτιάξουμε
import styles from './PageStyles.module.css'; // Ένα κοινό αρχείο στυλ για τις σελίδες

function ContactPage() {
  return (
    <div className={`${styles.pageContainer} container`}>
      <div className="section-header">
        <h2 className="section-title">Επικοινωνία</h2>
        <p className="section-subtitle">Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.</p>
      </div>
      <ContactForm />
    </div>
  );
}
export default ContactPage;