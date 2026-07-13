function initFireworks() {
    createFireworksCanvas();
}

function createFireworksCanvas() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) {
        const newCanvas = document.createElement('canvas');
        newCanvas.id = 'fireworks-canvas';
        newCanvas.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 998;`;
        newCanvas.width = window.innerWidth;
        newCanvas.height = window.innerHeight;
        document.body.appendChild(newCanvas);
    }
}

function triggerMultipleFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) createFireworksCanvas();

    const positions = [
        { x: canvas.width * 0.25, y: canvas.height * 0.3 },
        { x: canvas.width * 0.75, y: canvas.height * 0.3 },
        { x: canvas.width * 0.5, y: canvas.height * 0.5 },
    ];

    positions.forEach((pos, index) => {
        setTimeout(() => {
            triggerFireworks(pos.x, pos.y);
        }, index * 200);
    });
}

function triggerFireworks(x, y) {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) createFireworksCanvas();

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 80;
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#667eea', '#FF8E72'];

    for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 12 + 5;
        particles.push({
            x: x || canvas.width / 2,
            y: y || canvas.height / 2,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 1,
            size: Math.random() * 4 + 2
        });
    }

    const duration = 1500;
    const startTime = Date.now();

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        particles.forEach((particle) => {
            particle.vy += 0.3;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life = Math.max(0, 1 - progress);

            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.life * 0.8;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.globalAlpha = 1;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

window.initFireworks = initFireworks;
window.triggerFireworks = triggerFireworks;
window.triggerMultipleFireworks = triggerMultipleFireworks;