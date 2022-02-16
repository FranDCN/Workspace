
let formulario = document.formulario
let correo = formulario.elements["email"];
let campoError = document.getElementById("idEmailError");

/* Asociar Manejadores de Eventos */    
correo.addEventListener("click",limpiarInput);
      
correo.addEventListener("blur",enviarInput);


/* Funciones manejadores */ 
function enviarInput(e){  

    let regExp = /[^@\s]+@[^@\s]+\.[^@\s]+/g;     
    
    if(this.value !== "" && regExp.test(this.value) ==false){         
        
        campoError.innerHTML= "[RegExp]Formato Incorrecto";       

    }else{      
      campoError.innerHTML= "";
      formulario.submit();      
      
  }; 
}

function limpiarInput(e){    
    campoError.innerHTML= "";
    this.setCustomValidity("")
}


