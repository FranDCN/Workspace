var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(e){
    
    console.clear();

    let valorTexto = document.forms["idFormulario"].elements["idText"].value;
    console.log(`El nombre es: %c${valorTexto}`,color_css);

    var elementos = document.getElementsByName("pregunta");
    for(var i=0; i<elementos.length; i++) {
        if(elementos[i].checked){
            console.log(`El elemento seleccionado es: %c${elementos[i].value}`,color_css); 
        }
    }

    var elemtCondiciones = document.getElementById("condiciones");
    if(elemtCondiciones.checked){
        console.log(`Se ha seleccionado: %c${elemtCondiciones.value}`,color_css);
    }
    var elemtPrivacidad = document.getElementById("privacidad");
    if(elemtPrivacidad.checked){
        console.log(`Se ha seleccionado: %c${elemtPrivacidad.value}`,color_css);
    }
     
    var lista = document.getElementById("lista"); // Obtenemos la lista
    var idxSeleccionado = lista.selectedIndex; // Obtenemos el indice seleccionado
    var opcionSeleccionada = lista.options[idxSeleccionado]; // Elemento seleccionado
    // Información del opción seleccionado
    var textoSelected = opcionSeleccionada.text;
    var valorSelected = opcionSeleccionada.value;
    console.log(`Opcion Seleccionada: ${textoSelected} \n Valor de la opción: %c${valorSelected}`,color_css);
        
    var inputlista = document.getElementById("inputList"); // Obtenemos la lista
    console.log(`Se ha seleccionado del datalist: %c${inputlista.value}`,color_css);

   
    console.log(`Se ha seleccionado: %c${elemtCondiciones.value}`,color_css);

    //console.log(`Usando Event : %c${e.target.value}`,color_css);
    
    
    e.preventDefault( );
}


