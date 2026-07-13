class AudioManager {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.isPlaying = false;
    }

    playSound(soundName) {
        const now = this.audioContext.currentTime;
        if (soundName === 'gol') {
            const osc1 = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            osc1.connect(gain);
            gain.connect(this.audioContext.destination);
            osc1.frequency.setValueAtTime(150, now);
            osc1.frequency.linearRampToValueAtTime(200, now + 0.1);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            osc1.start(now);
            osc1.stop(now + 0.5);
        }
    }
}

let audioManager;
document.addEventListener('DOMContentLoaded', () => {
    audioManager = new AudioManager();
});

function playSound(soundName) {
    if (audioManager) audioManager.playSound(soundName);
}

function toggleBackgroundMusic() {
    console.log('Música toggled');
}

window.AudioManager = AudioManager;
window.playSound = playSound;
window.toggleBackgroundMusic = toggleBackgroundMusic;