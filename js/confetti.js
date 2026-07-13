function triggerConfetti() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) createConfettiCanvas();
    createConfettiParticles();
}

function createConfettiCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworks-canvas';
    canvas.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999;`;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
}

function createConfettiParticles() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const confettiColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#667eea', '#764ba2'];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 5 + 3,
            size: Math.random() * 8 + 4,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2,
            life: 1
        });
    }

    const duration = 3000;
    const startTime = Date.now();

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            particle.vy += 0.1;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.rotation += particle.rotationSpeed;
            particle.life = Math.max(0, 1 - progress);

            ctx.save();
            ctx.globalAlpha = particle.life;
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            ctx.restore();
        });

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

window.triggerConfetti = triggerConfetti;
window.createConfettiParticles = createConfettiParticles;