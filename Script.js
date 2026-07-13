window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1200);

});

const boton = document.getElementById("abrir");
const tapa = document.getElementById("tapa");
const contenido = document.getElementById("contenido");
const sobre = document.getElementById("sobre");

boton.addEventListener("click", abrirInvitacion);

function abrirInvitacion() {

    boton.style.pointerEvents = "none";

    tapa.style.transform = "rotateX(180deg)";

    setTimeout(() => {

        sobre.style.transition = "1s";
        sobre.style.opacity = "0";
        sobre.style.transform = "translateY(-80px)";

    }, 600);

    setTimeout(() => {

        sobre.style.display = "none";

        contenido.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1500);

}

document.querySelector(".ubicacion").addEventListener("click", function(e){

    e.preventDefault();

    window.open(
    "https://maps.google.com/?q=Calle+Venus+Mz+13A+Lt+4+Colonia+Lomas+de+la+Estancia",
    "_blank");

});

document.querySelector(".whatsapp").addEventListener("click", function(e){

    e.preventDefault();

    window.open(
    "https://wa.me/?text=Confirmo+mi+asistencia+al+cumpleaños+de+Byron",
    "_blank");

});
