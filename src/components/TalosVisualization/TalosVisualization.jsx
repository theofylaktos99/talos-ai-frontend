// src/components/TalosVisualization/TalosVisualization.jsx (Implementing Tesseract)
import React, { useEffect, useRef } from 'react';
import styles from './TalosVisualization.module.css';
import * as THREE from 'three';
// Δεν χρειαζόμαστε πια helpers εδώ (εκτός αν έρθουν από utils)
// import { getCssVar, createGlowMaterial } from '../../utils/helpers.js';

function TalosVisualization() {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // --- Μεταβλητές Three.js Scope ---
    let scene, camera, renderer, clock;
    let ambientLight, pointLight1; // Απλοποιημένος φωτισμός
    let tesseractLines; // Το αντικείμενο LineSegments για το tesseract
    let tesseractGeometry; // Η γεωμετρία που θα ενημερώνουμε
    let isComponentMounted = true;

    // --- Tesseract Logic (Μεταφρασμένο από Python) ---

    // 1. Ορισμός κορυφών 4D (ως THREE.Vector4)
    const points4D = [];
    for (let i = 0; i < 16; i++) {
        points4D.push(new THREE.Vector4(
            (i & 1) ? 1 : -1,
            (i & 2) ? 1 : -1,
            (i & 4) ? 1 : -1,
            (i & 8) ? 1 : -1
        ));
    }

    // 2. Ορισμός ακμών (ποιες κορυφές συνδέονται)
    const edges = [];
    for (let i = 0; i < points4D.length; i++) {
        for (let j = i + 1; j < points4D.length; j++) {
            // Μέτρησε πόσες συντεταγμένες διαφέρουν
            let diffCount = 0;
            if (points4D[i].x !== points4D[j].x) diffCount++;
            if (points4D[i].y !== points4D[j].y) diffCount++;
            if (points4D[i].z !== points4D[j].z) diffCount++;
            if (points4D[i].w !== points4D[j].w) diffCount++;
            // Αν διαφέρει μόνο μία συντεταγμένη, είναι ακμή
            if (diffCount === 1) {
                edges.push(i, j); // Πρόσθεσε τα indices της ακμής
            }
        }
    }

    // 3. Συνάρτηση Περιστροφής 4D
    // Δημιουργεί έναν πίνακα περιστροφής 4x4 για ένα δεδομένο επίπεδο
    function create4DRotationMatrix(angle, plane1, plane2) {
        const rot = new THREE.Matrix4(); // Χρησιμοποιούμε Matrix4 του Three.js
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        // Τα στοιχεία του πίνακα ορίζονται κατά στήλη, μετά κατά γραμμή (column-major)
        // matrix.elements[ στήλη * 4 + γραμμή ]
        rot.elements[plane1 * 4 + plane1] = cos;
        rot.elements[plane2 * 4 + plane1] = -sin; // Προσοχή στη σειρά: στοιχείο [γραμμή, στήλη]
        rot.elements[plane1 * 4 + plane2] = sin;
        rot.elements[plane2 * 4 + plane2] = cos;
        return rot;
    }

    // 4. Συνάρτηση Προβολής 4D -> 3D
    const projectionDistance = 2.5; // Απόσταση προβολής από τον κώδικα Python
    function project4Dto3D(point4D) {
        // Προοπτική προβολή
        const wFactor = 1 / (projectionDistance - point4D.w);
        return new THREE.Vector3(
            point4D.x * wFactor,
            point4D.y * wFactor,
            point4D.z * wFactor
        );
    }

    // ------------------------------------------------------

    if (!mountRef.current) return;
    const container = mountRef.current;

    // --- Συνάρτηση Αρχικοποίησης ---
    const initThreeScene = () => {
        if (!container || container.clientWidth === 0 || container.clientHeight === 0) {
            if (isComponentMounted) setTimeout(initThreeScene, 100); return false;
        }
        while (container.firstChild) { container.removeChild(container.firstChild); }

        scene = new THREE.Scene();
        clock = new THREE.Clock();
        camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 100); // Προσαρμογή far plane
        camera.position.set(0, 0, 4); // Λίγο πιο κοντά
        camera.lookAt(scene.position);

        try {
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);
        } catch (error) { console.error("WebGL Error:", error); return false; }

        // Lighting (Απλό)
        ambientLight = new THREE.AmbientLight(0xddddff, 1.5); scene.add(ambientLight);
        pointLight1 = new THREE.PointLight(0xffffff, 100, 100); pointLight1.position.set(5, 5, 5); scene.add(pointLight1);

        // --- Δημιουργία Γεωμετρίας & Υλικού για τις Γραμμές ---
        // Χρειαζόμαστε 32 ακμές * 2 κορυφές/ακμή = 64 κορυφές στο buffer
        const positions = new Float32Array(edges.length * 3); // 3 συντεταγμένες (x,y,z) ανά κορυφή
        tesseractGeometry = new THREE.BufferGeometry();
        tesseractGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const lineMaterial = new THREE.LineBasicMaterial({
             color: 0x00ffff, // Cyan χρώμα
             linewidth: 1.5 // Μπορεί να μην υποστηρίζεται παντού
            });

        tesseractLines = new THREE.LineSegments(tesseractGeometry, lineMaterial);
        scene.add(tesseractLines);

        console.log("Tesseract Scene Initialized");
        return true;
    };

    // --- Συνάρτηση Animation Loop ---
    let angle = 0; // Γωνία περιστροφής
    let errorLogged = false;
    const animate = () => {
      if (!isComponentMounted) return; // Έξοδος αν το component έχει φύγει
      animationFrameId.current = requestAnimationFrame(animate);
      if (!renderer || !scene || !camera || !clock || !tesseractGeometry) return;

      try {
          const delta = clock.getDelta();
          // Αυξάνουμε τη γωνία
          angle += delta * 0.5; // Προσαρμογή ταχύτητας περιστροφής

          // Δημιουργία πινάκων περιστροφής 4D για αυτή τη γωνία
          // Περιστροφή σε πολλαπλά επίπεδα ταυτόχρονα
          const rotMatrixXY = create4DRotationMatrix(angle * 1.1, 0, 1); // XY plane
          const rotMatrixZW = create4DRotationMatrix(angle * 0.8, 2, 3); // ZW plane
          const rotMatrixXW = create4DRotationMatrix(angle * 0.5, 0, 3); // XW plane
          // Συνδυασμός των πινάκων (η σειρά έχει σημασία)
          const finalRotation = new THREE.Matrix4().multiplyMatrices(rotMatrixXW, rotMatrixZW).multiply(rotMatrixXY);


          // Ενημέρωση των θέσεων στο buffer της γεωμετρίας
          const positions = tesseractGeometry.attributes.position.array;
          let vertexIndex = 0;
          for (let i = 0; i < edges.length; i += 2) {
              const p1_4D_original = points4D[edges[i]];
              const p2_4D_original = points4D[edges[i+1]];

              // Εφαρμογή της περιστροφής (χρησιμοποιούμε clone για να μην αλλάξουμε τα αρχικά points4D)
              const p1_4D_rotated = p1_4D_original.clone().applyMatrix4(finalRotation);
              const p2_4D_rotated = p2_4D_original.clone().applyMatrix4(finalRotation);

              // Προβολή σε 3D
              const p1_3D = project4Dto3D(p1_4D_rotated);
              const p2_3D = project4Dto3D(p2_4D_rotated);

              // Ενημέρωση του buffer - 2 κορυφές ανά ακμή
              positions[vertexIndex++] = p1_3D.x;
              positions[vertexIndex++] = p1_3D.y;
              positions[vertexIndex++] = p1_3D.z;
              positions[vertexIndex++] = p2_3D.x;
              positions[vertexIndex++] = p2_3D.y;
              positions[vertexIndex++] = p2_3D.z;
          }
          // Σήμανση ότι το buffer θέσεων άλλαξε
          tesseractGeometry.attributes.position.needsUpdate = true;

          renderer.render(scene, camera);
          errorLogged = false;

      } catch (error) {
          if (!errorLogged) { console.error("Error during tesseract animation loop:", error); errorLogged = true; }
          if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      }
    };

    // --- Συνάρτηση για Resize ---
    const handleResize = () => { /* ... ίδιο με πριν ... */ };

    // --- Κύρια Λογική useEffect ---
    let currentRenderer = null;
    if (initThreeScene()) {
        currentRenderer = renderer;
        animate(); // Ξεκίνα το animation
        window.addEventListener('resize', handleResize);
    }

    // Cleanup function
    return () => {
      isComponentMounted = false;
      console.log("Cleaning up Tesseract Visualization...");
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects
      scene?.traverse(object => {
          if (!object.isLineSegments && !object.isMesh && !object.isPoints) return; // Προσαρμογή
          object.geometry?.dispose();
          if (object.material) { /* ... dispose material ... */ }
      });
      if (scene) { while(scene.children.length > 0){ scene.remove(scene.children[0]); } }
      if (currentRenderer?.domElement && container?.contains(currentRenderer.domElement)) { try { container.removeChild(currentRenderer.domElement); } catch(e) {} }
      currentRenderer?.dispose();
      console.log("Tesseract cleanup complete.");
    };
  }, []);

  // --- JSX ---
  return (
    <section className={styles.section} id="talos-viz">
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <h2 className="section-title">
            Οπτικοποίηση <span className="highlight">Talos Core</span>
          </h2>
          <p className="section-subtitle">
            Tesseract Rotation Simulation.
          </p>
        </div>
        <div className={styles.visualizationArea}>
            {/* Το div όπου θα γίνει render το Three.js */}
            <div ref={mountRef} className={styles.visualizationContainer}></div>
        </div>
      </div>
    </section>
  );
}
export default TalosVisualization;