// envelope.js - Animaciones del sobre

document.addEventListener('DOMContentLoaded', () => {
    initEnvelopeAnimations();
});

function initEnvelopeAnimations() {
    const envelope = document.getElementById('envelope');
    
    if (!envelope) return;

    // Efectos hover
    envelope.addEventListener('mouseenter', () => {
        envelope.style.transform = 'scale(1.08) rotateZ(-2deg)';
    });

    envelope.addEventListener('mouseleave', () => {
        envelope.style.transform = 'scale(1)';
    });

    // Click para abrir
    envelope.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!envelope.classList.contains('opened')) {
            // Reproducir sonido de cera rompiéndose
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            playBreakSound(audioContext);
            
            // Crear partículas de cera
            createWaxParticles(e.clientX, e.clientY);
        }
    });
}

function playBreakSound(audioContext) {
    const now = audioContext.currentTime;
    
    // Sonido de cera rompiéndose - frecuencia alta que baja
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.3);
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    
    osc.start(now);
    osc.stop(now + 0.3);
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
        
        // Animar partícula
        let px = x;
        let py = y;
        let velX = vx;
        let velY = vy;
        const gravity = 0.2;
        let frame = 0;
        
        const animateParticle = setInterval(() => {
            frame++;
            velY += gravity;
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

function createEnvelopeGlowEffect() {
    const envelope = document.getElementById('envelope');
    if (!envelope) return;
    
    envelope.style.boxShadow = `
        0 0 20px rgba(255, 107, 107, 0.6),
        0 0 40px rgba(255, 217, 61, 0.4),
        0 20px 60px rgba(0, 0, 0, 0.3)
    `;
}

// Animación de apertura mejorada
const originalOpenEnvelope = window.openEnvelope || (() => {});

window.openEnvelope = function() {
    const envelope = document.getElementById('envelope');
    const envelopeFlap = envelope.querySelector('.envelope-flap');
    
    // Agregar efecto 3D
    envelope.style.perspective = '1000px';
    envelopeFlap.style.transformStyle = 'preserve-3d';
    
    // Animar apertura
    let progress = 0;
    const openInterval = setInterval(() => {
        progress += 0.05;
        envelopeFlap.style.transform = `rotateX(${Math.min(progress * 180, 180)}deg)`;
        
        if (progress >= 1) {
            clearInterval(openInterval);
            envelope.classList.add('opened');
            
            // Llamar a la función original si existe
            if (typeof originalOpenEnvelope === 'function') {
                originalOpenEnvelope();
            }
        }
    }, 16);
};

// Efecto de luz en el sello
function createSealGlow() {
    const sealStyle = document.createElement('style');
    sealStyle.textContent = `
        @keyframes sealGlow {
            0%, 100% {
                filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.5));
            }
            50% {
                filter: drop-shadow(0 0 15px rgba(255, 107, 107, 0.9));
            }
        }
        
        .envelope-flap::before {
            content: '';
            position: absolute;
            width: 60px;
            height: 60px;
            background: radial-gradient(circle at 30% 30%, rgba(255, 215, 61, 0.8), rgba(255, 107, 107, 0.6));
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: sealGlow 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(sealStyle);
}

createSealGlow();
