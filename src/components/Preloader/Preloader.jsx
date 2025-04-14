
// src/components/Preloader/Preloader.jsx (FIXED Syntax Error - Removed Semicolon)
import React, { useState, useEffect, useRef } from 'react';
import styles from './Preloader.module.css';

// Inline Shield Icon Component
const IconShieldCheck = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
 </svg>
) // <<< REMOVED SEMICOLON FROM HERE

// Message Sequences (Adjusted timing for ~4.5s duration)
const welcomeMessages = [
    { text: "INITIALIZING TALOS A.I. CORE...", delay: 100 },
    { text: "ACCESSING WEB3 SECURITY GRID...", delay: 1500 },
    { text: "ΣΥΣΤΗΜΑ ΕΤΟΙΜΟ.", delay: 2900 },
    { text: "ΚΑΛΩΣ ΟΡΙΣΑΤΕ ΣΤΗΝ ΕΠΟΧΗ ΤΗΣ ΕΥΦΥΟΥΣ ΑΜΥΝΑΣ", delay: 3700 }
];
const finalTagline = "TALOS A.I. - Η ΑΣΠΙΔΑ ΣΑΣ ΣΤΟ WEB3";

function Preloader({ isLoading }) {
  const [currentWelcomeText, setCurrentWelcomeText] = useState('');
  const [showTagline, setShowTagline] = useState(false);
  const [showShield, setShowShield] = useState(false);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    if (isLoading) {
        setCurrentWelcomeText('');
        setShowTagline(false);
        setShowShield(false);

        welcomeMessages.forEach((msg) => {
            const timeoutId = setTimeout(() => { setCurrentWelcomeText(msg.text); }, msg.delay);
            timeoutsRef.current.push(timeoutId);
        });

        // Show tagline (e.g., 4000ms for 4500ms total duration)
        const taglineTimeout = setTimeout(() => { setShowTagline(true); }, 4000);
        timeoutsRef.current.push(taglineTimeout);

        // Show shield shortly after tagline (e.g., 4200ms)
        const shieldTimeout = setTimeout(() => { setShowShield(true); }, 4200);
        timeoutsRef.current.push(shieldTimeout);

    } else {
        // Ensure final state is visible just before fade starts
        setCurrentWelcomeText(welcomeMessages[welcomeMessages.length - 1].text);
        setShowTagline(true);
        setShowShield(true);
    }

    // Cleanup function
    return () => { timeoutsRef.current.forEach(clearTimeout); };
  }, [isLoading]);

  return (
    <div className={`${styles.preloaderContainer} ${!isLoading ? styles.hidden : ''}`}>
       <div className={styles.welcomeArea}>
           <p className={styles.welcomeMessage}>{currentWelcomeText}</p>
           <div className={styles.welcomeSeparator}></div>
           <div className={styles.taglineShieldContainer} >
               <p className={`${styles.tagline} ${showTagline ? styles.visible : ''}`}>
                   {finalTagline}
               </p>
               <div className={`${styles.shieldIcon} ${showShield ? styles.visible : ''}`}>
                    <IconShieldCheck />
               </div>
           </div>
       </div>
      <div className={styles.preloaderContent}>
        <div className={styles.cityscape}>
           <div className={styles.fortress}></div>
           <div className={styles.buildings}>
             {[...Array(12)].map((_, i) => ( <div key={i} className={styles.building} style={{ height: `${40 + Math.random() * 60}px`, animationDelay: `${i * 0.15}s` }}></div> ))}
           </div>
        </div>
        <div className={styles.circuitContainer}><div className={styles.circuit}></div></div>
        <div className={styles.loadingRing}>
             <div className={`${styles.ring} ${styles.outer}`}></div>
             <div className={`${styles.ring} ${styles.inner}`}></div>
              <div className={styles.textRing}>
                {Array.from("LOADING·WEB3·EXPERIENCE·").map((char, i) => (
                  <span key={i} style={{ transform: `rotate(${i * (360 / 25)}deg) translateY(-110px)` }} >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
             </div>
        </div>
        <div className={styles.pulsingSphere}><div className={styles.sphereCore}></div><div className={styles.sphereRipple}></div><div className={styles.sphereRipple} style={{ animationDelay: '0.5s' }}></div></div>
        <div className={styles.loadingProgress}><div className={styles.progressBar}></div></div>
      </div>
    </div>
  );
}

export default Preloader;