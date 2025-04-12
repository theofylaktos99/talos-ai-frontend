// src/components/AboutSection/AboutSection.jsx (Expanded Content)
import React from 'react';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <h2 className="section-title">
             <span className="highlight">TALOS A.I.</span> - Η Εξέλιξη της Άμυνας
          </h2>
          <p className="section-subtitle">
            Κατανοώντας την τεχνολογία πίσω από την ασφάλειά σας.
          </p>
        </div>

        <div className={styles.content}>
          <h3>Η Αποστολή Μας</h3>
          <p>
            Σε έναν κόσμο όπου οι ψηφιακές απειλές γίνονται όλο και πιο σύνθετες και επίμονες, η αποστολή του TALOS A.I. είναι ξεκάθαρη: να παρέχουμε την πιο προηγμένη, ευφυή και προσαρμοστική κυβερνοασφάλεια. Δεσμευόμαστε να προστατεύουμε τα κρίσιμα δεδομένα, τις εφαρμογές και τις υποδομές των πελατών μας, δίνοντάς τους τη δυνατότητα να καινοτομούν και να αναπτύσσονται με σιγουριά. Αξιοποιούμε τη δύναμη της τεχνητής νοημοσύνης για να δημιουργήσουμε ένα ανθεκτικό και ασφαλές ψηφιακό περιβάλλον.
          </p>

          <h3>Το Όραμά Μας</h3>
          <p>
            Οραματιζόμαστε έναν ψηφιακό κόσμο όπου η ασφάλεια δεν είναι εμπόδιο, αλλά καταλύτης για την πρόοδο. Στοχεύουμε σε ένα μέλλον όπου η άμυνα εξελίσσεται προληπτικά, ταχύτερα από την επίθεση, χάρη σε αυτόνομα, ευφυή συστήματα όπως το TALOS A.I. που προβλέπουν, αναλύουν και εξουδετερώνουν τις απειλές σε πραγματικό χρόνο, συχνά πριν καν εκδηλωθούν πλήρως. Επιδιώκουμε να είμαστε ο σιωπηλός, πάντα σε εγρήγορση, ψηφιακός φύλακας που επιτρέπει στις επιχειρήσεις να επικεντρωθούν στους στόχους τους.
          </p>

          <h3>Τεχνολογική Προσέγγιση</h3>
          <p>
            Η ισχύς του TALOS A.I. πηγάζει από τη συνέργεια πολλαπλών τεχνολογιών αιχμής που λειτουργούν αρμονικά για να παρέχουν πολυεπίπεδη προστασία.
          </p>
          <h4>Προηγμένοι Αλγόριθμοι AI/ML</h4>
          <p>
            Χρησιμοποιούμε ένα εξελιγμένο σύνολο αλγορίθμων μηχανικής μάθησης (Machine Learning) και βαθιάς μάθησης (Deep Learning). Αυτοί οι αλγόριθμοι εκπαιδεύονται συνεχώς σε τεράστιους όγκους ανωνυμοποιημένων δεδομένων κυκλοφορίας και απειλών, επιτρέποντας στο σύστημα να αναγνωρίζει εξαιρετικά πολύπλοκα και συχνά αφανή μοτίβα που σχετίζονται με κακόβουλες δραστηριότητες. Η ικανότητα για μη επιβλεπόμενη μάθηση (unsupervised learning) μας επιτρέπει να εντοπίζουμε νέες και άγνωστες παραλλαγές απειλών (zero-day exploits) χωρίς να βασιζόμαστε αποκλειστικά σε γνωστές υπογραφές.
          </p>
          <h4>Ανάλυση Συμπεριφοράς & Ανίχνευση Ανωμαλιών</h4>
          <p>
            Αντί να ψάχνουμε μόνο για γνωστές απειλές, το TALOS A.I. επικεντρώνεται στην κατανόηση της "κανονικής" συμπεριφοράς κάθε συστήματος, δικτύου ή χρήστη. Δημιουργούμε δυναμικά προφίλ αναφοράς (baselines) και παρακολουθούμε συνεχώς για αποκλίσεις από αυτά. Οποιαδήποτε σημαντική ανωμαλία – είτε πρόκειται για ασυνήθιστη κίνηση δεδομένων, μη εξουσιοδοτημένη πρόσβαση, ή περίεργη δραστηριότητα διεργασιών – ενεργοποιεί συναγερμούς και μηχανισμούς απόκρισης. Αυτή η προσέγγιση είναι ιδιαίτερα αποτελεσματική έναντι εσωτερικών απειλών και στοχευμένων επιθέσεων.
          </p>
          <h4>Ενοποίηση Δεδομένων Απειλών (Threat Intelligence Integration)</h4>
          <p>
            Το TALOS A.I. δεν λειτουργεί μεμονωμένα. Ενσωματώνει και συσχετίζει συνεχώς δεδομένα από πολλαπλές πηγές πληροφοριών για απειλές (Threat Intelligence Feeds) παγκοσμίου κύρους. Αυτό μας επιτρέπει να εμπλουτίζουμε την τοπική ανάλυση με το παγκόσμιο πλαίσιο, αναγνωρίζοντας δείκτες συμβιβασμού (Indicators of Compromise - IoCs) και τακτικές, τεχνικές και διαδικασίες (TTPs) γνωστών παραγόντων απειλής, ενισχύοντας την ακρίβεια και την ταχύτητα της ανίχνευσης.
          </p>

          <h3>Βασικά Πλεονεκτήματα</h3>
           <h4>Προληπτική Άμυνα</h4>
          <p>
            Με την ικανότητα πρόβλεψης και ανίχνευσης ανωμαλιών, το TALOS A.I. συχνά αναχαιτίζει τις επιθέσεις στα αρχικά τους στάδια, πριν προλάβουν να κλιμακωθούν και να προκαλέσουν σημαντική ζημιά, μειώνοντας δραστικά την επιφάνεια επίθεσης.
          </p>
          <h4>Προσαρμοστικότητα</h4>
          <p>
             Το σύστημα δεν είναι στατικό. Μαθαίνει και προσαρμόζεται διαρκώς στο μεταβαλλόμενο τοπίο των απειλών και στο συγκεκριμένο περιβάλλον του κάθε πελάτη, διασφαλίζοντας ότι η άμυνα παραμένει αποτελεσματική μακροπρόθεσμα.
          </p>
          <h4>Αυτοματοποίηση & Ταχύτητα</h4>
          <p>
            Η αυτοματοποιημένη ανάλυση και απόκριση μειώνουν δραστικά τον χρόνο που μεσολαβεί από την ανίχνευση έως την εξουδετέρωση (Mean Time to Detect - MTTD & Mean Time to Respond - MTTR), ελαχιστοποιώντας το παράθυρο ευκαιρίας για τους επιτιθέμενους και απελευθερώνοντας το πολύτιμο ανθρώπινο δυναμικό ασφαλείας.
          </p>
          <h4>Ολιστική Ορατότητα</h4>
          <p>
            Παρέχουμε μια ενοποιημένη εικόνα της κατάστασης ασφαλείας σε ολόκληρη την ψηφιακή υποδομή, από τα τελικά σημεία (endpoints) έως το cloud, διευκολύνοντας την κατανόηση των κινδύνων και τη λήψη τεκμηριωμένων αποφάσεων.
          </p>

          <h3>Ανάπτυξη & Ασφάλεια</h3>
          <h4>Ευέλικτες Επιλογές Ανάπτυξης</h4>
          <p>
            Κατανοούμε ότι κάθε οργανισμός έχει διαφορετικές ανάγκες. Το TALOS A.I. προσφέρεται με ευέλικτα μοντέλα ανάπτυξης, συμπεριλαμβανομένων λύσεων cloud (SaaS), on-premise, ή υβριδικών μοντέλων, για να ταιριάζει απόλυτα στην υπάρχουσα υποδομή και τις απαιτήσεις σας.
          </p>
          <h4>Ασφάλεια Δεδομένων & Συμμόρφωση</h4>
          <p>
            Η ασφάλεια και η ιδιωτικότητα των δεδομένων σας είναι η ύψιστη προτεραιότητά μας. Η πλατφόρμα έχει σχεδιαστεί με αρχές "security-by-design" και "privacy-by-design", τηρώντας αυστηρά πρότυπα ασφαλείας και βοηθώντας τους οργανισμούς να ανταποκριθούν στις απαιτήσεις κανονιστικής συμμόρφωσης (όπως GDPR, κ.λπ.).
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;