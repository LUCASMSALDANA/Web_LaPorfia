var body = document.querySelector("body");
const boton = document.querySelector("#botcolor");

boton.onclick=cambiarcolor;
var fondo= "#ece7bd";

function cambiarcolor(){
    if(fondo=="#edd8be"){
        body.style.backgroundColor="#ece7bd"
        fondo="#ece7bd";
    }else{
        body.style.backgroundColor="#edd8be"
        fondo ="#edd8be";
    }
}