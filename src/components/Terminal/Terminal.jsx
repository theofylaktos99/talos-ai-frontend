import React, { useEffect, useRef } from 'react';
 import styles from './Terminal.module.css';
 

 function Terminal({ lines }) {  // Δέχεται τις γραμμές ως prop
  const terminalBodyRef = useRef(null);
 

  // Auto-scroll στο κάτω μέρος όταν προστίθενται νέες γραμμές
  useEffect(() => {
  if (terminalBodyRef.current) {
  terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
  }
  }, [lines]);  // Τρέχει κάθε φορά που αλλάζει το array lines
 

  return (
  <div className={styles.terminal}>
  <div className={styles.terminalHeader}>
  <div className={styles.terminalButtons}>
  <span className={`${styles.terminalButton} ${styles.close}`}></span>
  <span className={`${styles.terminalButton} ${styles.minimize}`}></span>
  <span className={`${styles.terminalButton} ${styles.maximize}`}></span>
  </div>
  <div className={styles.terminalTitle}>TALOS A.I. CONSOLE</div>
  </div>
  <div className={styles.terminalBody} ref={terminalBodyRef}>
  {lines.map((line, index) => (
  <div key={index} className={`${styles.terminalLine} ${styles[line.type] || ''}`}>
  {/* Θα μπορούσαμε να προσθέσουμε εφέ πληκτρολόγησης εδώ αν θέλουμε */}
  {line.text}
  </div>
  ))}
  <div className={`${styles.terminalLine} ${styles.promptLine}`}>
  <span className={styles.prompt}>talos&gt;</span>
  <span className={styles.cursor}>_</span>
  </div>
  </div>
  </div>
  );
 }
 

 export default Terminal;