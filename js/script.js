function abrirInvitacion(){

document.querySelector(".sobre").style.transform="scale(0)";

setTimeout(()=>{

document.querySelector(".sobre").style.display="none";
document.getElementById("invitacion").style.display="block";

},800);

}
