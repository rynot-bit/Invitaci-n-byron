// Agregar animaciones que faltan en main.js

// Animaciones de balón rodando
const style = document.createElement('style');
style.textContent = `
    @keyframes rollBall {
        0% {
            left: 10%;
            top: 20%;
            transform: rotate(0deg);
        }
        100% {
            left: 50%;
            top: 50%;
            transform: rotate(720deg);
        }
    }

    @keyframes flyEagle {
        0% {
            left: -100px;
            top: -100px;
            opacity: 1;
        }
        50% {
            top: 20%;
        }
        100% {
            right: -100px;
            bottom: -100px;
            opacity: 0;
        }
    }

    @keyframes riseSmoke {
        0% {
            opacity: 0.8;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.5);
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(-100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    /* Mejoras de animaciones existentes */
    #invitation-screen {
        animation: slideUp 0.8s ease-out;
    }

    .title {
        animation: slideDown 0.8s ease-out;
    }

    .countdown-item {
        animation: scaleUp 0.6s ease-out;
    }

    .detail-item {
        animation: slideInLeft 0.6s ease-out;
    }
`;
document.head.appendChild(style);

// Mejorar main.js con funciones adicionales
if (typeof window.initCountdown === 'undefined') {
    window.initCountdown = function() {
        console.log('Inicializando cuenta regresiva...');
    };
}

if (typeof window.initFireworks === 'undefined') {
    window.initFireworks = function() {
        console.log('Inicializando fuegos artificiales...');
    };
}

if (typeof window.initStars === 'undefined') {
    window.initStars = function() {
        console.log('Inicializando estrellas...');
    };
}

// Funciones auxiliares
function animateTicketEntrance() {
    triggerBallAnimation();
    setTimeout(() => {
        playSound('gol');
        triggerConfetti();
    }, 2000);

    setTimeout(() => {
        animateEagle();
        triggerMultipleFireworks();
    }, 3000);
}

function triggerBallAnimation() {
    const container = document.body;
    const ball = document.createElement('div');
    
    ball.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        background: radial-gradient(circle at 30% 30%, #FFD93D, #FF6B6B);
        border-radius: 50%;
        top: 20%;
        left: 10%;
        z-index: 1001;
        animation: rollBall 2s ease-in forwards;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    `;

    container.appendChild(ball);

    setTimeout(() => {
        ball.remove();
        // Vibración
        document.body.style.animation = 'shake 0.3s';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    }, 2000);
}

function animateEagle() {
    const eagle = document.createElement('div');
    eagle.style.cssText = `
        position: fixed;
        font-size: 80px;
        top: -100px;
        left: -100px;
        z-index: 999;
        animation: flyEagle 3s ease-in-out forwards;
        filter: drop-shadow(0 0 20px rgba(255,215,0,0.6));
    `;
    eagle.textContent = '🦅';

    document.body.appendChild(eagle);

    setTimeout(() => {
        eagle.remove();
    }, 3000);
}

function createGoldenSmoke() {
    const smokeContainer = document.createElement('div');
    smokeContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 300px;
        pointer-events: none;
        z-index: 1000;
    `;

    for (let i = 0; i < 15; i++) {
        const smoke = document.createElement('div');
        const size = Math.random() * 40 + 20;
        const delay = Math.random() * 0.3;

        smoke.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255,215,0,0.8), rgba(255,215,0,0));
            border-radius: 50%;
            animation: riseSmoke 2s ease-out ${delay}s forwards;
            left: ${Math.random() * 200 - 100}px;
            top: 0;
        `;
        smokeContainer.appendChild(smoke);
    }

    document.body.appendChild(smokeContainer);

    setTimeout(() => {
        smokeContainer.remove();
    }, 2500);
}

// Exportar funciones globales
window.animateTicketEntrance = animateTicketEntrance;
window.triggerBallAnimation = triggerBallAnimation;
window.animateEagle = animateEagle;
window.createGoldenSmoke = createGoldenSmoke;
