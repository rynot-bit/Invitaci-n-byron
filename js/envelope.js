document.addEventListener('DOMContentLoaded', () => { initEnvelopeAnimations(); });

function initEnvelopeAnimations() {
    const envelope = document.getElementById('envelope');
    if (!envelope) return;

    envelope.addEventListener('mouseenter', () => {
        envelope.style.transform = 'scale(1.08) rotateZ(-2deg)';
    });

    envelope.addEventListener('mouseleave', () => {
        envelope.style.transform = 'scale(1)';
    });
}

function createWaxParticles(x, y) {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 5 + Math.random() * 8;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: linear-gradient(135deg, #FFD93D, #FFA500);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 0 10px rgba(255, 217, 61, 0.8);
        `;
        
        document.body.appendChild(particle);
        
        let px = x, py = y, velX = vx, velY = vy, frame = 0;
        const animateParticle = setInterval(() => {
            frame++;
            velY += 0.2;
            px += velX;
            py += velY;
            particle.style.left = px + 'px';
            particle.style.top = py + 'px';
            particle.style.opacity = Math.max(0, 1 - frame / 30);
            if (frame > 30) {
                clearInterval(animateParticle);
                particle.remove();
            }
        }, 16);
    }
}

window.createWaxParticles = createWaxParticles;