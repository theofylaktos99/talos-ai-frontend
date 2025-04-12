// talos-ai-frontend/src/js/globe.js (Integrated User's Advanced Globe with Fixes)
import * as THREE from 'three';
// Corrected imports based on user code + previous needs
import { latLngToVector3, getCssVariable, fetchData, getThreatColor, createGlowMaterial } from '../utils/helpers.js';
// Removed fetchBlockchainData, replaced createShaderGlowMaterial with createGlowMaterial
import { gsap } from 'gsap'; // Keep for arc animations

// Renamed function back to match potential imports
function initThreatGlobe(globeContainerElement) {
    const globeElement = globeContainerElement;
    if (!globeElement || typeof THREE === 'undefined') return null;

    let scene, camera, renderer, clock, globeGroup, stars;
    let ambientLight, directionalLight; // Removed hemiLight as maybe not needed with BasicMaterial? Keep it for arcs.
    let hemiLight; // Keep hemiLight for standard materials
    let threatArcs = [];
    let animationFrameId = null;
    const globeRadius = 80;
    const MAX_ARCS = 15; // Added missing constant

    // Interaction state variables - RESTORED
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const baseRotationSpeed = 0.0005; // Renamed from rotationSpeed
    let currentRotationSpeed = baseRotationSpeed; // Use this for auto-rotate
    const rotationDecay = 0.98; // Keep decay for potential use

    // Χρώματα - Use CSS variables where possible
    const colorPrimary = new THREE.Color(getCssVariable('--dark-primary', '#0a0f14'));
    const colorAccentGlow = new THREE.Color(getCssVariable('--accent-glow', '#6fa8ff'));
    const colorAccentCyan = new THREE.Color(getCssVariable('--accent-cyan', '#25c8e0'));
    // const colorThreat = new THREE.Color('#ff3300'); // Define default threat color later or use helper

    function setupScene() {
        scene = new THREE.Scene();
        clock = new THREE.Clock();

        camera = new THREE.PerspectiveCamera(50, globeElement.offsetWidth / globeElement.offsetHeight, 1, 2000);
        camera.position.z = 240;

        try { // Added try-catch from previous versions
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(globeElement.offsetWidth, globeElement.offsetHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Use Math.min
            renderer.outputColorSpace = THREE.SRGBColorSpace; // Set color space
            globeElement.innerHTML = '';
            globeElement.appendChild(renderer.domElement);
        } catch (error) {
            console.error("WebGL Renderer Initialization Error:", error);
            return false;
        }


        globeGroup = new THREE.Group();
        scene.add(globeGroup);

        // Wireframe Globe - From user code
        const globeGeometry = new THREE.SphereGeometry(globeRadius, 32, 32); // Slightly fewer segments than 64
        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: colorAccentCyan, // Use variable
            wireframe: true,
            transparent: true,
            opacity: 0.6, // Slightly less opaque
        });
        const globeWireframe = new THREE.Mesh(globeGeometry, wireframeMaterial);
        globeGroup.add(globeWireframe);

        // Atmosphere Glow - Use existing helper
        const atmosphereGeometry = new THREE.SphereGeometry(globeRadius + 10, 48, 48); // Fewer segments than 64
        const atmosphereMaterial = createGlowMaterial(colorAccentGlow, 0.7, 5.0); // Use existing helper
        if (atmosphereMaterial) { // Check if material was created
             const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
             globeGroup.add(atmosphereMesh);
        } else {
            console.warn("Failed to create atmosphere glow material.");
        }


        // Lighting - Keep for threat arcs
        ambientLight = new THREE.AmbientLight(0xaaaaaa, 0.8); // Adjusted intensity
        scene.add(ambientLight);
        hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6); // Added back
        scene.add(hemiLight);
        directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Adjusted intensity
        directionalLight.position.set(15, 10, 10);
        scene.add(directionalLight);

        // Starfield - From user code
        setupStarfield();

        // Restore interactions
        setupInteractions();
        // Fetch initial threats if desired
        // fetchInitialThreats(); // Assuming fetchData helper exists if needed

        return true;
    }

    // Starfield setup - From user code (minor adjustments possible)
    function setupStarfield() {
        const starCount = 2000;
        const starGeometry = new THREE.BufferGeometry();
        const positions = []; // Use standard array first

        for (let i = 0; i < starCount; i++) {
            // Distribute stars more spherically
            const radius = 600 + Math.random() * 800; // Adjust range
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            positions.push(x, y, z);
        }

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const starMaterial = new THREE.PointsMaterial({
            color: '#ffffff',
            size: 1.2, // Slightly larger base size
            sizeAttenuation: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            opacity: 0.7, // Slightly less opaque
            depthWrite: false
        });

        stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);
    }

    // --- RESTORED Threat Arcs Logic ---
    const defaultArcMaterial = new THREE.MeshStandardMaterial({
        color: 0xff3300, emissive: 0xff3300, emissiveIntensity: 0.8,
        metalness: 0.3, roughness: 0.6, transparent: true, opacity: 0 // Start transparent
    });

    async function fetchInitialThreats() {
        // Example: Fetch some initial data if needed
        // try {
        //     const data = await fetchData('/api/threats/initial'); // Example endpoint
        //     data.forEach(threat => addThreatArc(threat.fromLat, threat.fromLng, threat.toLat, threat.toLng, threat.severity));
        // } catch (error) {
        //     console.error("Failed to fetch initial threats:", error);
        //     // Add some random ones as fallback?
             for(let i = 0; i < 5; i++) createRandomThreatArc(true);
        // }
    }

    function addThreatArc(startLat, startLng, endLat, endLng, severity = 1) {
        const color = getThreatColor(severity);
        const arcMaterial = defaultArcMaterial.clone();
        arcMaterial.color.setHex(color); arcMaterial.emissive.setHex(color);
        arcMaterial.emissiveIntensity = 0.5 + severity * 0.4;
        arcMaterial.opacity = 0; // Start transparent

        const startVec = latLngToVector3(startLat, startLng, globeRadius);
        const endVec = latLngToVector3(endLat, endLng, globeRadius);
        const distance = startVec.distanceTo(endVec);
        const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
        const arcHeight = distance * 0.3;
        midPoint.normalize().multiplyScalar(globeRadius + arcHeight);

        const curve = new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec);
        // RESTORED Arc Geometry Creation (was missing createArcGeometry call)
        const arcGeometry = new THREE.TubeGeometry(curve, 30, 0.5, 6, false);
        const arcMesh = new THREE.Mesh(arcGeometry, arcMaterial);
        globeGroup.add(arcMesh);

        const pointGeometry = new THREE.SphereGeometry(1.2, 8, 8);
        const pointMesh = new THREE.Mesh(pointGeometry, arcMaterial.clone()); // Clone material for point
        pointMesh.material.transparent=false; // Point doesn't need fade
         pointMesh.material.opacity = 1;
        globeGroup.add(pointMesh);

        const impactGeometry = new THREE.SphereGeometry(2.0, 12, 12);
        const impactMaterial = arcMaterial.clone(); // Clone material for impact
        impactMaterial.opacity = 0;
        const impactMesh = new THREE.Mesh(impactGeometry, impactMaterial);
        impactMesh.position.copy(endVec);
        impactMesh.scale.set(0.1, 0.1, 0.1);
        globeGroup.add(impactMesh);

        const arcData = { curve, arcMesh, pointMesh, impactMesh, material: arcMaterial, impactMaterial: impactMaterial, pointMaterial: pointMesh.material, startTime: clock.getElapsedTime(), duration: 2.0 + Math.random() * 0.5, severity: severity };
        threatArcs.push(arcData);
        if (threatArcs.length > MAX_ARCS) { removeArcElements(threatArcs.shift()); }
    }

    function removeArcElements(arcData) {
        if (arcData.arcMesh) globeGroup.remove(arcData.arcMesh);
        if (arcData.pointMesh) globeGroup.remove(arcData.pointMesh);
        if (arcData.impactMesh) globeGroup.remove(arcData.impactMesh);
        // Dispose geometry and materials
        arcData.arcMesh?.geometry.dispose();
        arcData.pointMesh?.geometry.dispose();
        arcData.impactMesh?.geometry.dispose();
        arcData.material?.dispose();
        arcData.impactMaterial?.dispose();
        arcData.pointMaterial?.dispose();
    }

    function createRandomThreatArc(isInitial = false) {
        // Simple random coordinates for demonstration
        const lat1 = (Math.random() - 0.5) * 180;
        const lng1 = (Math.random() - 0.5) * 360;
        const lat2 = (Math.random() - 0.5) * 180;
        const lng2 = (Math.random() - 0.5) * 360;
        const severity = Math.random(); // 0 to 1
        addThreatArc(lat1, lng1, lat2, lng2, severity);
    }


    // --- Animate Function (RESTORED arc logic) ---
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        if (!renderer || !scene || !camera || !clock || !globeGroup) return;

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Rotate globe - Use currentRotationSpeed for drag interaction
        if (!isDragging) {
             // Apply decay to return to base speed after drag
             if (currentRotationSpeed < baseRotationSpeed) {
                 currentRotationSpeed += 0.00001; // Gradually increase speed back
             } else if (currentRotationSpeed > baseRotationSpeed) {
                  currentRotationSpeed *= rotationDecay; // Gradually decrease speed back
             }
             // Clamp speed near base speed
             currentRotationSpeed = Math.max(0, Math.min(baseRotationSpeed * 1.5, currentRotationSpeed)); // Prevent excessive speed/negative speed
        }
        globeGroup.rotation.y += currentRotationSpeed;


        // Rotate stars from user code
        if(stars) stars.rotation.y += 0.0001;

        // Animate Threat Arcs (RESTORED logic from previous working version)
        const arcsToRemove = [];
        threatArcs.forEach((arcData, index) => {
            const progress = Math.min(1, (elapsedTime - arcData.startTime) / arcData.duration);

            // Use sinusoidal opacity for arc fade in/out
            const arcOpacity = Math.sin(progress * Math.PI);
            arcData.material.opacity = arcOpacity;
            arcData.material.transparent = true;

            if (progress >= 1) {
                 if (!arcData.fading) {
                     arcData.fading = true; arcData.fadeStart = elapsedTime;
                     // Use GSAP for impact animation
                     gsap.to(arcData.impactMesh.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: 'expo.out' });
                     gsap.to(arcData.impactMaterial, { opacity: 0.8, duration: 0.3, ease: 'expo.out' })
                        .then(() => gsap.to(arcData.impactMaterial, { opacity: 0, duration: 0.7, ease: 'power1.in' }));
                 }
                 if (elapsedTime - arcData.fadeStart > 1.0) { // Impact fade duration
                     arcsToRemove.push(index);
                 }
                 // Hide point immediately after completion
                 arcData.pointMesh.visible = false;
                 // Let arc fade out via opacity animation
                 // arcData.arcMesh.visible = false;
            } else {
                // Animate point along curve
                const pointPosition = arcData.curve.getPointAt(progress);
                arcData.pointMesh.position.copy(pointPosition);
                arcData.pointMesh.visible = true;
                arcData.arcMesh.visible = true; // Ensure arc is visible
            }
        });
        for (let i = arcsToRemove.length - 1; i >= 0; i--) {
            const index = arcsToRemove[i];
            removeArcElements(threatArcs[index]);
            threatArcs.splice(index, 1);
        }

        renderer.render(scene, camera);
    }


    // --- RESTORED Interaction & Resize Handlers ---
    const onPointerDown = (event) => {
        isDragging = true;
        previousMousePosition = { x: event.clientX, y: event.clientY };
        currentRotationSpeed = 0; // Stop auto-rotate immediately on drag
        // Optional: change cursor style
        // globeElement.style.cursor = 'grabbing';
    };
    const onPointerMove = (event) => {
        if (!isDragging) return;
        const deltaX = event.clientX - previousMousePosition.x;
        globeGroup.rotation.y += deltaX * 0.005; // Adjust sensitivity
        previousMousePosition = { x: event.clientX, y: event.clientY };
    };
    const onPointerUp = () => {
        if (isDragging) {
             isDragging = false;
             currentRotationSpeed = baseRotationSpeed * 0.1; // Start slow return to base speed
             // Optional: change cursor style back
             // globeElement.style.cursor = 'grab';
        }
    };
    const onWheel = (event) => {
        event.preventDefault(); // Prevent page scroll
        const fov = camera.fov + event.deltaY * 0.05;
        camera.fov = THREE.MathUtils.clamp(fov, 30, 90); // Clamp zoom
        camera.updateProjectionMatrix();
    };
    const onResize = () => {
        if (!renderer || !camera || !globeElement) return;
        const width = globeElement.offsetWidth;
        const height = globeElement.offsetHeight;
        if (width === 0 || height === 0) return; // Avoid issues if container is hidden
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };

    function setupInteractions() {
        // globeElement.style.cursor = 'grab'; // Initial cursor
        globeElement.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove); // Listen on window for dragging outside
        window.addEventListener('pointerup', onPointerUp); // Listen on window for drag release
       // globeElement.addEventListener('pointerout', onPointerUp); // Can sometimes cause issues
        globeElement.addEventListener('wheel', onWheel, { passive: false }); // Need passive: false to prevent scroll
        window.addEventListener('resize', onResize);
    };
    function removeInteractions() {
       // globeElement.style.cursor = 'default';
       globeElement.removeEventListener('pointerdown', onPointerDown);
       window.removeEventListener('pointermove', onPointerMove);
       window.removeEventListener('pointerup', onPointerUp);
       // globeElement.removeEventListener('pointerout', onPointerUp);
       globeElement.removeEventListener('wheel', onWheel);
       window.removeEventListener('resize', onResize);
    };


   // --- RESTORED Cleanup Function ---
   function dispose() {
       console.log("Disposing Threat Globe...");
       if (animationFrameId) cancelAnimationFrame(animationFrameId);
       removeInteractions();
       threatArcs.forEach(removeArcElements); // Clean up existing arcs
       threatArcs = [];
       if (scene) {
           scene.traverse((object) => {
               if (object.geometry) object.geometry.dispose();
               if (object.material) {
                   if (Array.isArray(object.material)) {
                       object.material.forEach(material => { if(material.map) material.map.dispose(); material.dispose(); });
                   } else {
                       if(object.material.map) object.material.map.dispose(); object.material.dispose();
                   }
               }
           });
       }
       if (renderer) {
           renderer.dispose();
           if (renderer.domElement && globeElement.contains(renderer.domElement)) {
              globeElement.removeChild(renderer.domElement);
           }
       }
        scene = null; camera = null; renderer = null; clock = null; globeGroup = null; stars = null;
   }

    // --- Initialization & Return ---
    if (setupScene()) {
         animate();
         // RESTORED updateWithAttack method and dispose
         return {
             updateWithAttack: (threatCount = 1) => {
                 for (let i = 0; i < threatCount; i++) {
                     createRandomThreatArc();
                 }
             },
             // Expose addThreatArc if specific coordinates are needed later
             // addThreat: addThreatArc,
             dispose: dispose
         };
    } else {
        console.error("Failed to initialize Threat Globe scene.");
        return null;
    }
}

// Ensure helpers are imported correctly
export { initThreatGlobe }; // Export with the original name