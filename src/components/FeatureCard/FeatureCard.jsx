// src/components/FeatureCard/FeatureCard.jsx
import React from 'react';
import styles from './FeatureCard.module.css'; // Θα δημιουργήσουμε αυτό το αρχείο CSS

function FeatureCard({ iconComponent: Icon, title, description }) {
  // Έλεγχος αν το Icon είναι έγκυρο React component πριν την εμφάνιση
  const IconComponent = typeof Icon === 'function' ? Icon : null;

  return (
    // Εφαρμόζουμε τα στυλ της κάρτας στο εξωτερικό div
    <div className={styles.card}>
      {/* Εμφάνιση του wrapper του εικονιδίου μόνο αν υπάρχει IconComponent */}
      {IconComponent && (
        <div className={styles.iconWrapper}>
          <IconComponent />
        </div>
      )}
      {/* Τίτλος */}
      <h3 className={styles.title}>{title}</h3>
      {/* Περιγραφή */}
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default FeatureCard;