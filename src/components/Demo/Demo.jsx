// src/components/Demo/Demo.jsx (FIXED: Moved helper function inside component)
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Demo.module.css';
// No more globe import

const STATS_API_URL = 'http://localhost:8080/api/stats';

// Helper arrays for random log generation
const logTypes = ['ALERT', 'INFO', 'OK', 'WARN'];
const logActions = ['Blocked', 'Analyzed', 'Allowed', 'Neutralized', 'Investigating', 'Logged', 'Isolated'];
const logSources = ['1.2.3.4 (CN)', '5.6.7.8 (RU)', '9.10.11.12 (US)', '13.14.15.16 (KP)', '17.18.19.20 (IR)', '21.22.23.24 (UA)', '25.26.27.28 (DE)'];
const logMessages = [ 'Potential DDoS Flood Detected', 'Anomalous Login Pattern Observed', 'Malware Signature Matched', 'Outbound C&C Communication Attempt', 'System Scan Completed', 'Policy Update Applied', 'SQL Injection Attempt Prevented', 'Zero-Day Exploit Mitigated', 'Suspicious File Transfer', 'Firewall Rule Triggered', 'User Authentication Failure' ];

function Demo() {
    const [statsData, setStatsData] = useState(null);
    const [statsError, setStatsError] = useState(null);
    const [isLoadingStats, setIsLoadingStats] = useState(true);
    const [logEntries, setLogEntries] = useState([]);
    const logContainerRef = useRef(null);

    // Function to get CSS class based on log type - MOVED INSIDE
    const getLogEntryClass = useCallback((type) => {
        switch (type) {
            case 'ALERT': return styles.alert;
            case 'WARN': return styles.warn;
            case 'OK': return styles.ok;
            case 'INFO':
            default: return styles.info;
        }
    }, []); // Empty dependency array, styles object is stable

    // Function to fetch stats
    const fetchStats = useCallback(async () => {
        setIsLoadingStats(true); setStatsError(null);
        console.log("Fetching stats...");
        try {
            const response = await fetch(STATS_API_URL);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            console.log("Stats received:", data);
            setStatsData(data);
        } catch (error) {
            console.error("Failed to fetch stats:", error);
            setStatsError("Δεν ήταν δυνατή η φόρτωση των στατιστικών.");
            setStatsData(null);
        } finally {
            setIsLoadingStats(false);
        }
    }, []);

    // useEffect for fetching stats
    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    // useEffect for generating log entries
    useEffect(() => {
        const addLogEntry = () => {
            const randomType = logTypes[Math.floor(Math.random() * logTypes.length)];
            const newMessage = {
                id: Date.now() + Math.random(), timestamp: new Date(), type: randomType,
                message: logMessages[Math.floor(Math.random() * logMessages.length)],
                source: logSources[Math.floor(Math.random() * logSources.length)],
                action: logActions[Math.floor(Math.random() * logActions.length)]
            };
            setLogEntries(prev => [newMessage, ...prev.slice(0, 19)]);
        };
        // Add some initial entries
        for(let i=0; i<5; i++) {
            setTimeout(addLogEntry, i * 100); // Stagger initial entries slightly
        }
        const logInterval = setInterval(addLogEntry, 2500);
        return () => clearInterval(logInterval);
    }, []);

    // Helper function for formatting time
    const formatReactionTime = (time) => {
        if (typeof time !== 'number' || isNaN(time) || time <= 0) return "---";
        return `${(time * 1000).toFixed(0)} ms`;
    };

    return (
        <section className={styles.demoSection} id="demo">
            <div className="section-header">
                <h2 className="section-title">Λειτουργία σε <span className="highlight">Δράση</span></h2>
                <p className="section-subtitle"> Παρακολουθήστε τα στατιστικά απόδοσης και μια προσομοίωση της ροής συμβάντων ασφαλείας. </p>
            </div>
            <div className={`${styles.container} container`}>
                {/* Stats Area */}
                <div className={styles.statsContainer}>
                    {isLoadingStats && ( <div className={styles.loadingText}>Φόρτωση στατιστικών...</div> )}
                    {statsError && !isLoadingStats && ( <div className={styles.errorBox}>{statsError}</div> )}
                    {statsData && !isLoadingStats && !statsError && (
                        <>
                            <div className={styles.statItem}> <span className={styles.statValue}>{statsData.threatsToday?.toLocaleString() ?? '---'}</span> <span className={styles.statLabel}>Απειλές Σήμερα</span> </div>
                            <div className={styles.statItem}> <span className={styles.statValue}>{statsData.threatsNeutralized?.toLocaleString() ?? '---'}</span> <span className={styles.statLabel}>Εξουδετερώθηκαν</span> </div>
                            <div className={styles.statItem}> <span className={styles.statValue}>{formatReactionTime(statsData.reactionTime)}</span> <span className={styles.statLabel}>Χρόνος Απόκρισης</span> </div>
                            <div className={styles.statItem}> <span className={styles.statValue} style={{ color: 'var(--accent-green)' }}>{statsData.securityLevel ?? '---'}</span> <span className={styles.statLabel}>Επίπεδο Ασφαλείας</span> </div>
                        </>
                    )}
                    {!statsData && !isLoadingStats && !statsError && ( <div className={styles.loadingText}>Δεν υπάρχουν δεδομένα στατιστικών.</div> )}
                </div>

                {/* Threat Log Container */}
                <div className={styles.threatLogContainer} ref={logContainerRef}>
                    <div className={styles.logHeader}>Live Activity Log</div>
                    <div className={styles.logEntriesWrapper}>
                        {logEntries.length === 0 && !isLoadingStats && <p className={styles.noLogs}>Αναμονή για συμβάντα...</p> }
                        {logEntries.map(entry => (
                            // Use the helper function (now defined inside) to get the class
                            <div key={entry.id} className={`${styles.logEntry} ${getLogEntryClass(entry.type)}`}>
                                <span className={styles.logTimestamp}>{entry.timestamp.toLocaleTimeString()}</span>
                                <span className={styles.logType}>[{entry.type}]</span>
                                <span className={styles.logMessage}>{entry.message}</span>
                                <span className={styles.logDetails}>(Src: {entry.source} | Act: {entry.action})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Demo;