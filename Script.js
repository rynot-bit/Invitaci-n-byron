window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }

});


const abrir = document.getElementById("abrir");
const sobre = document.querySelector(".envelope");

if (abrir && sobre) {

    abrir.addEventListener("click", function () {

        sobre.classList.add("abierto");

    });

}
