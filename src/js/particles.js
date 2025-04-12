// talos-ai-frontend/src/js/particles.js
// (Enhanced v3 - React Compatible with Cleanup - Helpers Imported)

// Import τις απαραίτητες βοηθητικές συναρτήσεις
import { getCssVariable, hexToRgba } from '../utils/helpers.js'; // ΕΛΕΓΞΕ ΤΟ PATH!

// ΟΡΙΣΜΟΙ ΤΩΝ getCssVariable KAI hexToRgba ΔΙΑΓΡΑΦΤΗΚΑΝ ΑΠΟ ΕΔΩ

function initParticles(particlesContainer) {
    if (!particlesContainer) {
        console.error("Particles container element not provided.");
        return { cleanup: () => {} };
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Could not get 2D context for particles canvas.");
        return { cleanup: () => {} };
    }
    // Έλεγχος αν το canvas υπάρχει ήδη (από προηγούμενη εκτέλεση στο ίδιο container ίσως;)
    if (particlesContainer.querySelector('canvas')) {
         particlesContainer.innerHTML = ''; // Καθάρισμα πριν την προσθήκη
    }
    particlesContainer.appendChild(canvas);

    let particles = [];
    const particleCountBase = 35;
    let animationFrameId = null;
    let mouse = { x: null, y: null, radius: 120 };
    let resizeTimeout;

    // --- Event Listeners ---
    const mouseMoveHandler = (event) => {
        if (!canvas) return; // Έλεγχος αν υπάρχει το canvas
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    };
    const mouseOutHandler = () => {
        mouse.x = null;
        mouse.y = null;
    };
    const resizeHandler = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (!canvas || !particlesContainer) return;
            canvas.width = particlesContainer.offsetWidth;
            canvas.height = particlesContainer.offsetHeight;
            mouse.radius = Math.min(canvas.width, canvas.height) / 7;
            createParticles();
            // if (!animationFrameId) animate(); // Δεν χρειάζεται επανεκκίνηση εδώ συνήθως
        }, 150);
    };
     const visibilityChangeHandler = () => {
         if (document.hidden) {
             if (animationFrameId) cancelAnimationFrame(animationFrameId);
             animationFrameId = null;
         } else {
             if (!animationFrameId && ctx && canvas) animate(); // Έλεγχος πριν την επανεκκίνηση
         }
     };

    // --- Particle Class ---
    class Particle {
        constructor(x, y) {
            this.x = x || Math.random() * canvas.width;
            this.y = y || Math.random() * canvas.height;
            this.size = Math.random() * 1.8 + 0.8;
            this.baseX = this.x; this.baseY = this.y;
            this.density = (Math.random() * 25) + 5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            // Χρησιμοποιεί την imported getCssVariable
            const baseColor = getCssVariable('--accent-cyan', '#22d3ee');
            // Χρησιμοποιεί την imported hexToRgba
            this.color = hexToRgba(baseColor, Math.random() * 0.4 + 0.15);
        }
        update() {
            if (!canvas) return; // Έλεγχος
             // Mouse interaction logic (ίδιο με πριν)
             let dxMouse = mouse.x - this.x;
             let dyMouse = mouse.y - this.y;
             let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
             let force = 0;
             if (distanceMouse < mouse.radius && mouse.x !== null) {
                force = (mouse.radius - distanceMouse) / mouse.radius;
             }
             let forceDirectionX = distanceMouse > 0 ? dxMouse / distanceMouse : 0; // Avoid division by zero
             let forceDirectionY = distanceMouse > 0 ? dyMouse / distanceMouse : 0;
             let directionCheck = force * force * this.density;

             if (force > 0) {
                 this.x -= forceDirectionX * directionCheck * 0.6;
                 this.y -= forceDirectionY * directionCheck * 0.6;
             } else {
                 // Return to base position
                 if (Math.abs(this.x - this.baseX) > 0.1) {
                     this.x -= (this.x - this.baseX) / 20;
                 } else { this.x = this.baseX; }
                 if (Math.abs(this.y - this.baseY) > 0.1) {
                     this.y -= (this.y - this.baseY) / 20;
                 } else { this.y = this.baseY; }
                 // Regular movement
                 if (Math.abs(this.x - this.baseX) < 5 && Math.abs(this.y - this.baseY) < 5) {
                    this.x += this.speedX; this.y += this.speedY;
                 }
             }
             // Boundary check
             if (this.x < -this.size) this.x = canvas.width + this.size;
             else if (this.x > canvas.width + this.size) this.x = -this.size;
             if (this.y < -this.size) this.y = canvas.height + this.size;
             else if (this.y > canvas.height + this.size) this.y = -this.size;
        }
        draw() {
            if (!ctx) return;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // --- Core Functions ---
    function createParticles() {
        if (!canvas) return;
        particles = [];
        const densityFactor = Math.min(1.2, Math.max(0.4, (canvas.width * canvas.height) / (1920 * 1080)));
        const particleCount = Math.floor(particleCountBase * densityFactor);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        if (!ctx || particles.length === 0) return;
        const maxDistance = 110;
        const lineOpacityBase = 0.06;
        const lineColor = getCssVariable('--accent-glow', '#6fa8ff'); // Χρησιμοποιεί getCssVariable
        ctx.lineWidth = 0.4;

        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = lineOpacityBase * (1 - distance / maxDistance);
                    ctx.strokeStyle = hexToRgba(lineColor, opacity); // Χρησιμοποιεί hexToRgba
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        if (!ctx || !canvas) {
             if(animationFrameId) cancelAnimationFrame(animationFrameId);
             animationFrameId = null;
             return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { // Χρήση forEach για απλότητα
            p.update();
            p.draw();
        });
        drawConnections();
        animationFrameId = requestAnimationFrame(animate);
    }

    // --- Cleanup Function ---
    function cleanup() {
        console.log("Cleaning up particles effect...");
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseout', mouseOutHandler);
        window.removeEventListener('resize', resizeHandler);
        document.removeEventListener('visibilitychange', visibilityChangeHandler);
        clearTimeout(resizeTimeout);
        if (particlesContainer && canvas && particlesContainer.contains(canvas)) {
             try { particlesContainer.removeChild(canvas); } catch (e) {}
        }
        particles = [];
        console.log("Particles cleanup complete.");
    }

    // --- Initial Setup ---
    // Έλεγχος διαστάσεων πριν την αρχικοποίηση
    if (particlesContainer.offsetWidth === 0 || particlesContainer.offsetHeight === 0) {
         console.warn("Particles container has zero dimensions on init. Delaying setup.");
         // Δοκίμασε να περιμένεις λίγο
         setTimeout(() => {
             if (particlesContainer.offsetWidth > 0 && particlesContainer.offsetHeight > 0) {
                 canvas.width = particlesContainer.offsetWidth;
                 canvas.height = particlesContainer.offsetHeight;
                 mouse.radius = Math.min(canvas.width, canvas.height) / 7;
                 createParticles();
                 animate();
                 window.addEventListener('mousemove', mouseMoveHandler);
                 window.addEventListener('mouseout', mouseOutHandler);
                 window.addEventListener('resize', resizeHandler);
                 document.addEventListener('visibilitychange', visibilityChangeHandler);
             } else {
                 console.error("Particles container still has zero dimensions after delay.");
             }
         }, 100); // Περίμενε 100ms
    } else {
        canvas.width = particlesContainer.offsetWidth;
        canvas.height = particlesContainer.offsetHeight;
        mouse.radius = Math.min(canvas.width, canvas.height) / 7;
        createParticles();
        animate();
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseout', mouseOutHandler);
        window.addEventListener('resize', resizeHandler);
        document.addEventListener('visibilitychange', visibilityChangeHandler);
    }

    return { cleanup }; // Επιστροφή μόνο της cleanup
}

export { initParticles }; // Export της κύριας συνάρτησης