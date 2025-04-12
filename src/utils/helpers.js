// src/utils/helpers.js
import * as THREE from 'three';

/**
 * Παίρνει την τιμή μιας CSS μεταβλητής από το :root.
 */
export function getCssVariable(varName, fallback) { // <-- Όνομα με κεφαλαίο V
    if (typeof window === 'undefined') return fallback;
    try {
         const value = getComputedStyle(document.documentElement).getPropertyValue(varName)?.trim();
         return value || fallback;
    } catch (e) {
        // console.error("Could not get CSS variable", e); // Προαιρετικό log
        return fallback;
    }
}

/**
 * Μετατρέπει ένα HEX χρώμα σε RGBA.
 */
export function hexToRgba(hex, alpha) {
    if (!hex) hex = '#6fa8ff';
    hex = hex.replace('#', '');
    try {
        const r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
        const g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
        const b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
        if (isNaN(r) || isNaN(g) || isNaN(b)) throw new Error("Invalid HEX");
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch (e) {
         // console.error("Error converting hex to rgba:", hex, e); // Προαιρετικό log
         return `rgba(111, 168, 255, ${alpha})`;
    }
}

/**
 * Κάνει fetch δεδομένα από ένα API με βασικό error handling.
 */
export async function fetchData(url, options = {}, context = 'data') {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
             let errorBody = `HTTP error! status: ${response.status}`;
             try {
                 const textResponse = await response.text();
                 console.error(`Non-OK response body for ${context}:`, textResponse.substring(0, 500));
                 if (textResponse.trim().toLowerCase().startsWith("<!doctype html")) { errorBody = `Received HTML instead of JSON (check backend?). Status: ${response.status}`; }
                 else { try { const jsonError = JSON.parse(textResponse); errorBody = jsonError.message || JSON.stringify(jsonError); } catch { errorBody = textResponse.substring(0, 200); } }
             } catch (readError) { /* ignore */ }
             throw new Error(errorBody);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) { return await response.json(); }
        else { console.warn(`Received non-JSON response from ${context} endpoint: ${url}`); throw new Error(`Expected JSON but received ${contentType || 'unknown content type'}`); }
    } catch (error) { console.error(`API Error (${context}):`, error.message); throw error; }
}

/**
 * Μετατρέπει συντεταγμένες Lat/Lng σε Vector3 για το Three.js.
 */
export function latLngToVector3(lat, lng, radius) {
    if (typeof THREE === 'undefined') { console.error("THREE is not defined in latLngToVector3"); return null; }
    const phi = (90 - lat) * (Math.PI / 180); const theta = (lng + 180) * (Math.PI / 180);
    const x = -radius * Math.sin(phi) * Math.cos(theta); const y = radius * Math.cos(phi); const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
}

/**
 * Επιστρέφει ένα χρώμα HEX βάσει του severity (1-10).
 */
export function getThreatColor(severity) {
    if (typeof THREE === 'undefined') { console.error("THREE is not defined in getThreatColor"); return 0xff0000; }
    severity = Math.max(1, Math.min(10, severity || 5)); const hue = 0.33 - (severity / 10) * 0.33;
    return new THREE.Color().setHSL(hue, 0.9, 0.6).getHex();
}

/**
 * Δημιουργεί ένα ShaderMaterial για το εφέ glow.
 */
export function createGlowMaterial(color, coefficient = 0.7, power = 4.5) { // <-- Όνομα με κεφαλαίο G
    if (typeof THREE === 'undefined' || !(color instanceof THREE.Color)) { console.error("THREE or valid Color object not available in createGlowMaterial"); return null; }
    const vertexShader = `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
    const fragmentShader = `varying vec3 vNormal; uniform float c; uniform float p; uniform vec3 glowColor; void main() { float intensity = pow(c - dot(vNormal, vec3(0.0, 0.0, 1.0)), p); gl_FragColor = vec4(glowColor, 1.0) * intensity * 1.3; }`;
   return new THREE.ShaderMaterial({
       uniforms: { c: { value: coefficient }, p: { value: power }, glowColor: { value: color } },
       vertexShader, fragmentShader, side: THREE.BackSide,
       blending: THREE.AdditiveBlending, transparent: true, depthWrite: false
   });
}