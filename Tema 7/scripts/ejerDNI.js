//comprueba que lo que hay en el id dni es un dni valido

let dni = document.getElementById("dni");

dni.addEventListener("blur",validarDni);

let patron=/^\d{8}[a-zA-Z]$/;
function validarDni(evt){
	//console.log(dni.value);
    if(patron.test(dni.value)){
        console.log("DNI Correcto");
    } else {
        console.log("DNI Incorrecto");
    }   

	
    evt.preventDefault();
}
