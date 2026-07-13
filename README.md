# 🎉 Invitación Digital Interactiva - Byron's Birthday

> Una invitación digital interactiva y sorprendente para el cumpleaños de Byron - 8 años ⚽🦅

## 🎯 Descripción del Evento

**¡Byron cumple 8 años!**

- 📅 **Fecha**: 25 de Junio, 2026
- 🕕 **Hora**: 5:00 PM
- 📍 **Ubicación**: Calle Venus Mz 13A Lt 4, Col. Lomas de la Estancia
- ⚽ **Tema**: FINAL DE CAMPEONES (Estilo Club América)

## ✨ Características Principales

### 📬 Escena 1 - El Sobre
- Sobre azul marino con bordes dorados
- Sello de cera con escudo del Club América
- Al hacer clic:
  - 🔊 Sonido de ruptura de cera
  - ✨ Partículas doradas cayendo
  - 🎉 Confeti azul y amarillo
  - 🎵 Música de fondo

### 🎟️ Escena 2 - El Boleto VIP
- Boleto interactivo que sale del sobre
- Información del evento completa
- Animaciones suaves de aparición

### ⚽ Escena 3 - Animación del Balón
- Balón del América rueda por la pantalla
- Efecto de impacto
- 🔊 Sonido de ¡GOOOOOOL!

### 🦅 Escena 4 - Vuelo del Águila
- Águila del Club América vuela
- Partículas doradas
- 🎆 Fuegos artificiales

### 📅 Cuenta Regresiva
- Contador en tiempo real
- Actualización cada segundo
- Animaciones visuales

### 🎁 Sección Interactiva
- Botones de confirmación
- Información de contacto
- Botones de sorpresas

### 🗺️ Mapa Integrado
- Google Maps integrado
- Ubicación exacta del evento

## 🚀 Cómo Usar

### Requisitos
- Navegador web moderno
- Conexión a internet

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/rynot-bit/Invitaci-n-byron.git
cd Invitaci-n-byron

# Opción 1: Abrir directamente
open index.html

# Opción 2: Con Python
python -m http.server 8000

# Opción 3: Con npm
npx http-server
```

## 📁 Estructura del Proyecto

```
Invitación-Byron/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── envelope.js
│   ├── countdown.js
│   ├── fireworks.js
│   ├── confetti.js
│   ├── maps.js
│   ├── audio.js
│   └── animations-utils.js
└── README.md
```

## 🎨 Colores Personalizados

```css
--primary-color: #FF6B6B      /* Rojo coral */
--secondary-color: #FFD93D    /* Amarillo dorado */
--accent-color: #6BCB77       /* Verde menta */
```

## 🔊 Características de Audio

- ✅ Síntesis de sonidos con Web Audio API
- ✅ Sin archivos de audio externos
- ✅ Sonido de ruptura de sello
- ✅ Sonido de gol
- ✅ Música de fondo opcional

## 🎬 Animaciones Incluidas

- ✨ Fade In/Out
- 📉 Slide animations
- 🎈 Bounce effect
- ⭕ Rotación suave
- 💫 Glow effect
- 🔄 Spin animation

## 📱 Diseño Responsivo

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Móvil (480px - 768px)
- ✅ Ultra móvil (360px - 480px)

## 🎯 Interacciones

1. **Clic en el sobre** → Abre la invitación
2. **"Sí, iré"** → Confirmación positiva
3. **"No podré ir"** → Confirmación negativa
4. **"🔊 Música"** → Alterna música
5. **"🎉 Sorpresa"** → Dispara confeti
6. **Clic en mapa** → Abre en Google Maps

## 🔧 Personalización

### Cambiar Fecha
En `js/countdown.js`:
```javascript
const eventDate = new Date('2026-06-25T17:00:00').getTime();
```

### Cambiar Ubicación
En `js/maps.js`:
```javascript
const latitude = 19.4326;
const longitude = -99.1332;
```

### Cambiar Nombre
En `index.html`:
```html
<p class="subtitle">¡Byron cumple 8 años!</p>
```

## 📄 Licencia

Proyecto personal disponible para uso y personalización.

## 👨‍💻 Autor

Creado con ❤️ para Byron

---

¡Que disfrutes de tu fiesta! 🎉⚽🦅
