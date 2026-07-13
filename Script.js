document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("abrir");
    const sobre = document.querySelector(".envelope");

    if (boton && sobre) {
        boton.onclick = function () {
            sobre.classList.toggle("abierto");
            alert("Sello presionado");
        };
    }

});
