import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageStyles.module.css';

function NotFoundPage() {
  return (
    <div className={`${styles.pageContainer} ${styles.notFound} container`}>
      <h1>404</h1>
      <h2>Η Σελίδα Δεν Βρέθηκε</h2>
      <p>Λυπούμαστε, η σελίδα που αναζητάτε δεν υπάρχει.</p>
      <Link to="/" className="btn primary-btn">Επιστροφή στην Αρχική</Link>
    </div>
  );
}
export default NotFoundPage;