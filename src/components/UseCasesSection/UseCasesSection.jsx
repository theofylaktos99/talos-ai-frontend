// src/components/UseCasesSection/UseCasesSection.jsx (Updated Descriptions)
import React from 'react';
import styles from './UseCasesSection.module.css';

// Keep the same Icon components as before or replace with actual ones if available
const IconCloudShield = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" /></svg> );
const IconLaptopShield = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> );
const IconNetwork = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12v1.5m15-1.5v1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> );
const IconFinance = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="100%" height="100%"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> );

// Updated use cases data with more thematic text
const useCasesData = [
  {
    Icon: IconCloudShield,
    title: "Ασφάλεια Cloud Υποδομών",
    description: "Προστασία cloud-native εφαρμογών και υποδομών σε AWS, Azure & GCP. Συνεχής παρακολούθηση διαμορφώσεων (CSPM), ανίχνευση απειλών σε containers και serverless, διασφάλιση συμμόρφωσης."
  },
  {
    Icon: IconLaptopShield,
    title: "Προηγμένη Προστασία Endpoint",
    description: "Προηγμένη άμυνα EDR/XDR με AI ανάλυση συμπεριφοράς για εντοπισμό ransomware, fileless malware, zero-days και τεχνικών απόκρυψης (evasion techniques) που παρακάμπτουν τα συμβατικά εργαλεία."
  },
  {
    Icon: IconNetwork,
    title: "Ανάλυση & Ορατότητα Δικτύου",
    description: "Βαθιά ορατότητα δικτύου (NDR) με μηχανική μάθηση για ανίχνευση lateral movement, C&C επικοινωνίας, data exfiltration και ανωμαλιών που υποδηλώνουν παραβίαση."
  },
  {
    Icon: IconFinance,
    title: "Ασφάλεια για Χρηματοοικονομικά",
    description: "Εξειδικευμένη προστασία για τον χρηματοπιστωτικό τομέα. Ανίχνευση απάτης σε πραγματικό χρόνο, ασφάλεια συναλλαγών, κάλυψη απαιτήσεων PSD2/PCI-DSS και προστασία από στοχευμένες επιθέσεις."
  },
];

function UseCasesSection() {
  // JSX remains the same
  return (
    <section className={styles.useCasesSection} id="use-cases">
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <h2 className="section-title"> Περιπτώσεις <span className="highlight">Χρήσης</span> </h2>
          <p className="section-subtitle"> Πώς ο TALOS A.I. προσαρμόζεται και προστατεύει σε διάφορα σενάρια. </p>
        </div>
        <div className={styles.grid}>
          {useCasesData.map((useCase, index) => (
            <div key={index} className={styles.useCaseCard}>
              {useCase.Icon && ( <div className={styles.iconWrapper}> <useCase.Icon /> </div> )}
              <h3 className={styles.caseTitle}>{useCase.title}</h3>
              <p className={styles.caseDescription}>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default UseCasesSection;