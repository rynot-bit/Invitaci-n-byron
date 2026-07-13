function abrirInvitacion(){

    const sobre = document.querySelector(".envelope");
    const contenido = document.getElementById("contenido");

    if (sobre) {
        sobre.classList.add("abierto");
    }

    if (contenido) {
        contenido.style.display = "block";
    }

}
