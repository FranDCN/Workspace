// Funcion que actualiza un elemento p con id p1, mostrando posicion del raton
function mostrarPosicion(evt){
	
	document.getElementById("idInfoX").innerHTML=evt.clientX
	document.getElementById("idInfoY").innerHTML=evt.clientY	
}

// Asignamos un manejador a onmouseover
document.addEventListener("mousemove",mostrarPosicion);


