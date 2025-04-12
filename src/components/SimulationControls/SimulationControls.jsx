import React, { useState } from 'react';
import styles from './SimulationControls.module.css';

// Πρόσθεσε το isLoading prop
function SimulationControls({ onSimulateAttack, isLoading }) {
  const [attackType, setAttackType] = useState('DDoS');
  const [intensity, setIntensity] = useState(5);
  // Δεν χρειάζεται τοπικό isLoading state πλέον, το παίρνουμε από τον γονέα

  const handleIntensityChange = (event) => {
    setIntensity(event.target.value);
  };

  const handleAttackTypeChange = (event) => {
    setAttackType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Μην αλλάξεις το isLoading εδώ, ο γονέας το ελέγχει
    await onSimulateAttack(attackType, parseInt(intensity, 10)); // Στείλε τον αριθμό
  };

  return (
    <div className={styles.controlsSection}>
      <h3>Προσομοίωση Επίθεσης</h3>
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.controlOptions}>
          <div className={styles.controlGroup}>
            <label htmlFor="attack-type-select">Τύπος Επίθεσης:</label>
            <select
                id="attack-type-select"
                value={attackType}
                onChange={handleAttackTypeChange}
                disabled={isLoading} // Χρησιμοποίησε το prop
            >
              <option value="DDoS">DDoS</option>
              <option value="Ransomware">Ransomware</option>
              <option value="Phishing">Phishing</option>
              <option value="SQL Injection">SQL Injection</option>
              <option value="Malware">Malware</option>
              <option value="Zero-day Exploit">Zero-day Exploit</option>
            </select>
          </div>
          <div className={styles.controlGroup}>
            <label htmlFor="intensity-range">Ένταση ({intensity}/10):</label>
            <input
                type="range"
                id="intensity-range"
                min="1"
                max="10"
                value={intensity}
                onChange={handleIntensityChange}
                disabled={isLoading} // Χρησιμοποίησε το prop
            />
          </div>
        </div>
        <button
            type="submit"
            className={`btn danger-btn ${styles.simulateButton}`}
            disabled={isLoading} // Χρησιμοποίησε το prop
        >
          {isLoading ? 'ΕΚΤΕΛΕΙΤΑΙ...' : 'ΕΝΑΡΞΗ ΠΡΟΣΟΜΟΙΩΣΗΣ'}
        </button>
      </form>
    </div>
  );
}

export default SimulationControls;