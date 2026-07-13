function abrirInvitacion(){

    document.querySelector(".envelope").classList.add("abierto");

    setTimeout(function(){
        document.getElementById("contenido").style.display = "block";
        document.getElementById("sobre").style.display = "none";
    },800);

}
