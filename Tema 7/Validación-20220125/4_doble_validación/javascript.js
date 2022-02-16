
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
document.getElementById("idLimpiar").addEventListener('click', limpiar, false);
let formulario=document.forms["idFormulario"];

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function limpiar(e){
    formulario.getElementsBy
}


function validar(e){
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName

   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error

   // IMPORTANTE!!! Deshabilitamos el botón
  

    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){

        return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false  
    }
}


/********************************************************************************************
 *******************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/
function validarJS(eventopordefecto) {
    
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad() && validarMatricula() && validarProvincia();             
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre= formulario.elements["idNombre"]

    if (inputNombre.value == ""){        
        formulario.elements["idNombre"].className = "error";
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML="El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco"
        
        return false
    }
    return true
}

/***************************************************************************/
/***************************************************************************/

function validarEdad() {
 
    let inputEdad=formulario.elements["idEdad"]
    
    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.
    return true;
}
  
/***************************************************************************/
/***************************************************************************/

function validarMatricula() {
    
    let inputMatricula=formulario.elements["idMatricula"]

    // IMPORTANTE!! Realizar la validación de la matrícula mediante javascript y utilizando expresiones regulares

    return true;
}

/***************************************************************************/
/***************************************************************************/

function validarProvincia() {
    let selectProvincia=formulario.elements["idProvincia"]
    const valoresProvincia = new Set(["Gr","Ma"]);
   
    // IMPORTANTE!! Realizar la validación de la provincia mediante javascript   

    return true;
}


/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/

function validarAPIHTML(eventopordefecto) {   

    return true;
}
