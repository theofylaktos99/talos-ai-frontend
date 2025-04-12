import React from 'react';
import styles from './ThreatStats.module.css';

function StatCard({ title, value, levelClass = '' }) {
    // Βελτιωμένη εμφάνιση για '--'
    const displayValue = (value !== null && value !== undefined && value !== '') ? value : '--';
    return (
        <div className={styles.statCard}>
          <h4>{title}</h4>
          <div className={`${styles.statValue} ${levelClass ? styles[levelClass] : ''}`}>
             {displayValue}
          </div>
        </div>
    );
}

function ThreatStats({ stats, loading, error }) {
     // Log των props που λαμβάνει το component
     console.log('ThreatStats props:', { stats, loading, error }); // <-- DEBUG LOG

    const getLevelClass = (level) => {
        if (!level) return 'UNKNOWN'; // Επέστρεψε κλάση για null/undefined
         switch(level.toUpperCase()) {
             case 'ΚΡΙΣΙΜΟ': return 'CRITICAL';
             case 'ΥΨΗΛΟ': return 'HIGH';
             case 'ΜΕΤΡΙΟ': return 'MEDIUM';
             case 'ΧΑΜΗΛΟ': return 'LOW';
             // Αν έρθει Αγγλικό κατά λάθος
             case 'CRITICAL': return 'CRITICAL';
             case 'HIGH': return 'HIGH';
             case 'MEDIUM': return 'MEDIUM';
             case 'LOW': return 'LOW';
             default: return 'UNKNOWN'; // Για άγνωστες τιμές
         }
    }

    // Εμφάνιση κατάστασης φόρτωσης ή σφάλματος
    if (loading) {
        return <div className={styles.statsGrid}><p className={styles.loadingText}>Loading Stats...</p></div>;
    }
    if (error) {
         return <div className={styles.statsGrid}><p className={styles.errorText}>Error Loading Stats: {error}</p></div>;
    }
    // Αν δεν φορτώνει και δεν υπάρχει σφάλμα, αλλά τα stats είναι null/κενά, δείξε μήνυμα
     if (!stats || Object.keys(stats).length === 0) {
        return <div className={styles.statsGrid}><p className={styles.loadingText}>No stats data available.</p></div>;
     }

    // Κανονική εμφάνιση στατιστικών
    return (
        <div className={styles.statsGrid}>
            <StatCard title="Απειλές (24ωρο)" value={stats.threatsToday} />
            <StatCard title="Αντιμετωπίστηκαν" value={stats.threatsNeutralized} />
            <StatCard title="Μέσος Χρόνος Απόκρισης" value={stats.reactionTime !== undefined ? `${stats.reactionTime}s` : undefined} />
            <StatCard
                title="Επίπεδο Ασφάλειας"
                value={stats.securityLevel}
                levelClass={getLevelClass(stats.securityLevel)}
            />
        </div>
    );
}

export default ThreatStats;