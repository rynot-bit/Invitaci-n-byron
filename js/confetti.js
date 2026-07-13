// confetti.js - Efecto de confeti

function triggerConfetti() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) {
        createCanvas();
    }
    
    createConfettiParticles();
}

function createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworks-canvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 999;
    `;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
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

    let animationFrameId;
    const duration = 3000; // 3 segundos
    const startTime = Date.now();

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Actualizar y dibujar partículas
        particles.forEach((particle, index) => {
            // Física
            particle.vy += 0.1; // Gravedad
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.rotation += particle.rotationSpeed;

            // Opacity fade out
            particle.life = Math.max(0, 1 - progress);

            // Dibujar partícula
            ctx.save();
            ctx.globalAlpha = particle.life;
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            ctx.fillStyle = particle.color;

            // Dibujar cuadrado rotado
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);

            ctx.restore();
        });

        if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            // Limpiar canvas al terminar
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// Versión alternativa: Confeti DOM
function createConfettiDOM() {
    const confettiColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#667eea', '#764ba2'];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 12 + 6;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.2;

        confetti.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
            left: ${Math.random() * 100}%;
            top: -${size}px;
            pointer-events: none;
            z-index: 999;
            opacity: 1;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: fall ${duration}s linear ${delay}s forwards;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Agregar animación de caída
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }

    @keyframes confettiBurst {
        0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Exportar funciones
window.triggerConfetti = triggerConfetti;
window.createConfettiParticles = createConfettiParticles;
window.createConfettiDOM = createConfettiDOM;
