document.addEventListener('DOMContentLoaded', () => { initMaps(); });

function initMaps() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    const latitude = 19.4326;
    const longitude = -99.1332;
    const address = 'Calle Venus Mz 13A Lt 4, Col. Lomas de la Estancia';

    mapContainer.innerHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5697635169547!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x${encodeURIComponent('0x0')}!2s${encodeURIComponent(address)}!5e0!3m2!1ses!2smx!4v1234567890"
            width="100%"
            height="100%"
            style="border: none; border-radius: 15px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
}

window.initMaps = initMaps;