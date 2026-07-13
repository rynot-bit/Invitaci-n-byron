// audio.js - Manejo de sonidos y música

class AudioManager {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.isPlaying = false;
        this.backgroundMusic = null;
        this.soundEffects = {};
        
        // Crear sonidos de síntesis
        this.initSounds();
    }

    initSounds() {
        // Sonido de gol
        this.soundEffects['gol'] = () => this.playGoalSound();
        
        // Sonido de ruptura de sello
        this.soundEffects['break-seal'] = () => this.playBreakSound();
        
        // Sonido de confeti
        this.soundEffects['confetti'] = () => this.playConfettiSound();
    }

    playSound(soundName) {
        if (this.soundEffects[soundName]) {
            this.soundEffects[soundName]();
        }
    }

    playGoalSound() {
        const now = this.audioContext.currentTime;
        
        // Crear oscilador para sonido de gol
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);
        
        // Primer sonido - tono bajo
        osc1.frequency.setValueAtTime(150, now);
        osc1.frequency.linearRampToValueAtTime(200, now + 0.1);
        
        // Segundo sonido - tono alto
        osc2.frequency.setValueAtTime(300, now);
        osc2.frequency.linearRampToValueAtTime(400, now + 0.1);
        
        // Envolvente de volumen
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.5);
        osc2.stop(now + 0.5);
    }

    playBreakSound() {
        const now = this.audioContext.currentTime;
        
        // Sonido agudo de ruptura
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        
        // Rampa de frecuencia descendente
        osc.frequency.setValueAtTime(1000, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.2);
        
        // Envolvente
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        
        osc.start(now);
        osc.stop(now + 0.2);
    }

    playConfettiSound() {
        const now = this.audioContext.currentTime;
        const notes = [523.25, 659.25, 783.99]; // Do, Mi, Sol
        
        notes.forEach((freq, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            const startTime = now + (index * 0.05);
            
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);
            
            osc.start(startTime);
            osc.stop(startTime + 0.1);
        });
    }

    playBackgroundMusic() {
        if (this.isPlaying) {
            this.stopBackgroundMusic();
            return;
        }

        this.isPlaying = true;
        const now = this.audioContext.currentTime;
        
        // Tocar una melodía simple
        const melody = [
            { freq: 523.25, duration: 0.5 },  // Do
            { freq: 587.33, duration: 0.5 },  // Re
            { freq: 659.25, duration: 0.5 },  // Mi
            { freq: 783.99, duration: 0.5 },  // Sol
            { freq: 659.25, duration: 0.5 },  // Mi
            { freq: 587.33, duration: 0.5 },  // Re
            { freq: 523.25, duration: 1 },    // Do
        ];

        let currentTime = now;
        
        melody.forEach((note) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            osc.frequency.setValueAtTime(note.freq, currentTime);
            gain.gain.setValueAtTime(0.1, currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, currentTime + note.duration);
            
            osc.start(currentTime);
            osc.stop(currentTime + note.duration);
            
            currentTime += note.duration;
        });
    }

    stopBackgroundMusic() {
        this.isPlaying = false;
    }

    // Método para reproducir URL de audio
    playAudioFile(url) {
        const audio = new Audio(url);
        audio.volume = 0.5;
        audio.play().catch(err => console.log('Error reproduciendo audio:', err));
    }
}

// Instancia global del manejador de audio
let audioManager;

document.addEventListener('DOMContentLoaded', () => {
    audioManager = new AudioManager();
});

// Función global para reproducir sonidos
function playSound(soundName) {
    if (audioManager) {
        audioManager.playSound(soundName);
    }
}

// Función global para música de fondo
function toggleBackgroundMusic() {
    if (audioManager) {
        audioManager.playBackgroundMusic();
    }
}

// Exportar
window.AudioManager = AudioManager;
window.playSound = playSound;
window.toggleBackgroundMusic = toggleBackgroundMusic;
