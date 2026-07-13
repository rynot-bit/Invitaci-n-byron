document.addEventListener('DOMContentLoaded', () => { initializeInvitation(); });

function initializeInvitation() {
    const envelope = document.getElementById('envelope');
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const btnMusic = document.getElementById('btnMusic');
    const btnConfetti = document.getElementById('btnConfetti');

    if (envelope) envelope.addEventListener('click', openEnvelope);
    if (btnYes) btnYes.addEventListener('click', () => showConfirmation(true));
    if (btnNo) btnNo.addEventListener('click', () => showConfirmation(false));
    if (btnMusic) btnMusic.addEventListener('click', toggleMusic);
    if (btnConfetti) btnConfetti.addEventListener('click', triggerConfetti);

    if (typeof initCountdown === 'function') initCountdown();
    if (typeof initFireworks === 'function') initFireworks();
    initStars();
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const envelopeScreen = document.getElementById('envelope-screen');
    const invitationScreen = document.getElementById('invitation-screen');

    if (!envelope || envelope.classList.contains('opened')) return;

    envelope.classList.add('opened');
    if (typeof playSound === 'function') playSound('break-seal');
    createGoldenSmoke();
    if (typeof triggerConfetti === 'function') triggerConfetti();

    setTimeout(() => {
        envelopeScreen.classList.remove('active');
        invitationScreen.classList.add('active');
        if (typeof animateTicketEntrance === 'function') animateTicketEntrance();
    }, 1500);
}

function showConfirmation(isYes) {
    const invitationScreen = document.getElementById('invitation-screen');
    const confirmationScreen = document.getElementById('confirmation-screen');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (!invitationScreen || !confirmationScreen || !confirmationMessage) return;

    invitationScreen.classList.remove('active');
    confirmationScreen.classList.add('active');

    if (isYes) {
        confirmationMessage.innerHTML = `<h1>¡CONFIRMADO! ⚽</h1>
        <p>Byron está emocionado de verte en su FINAL DE CAMPEONES.</p>
        <p>¡Te esperamos el 25 de junio a las 5:00 PM!</p>
        <p style="margin-top: 20px; font-size: 40px;">🦅💛💙</p>`;
        if (typeof triggerConfetti === 'function') triggerConfetti();
        if (typeof playSound === 'function') playSound('gol');
    } else {
        confirmationMessage.innerHTML = `<h1>¡Qué pena! 😢</h1>
        <p>Byron entenderá que no puedas asistir.</p>
        <p>¡Tal vez en otra ocasión!</p>`;
    }
}

function toggleMusic() {
    if (typeof toggleBackgroundMusic === 'function') toggleBackgroundMusic();
}

function initStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        starsContainer.appendChild(star);
    }
}

window.openEnvelope = openEnvelope;
window.showConfirmation = showConfirmation;
window.toggleMusic = toggleMusic;