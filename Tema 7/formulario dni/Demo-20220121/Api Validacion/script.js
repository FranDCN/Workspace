
let formulario = document.formulario
let correo = formulario.elements["idEmail"];
let campoError = document.getElementById("idEmailError");

/* Asociar Manejadores de Eventos */    
correo.addEventListener("click",limpiarInput);
      
correo.addEventListener("blur",enviarInput);


/* Funciones manejadores */ 
function enviarInput(e){  

    if(this.checkValidity() == false){ 
    
      if(this.validity.valueMissing){
        console.log("Dentro de correo Obligatorio")
        this.setCustomValidity("[DWEC] Correo es Obligatorio")
      }

      if(this.validity.patternMismatch){
        console.log("Dentro de patron incorrecto")
         this.setCustomValidity("[DWEC] Correo formato incorrecto")
      }
     
      e.preventDefault();     // parar la ejecución por defecto del evento.
      campoError.innerHTML = correo.validationMessage;
    
    }else{      
      
      formulario.submit();      // Forzar el evento submit del formulario
      console.log("se ha procedio al envío del formulario");
  }; 
}

function limpiarInput(e){
  console.log("limpio Input")
    campoError.innerHTML= "";
    this.setCustomValidity("")
    this.value="";
}


/**
  URL CÓDIGO FUENTE: https://francescricart.com/formulario-que-se-envia-de-forma-automatica-al-rellenar-los-datos/
*/