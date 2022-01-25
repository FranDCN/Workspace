
let formulario = document.formulario;
let correo = document.formulario.email;
let campoError = document.getElementById("idEmailError");

/* Asociar Manejadores de Eventos */    
correo.addEventListener("click",limpiarInput);
      
correo.addEventListener("blur",enviarInput);


/* Funciones manejadores */ 
function enviarInput(e){  
    if(this.value==""){ 
    
      e.preventDefault();     // parar la ejecución por defecto del evento.
      campoError.innerHTML ="rellene este campo";
    
    }else{
      
      formulario.submit();      // Forzar el evento submit del formulario
     
  }; 
}

function limpiarInput(){
    campoError.innerHTML= "";
    this.value="";
}


/**
  URL CÓDIGO FUENTE: https://francescricart.com/formulario-que-se-envia-de-forma-automatica-al-rellenar-los-datos/
*/