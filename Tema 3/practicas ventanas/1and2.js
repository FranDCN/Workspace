			
		//Recuperar valores del Padre
		


function compruebaedad(){

    let edad = document.getElementById("idEdad").value;
    let texto="";


    if(edad>=18){
        texto="es mayor de edad";
    }else {
        texto="es menor de edad";
    }

    // Mostrar valores en página actual
    
    window.opener.document.getElementById("mayormenor").innerHTML=texto;





}

		