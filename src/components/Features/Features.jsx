// src/components/Features/Features.jsx (Updated Descriptions)
import React from 'react';
import styles from './Features.module.css';
import FeatureCard from '../FeatureCard/FeatureCard';
import IconShield from '../Icons/IconShield';
import IconBrain from '../Icons/IconBrain';
import IconUsers from '../Icons/IconUsers';
import IconCheckCircle from '../Icons/IconCheckCircle';

// Updated thematic placeholder descriptions
const featuresData = [
  {
    Icon: IconShield,
    title: 'Ευφυής Ανίχνευση Απειλών',
    description: 'Αναγνωρίζει και εξουδετερώνει γνωστές και άγνωστες απειλές σε πραγματικό χρόνο, αναλύοντας δισεκατομμύρια σημάτων δικτύου και συμπεριφοράς με τη δύναμη της AI.'
  },
  {
    Icon: IconBrain,
    title: 'Προσαρμοστική Μάθηση',
    description: 'Εξελίσσεται διαρκώς μέσω deep learning, προσαρμόζοντας τις άμυνές του αυτόματα στις νέες τακτικές των επιτιθέμενων και στο μοναδικό περιβάλλον σας.'
  },
  {
    Icon: IconUsers,
    title: 'Προσωποποιημένη Άμυνα',
    description: 'Δημιουργεί δυναμικά προφίλ κινδύνου και εφαρμόζει εξατομικευμένες πολιτικές ασφαλείας για κάθε κρίσιμο πόρο, από το endpoint έως το cloud.'
  },
  {
    Icon: IconCheckCircle,
    title: 'Αυτοματοποιημένη Απόκριση',
    description: 'Εκτελεί αυτόνομες ενέργειες περιορισμού και εξουδετέρωσης, μειώνοντας τον χρόνο αντίδρασης (MTTR) σε χιλιοστά του δευτερολέπτου και ελαχιστοποιώντας τον αντίκτυπο.'
  },
];

function Features() {
  // JSX structure remains the same
  return (
    <section className={styles.featuresSection} id="features">
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <h2 className="section-title"> Βασικά <span className="highlight">Χαρακτηριστικά</span> </h2>
          <p className="section-subtitle"> Πώς ο TALOS A.I. ενισχύει την ψηφιακή σας ασφάλεια. </p>
        </div>
        <div className={styles.grid}>
          {featuresData.map((feature) => (
             <FeatureCard
                key={feature.title}
                iconComponent={feature.Icon}
                title={feature.title}
                description={feature.description}
              />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;