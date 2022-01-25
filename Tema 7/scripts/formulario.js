let form = document.forms["idForm"];
let submit = form.elements["idSubmit"];
let inputs = form.elements;

submit.addEventListener("click",Info);


function Info(evt){

    console.log("Hola Mundo");

    let nombre = inputs["idNombre"].value;
    let numero = inputs["idNumero"].value;
    let fecha = inputs["idFecha"].value;
    let oculto = inputs["idHidden"].value;
    let contras = inputs["idPassword"].value;
    let area = inputs["idArea"].value;
    let radioBoton = inputs["idNombre"].value;
    let checkbox = document.getElementsByName("checkbox");
    console.log(nombre);
    console.log(numero);
    console.log(fecha);
    console.log(oculto);
    console.log(contras);
    console.log(area);
    console.log(radioBoton);

    //let select = inputs["idSelect"].value;
    //let list = inputs["idDatalist"].value;

    //let color= inputs["idColor"].value;

    //let info = document.getElementById("Respuestas");
    evt.preventDefault();
}