
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});


document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("abrir");
    const sobre = document.querySelector(".envelope");

    if (boton && sobre) {

        boton.addEventListener("click", function () {

            sobre.classList.add("abierto");

        });

    }

});
