// src/components/Demo/Demo.jsx (Separate useEffects for Globe and Stats)
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Demo.module.css';
import { initThreatGlobe } from '../../js/globe.js'; // Ensure path is correct

const STATS_API_URL = 'http://localhost:8080/api/stats';

function Demo() {
    const globeContainerRef = useRef(null);
    const globeInstanceRef = useRef(null);
    const [statsData, setStatsData] = useState(null); // Start null to show loading
    const [statsError, setStatsError] = useState(null);
    const [isLoadingStats, setIsLoadingStats] = useState(true); // Start loading

    // useCallback for fetchStats remains the same
    const fetchStats = useCallback(async () => {
        setIsLoadingStats(true);
        setStatsError(null);
        console.log("Fetching stats..."); // Keep log for debugging
        try {
            const response = await fetch(STATS_API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText || ''}`);
            }
            const data = await response.json();
            console.log("Stats received:", data);
            setStatsData(data);
        } catch (error) {
            console.error("Failed to fetch stats:", error);
            setStatsError("Δεν ήταν δυνατή η φόρτωση των στατιστικών.");
            setStatsData(null); // Clear data on error
        } finally {
            setIsLoadingStats(false);
        }
    }, []);

    // useEffect HOOK 1: Initialize and clean up the Globe
    useEffect(() => {
        let globeControls = null;
        if (globeContainerRef.current) {
             console.log("Attempting to initialize globe...");
             if(globeInstanceRef.current?.dispose) {
                console.log("Disposing previous globe instance...");
                globeInstanceRef.current.dispose();
             }
            globeControls = initThreatGlobe(globeContainerRef.current);
             if(globeControls) {
                console.log("Globe initialized successfully.");
                globeInstanceRef.current = globeControls;
             } else {
                 console.error("initThreatGlobe returned null or failed!");
             }
        } else {
            console.error("globeContainerRef.current is null or undefined.");
        }

        // Attack interval remains linked to globe lifecycle
        const attackInterval = setInterval(() => {
            if (globeInstanceRef.current?.updateWithAttack) {
                globeInstanceRef.current.updateWithAttack(Math.floor(Math.random() * 3) + 1);
            }
        }, 6000);

        // Cleanup function for globe and interval
        return () => {
            console.log("Cleaning up Globe and Attack Interval...");
            clearInterval(attackInterval);
            if (globeInstanceRef.current?.dispose) {
                console.log("Disposing globe instance on cleanup...");
                globeInstanceRef.current.dispose();
                globeInstanceRef.current = null;
            }
        };
    }, []); // Empty dependency array: Run only once on mount for globe init

    // useEffect HOOK 2: Fetch initial statistics
    useEffect(() => {
        fetchStats(); // Fetch stats once on mount
        // Optional: Set up a separate interval here if you want periodic stats fetching
        // const statsInterval = setInterval(fetchStats, 30000); // e.g., every 30s
        // return () => clearInterval(statsInterval); // Cleanup stats interval
    }, [fetchStats]); // Depend on fetchStats (which has empty deps due to useCallback)


    // Helper function for formatting time
    const formatReactionTime = (time) => {
        if (typeof time !== 'number' || isNaN(time) || time <= 0) return "---";
        return `${(time * 1000).toFixed(0)} ms`;
    };

    return (
        <section className={styles.demoSection} id="demo">
            <div className="section-header">
                <h2 className="section-title">Λειτουργία σε <span className="highlight">Δράση</span></h2>
                <p className="section-subtitle">
                   Δείτε μια προσομοίωση της παγκόσμιας ανίχνευσης απειλών και τα στατιστικά απόδοσης.
                </p>
            </div>
            <div className={`${styles.container} container`}>
                {/* Stats Display Area - Handles loading/error/data states */}
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
                    {/* Fallback if statsData is null but not loading and no error */}
                     {!statsData && !isLoadingStats && !statsError && ( <div className={styles.loadingText}>Δεν υπάρχουν δεδομένα στατιστικών.</div> )}
                </div>

                {/* Globe Container */}
                <div className={styles.globeVizContainer} ref={globeContainerRef}>
                    {/* Globe canvas should be added here by globe.js */}
                </div>
            </div>
        </section>
    );
}

export default Demo;