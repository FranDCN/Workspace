var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(evento){
    
    console.clear()
    console.log(`Usando this : %c${this.value}`,color_css);
    console.log(`Usando Event : %c${evento.target.value}`,color_css);
    

    let formulario = document.forms["idFormulario"]
   
    /*
        Acceso a información del input text
    */
    console.log(`valor de Input nombre : %c${formulario.elements["idNombre"].value}`,color_css)
    
    
    
    evento.preventDefault();
}


