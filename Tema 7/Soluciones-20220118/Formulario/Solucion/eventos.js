var color_css = 'background: yellow; color: red'
/**
* Uso de addEventListener this y Event
**/

document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(e){
    console.clear()
    console.log(`Usando this : %c${this.value}`,color_css);
    console.log(`Usando Event : %c${e.target.value}`,color_css);
    
    let formulario = document.forms["idFormulario"]
   
    /*
        Acceso a información del input text
    */
    console.log(`valor de Input nombre : %c${formulario.elements["idNombre"].value}`,'background: yellow; color: red')
    
    /*
        Acceso a información de input radiobutton
    */

    let elementos = document.getElementsByName("pregunta");
    
    for(let i=0; i<elementos.length; i++) {
        if(elementos[i].checked){
            console.log(`El elemento seleccionado es : %c${elementos[i].value}`,color_css)
        }        
    }  

    /*
        Acceso a información de input checkbox
    */

    let elemtCondiciones = formulario.elements["idCondiciones"];
    if(elemtCondiciones.checked){
          console.log(`Ha sido seleccionado el elemento de condiciones %c${elemtCondiciones.value}`,color_css);
    }

    let elemtPrivacidad = formulario.elements["idPrivacidad"];
    if(elemtPrivacidad.checked){
          console.log(`Ha sido seleccionado el elemento de privacidad: %c${elemtPrivacidad.value}`,color_css);
    }
   
    /*
        Acceso a información de un select
    */
    let lista = formulario.elements["idLista"];       
    let idxSeleccionado = lista.selectedIndex;                      // Índice seleccionado        
    let opcionSeleccionada = lista.options[idxSeleccionado];        // Elemento seleccionado
   
    console.log(`El Elemento de la lista de tipo Select, seleccionado es : %c${opcionSeleccionada.text} / ${opcionSeleccionada.value}`,color_css);
    
    /*
        Acceso a información de un DataList
    */
    var inputlista = formulario.elements["idInputDataList"];          // Obtenemos la lista
    console.log(`El Elemento de la lista de tipo DataList, seleccionado es: %c${inputlista.value} `,color_css);
    inputlista.value

    e.preventDefault( );
}


