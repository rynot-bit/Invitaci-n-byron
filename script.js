function abrirSobre(){

let sobre=document.querySelector(".sobre");
let invitacion=document.querySelector(".invitacion");

sobre.classList.add("abrir");

setTimeout(function(){
sobre.style.display="none";
invitacion.classList.add("mostrar");
},1000);

}
