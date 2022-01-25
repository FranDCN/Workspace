// Funcion que actualiza un elemento p con id p1, mostrando posicion del raton
function mostrarPosicion(evt){
	
	document.getElementById("posX").innerHTML = "Posicion X: "+evt.clientX
	document.getElementById("posY").innerHTML = "Posicion Y: "+evt.clientY	
}

// Asignamos un manejador a onmouseover
document.addEventListener("mousemove",mostrarPosicion);
