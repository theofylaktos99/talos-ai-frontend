// src/main.jsx (Reverted - No Router, WITH GSAP)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Αφαιρέθηκε το import { BrowserRouter }

// --- GSAP Integration ---
// Επαναφέρουμε το GSAP αν το είχαμε απεγκαταστήσει/αφαιρέσει
import { gsap } from "gsap";
// Import και εγγράφουμε το ScrollTrigger, μπορεί να χρειαστεί για άλλα animations αργότερα
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// -----------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Δεν υπάρχει BrowserRouter */}
    <App />
  </React.StrictMode>,
);