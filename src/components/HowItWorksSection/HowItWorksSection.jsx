// src/components/HowItWorksSection/HowItWorksSection.jsx (Corrected/Cleaned Code)
import React from 'react';
import styles from './HowItWorksSection.module.css';

// --- Simple Inline SVG Icons (Regenerated) ---
const IconDataCollection = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
 </svg>
);
const IconAiAnalysis = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12v1.5m15-1.5v1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-5.25 4.125a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-2.625.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-2.625-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
 </svg>
);
const IconThreatDetection = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
 </svg>
);
const IconAutoResponse = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
 </svg>
);
// --- End Icons ---

// Data with thematic placeholders
const processStepsData = [
  { stepNumber: 1, Icon: IconDataCollection, title: "Συλλογή Δεδομένων", description: "Ανάλυση ροών δεδομένων από όλο το εύρος της υποδομής σας: δίκτυο (NetFlow, PCAP), endpoints (EDR logs), cloud APIs, logs εφαρμογών και threat intelligence feeds." },
  { stepNumber: 2, Icon: IconAiAnalysis, title: "Ευφυής Ανάλυση AI", description: "Ο πυρήνας AI επεξεργάζεται, συσχετίζει και αναλύει τα δεδομένα, χρησιμοποιώντας αλγόριθμους ανίχνευσης ανωμαλιών, ML & ανάλυσης συμπεριφοράς για εντοπισμό ύποπτων μοτίβων." },
  { stepNumber: 3, Icon: IconThreatDetection, title: "Άμεση Ανίχνευση Απειλών", description: "Αναγνώριση και ταξινόμηση απειλών real-time, από κοινό malware έως APTs και zero-day exploits, με ελάχιστα false positives και μέγιστη ακρίβεια." },
  { stepNumber: 4, Icon: IconAutoResponse, title: "Αυτοματοποιημένη Απόκριση", description: "Ενεργοποίηση προκαθορισμένων playbooks ή δυναμικών ενεργειών απόκρισης (π.χ., απομόνωση endpoint, μπλοκάρισμα IP) για άμεσο περιορισμό της απειλής βάσει πολιτικής." }
];

function HowItWorksSection() {
  return (
    <section className={styles.howItWorksSection} id="how-it-works">
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <h2 className="section-title"> Πώς <span className="highlight">Λειτουργεί</span>; </h2>
          <p className="section-subtitle"> Η διαδικασία προστασίας του TALOS A.I. σε 4 απλά βήματα. </p>
        </div>
        <div className={styles.stepsContainer}>
          {processStepsData.map((step) => {
             // Ensure Icon is valid before rendering
             const StepIcon = step.Icon && typeof step.Icon === 'function' ? step.Icon : null;
             return (
                <div key={step.stepNumber} className={styles.stepItem}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>{String(step.stepNumber).padStart(2, '0')}</span>
                    {StepIcon && (
                      <div className={styles.iconWrapper}>
                        <StepIcon />
                      </div>
                    )}
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
export default HowItWorksSection;