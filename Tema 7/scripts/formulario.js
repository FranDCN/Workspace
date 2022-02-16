let form = document.forms["idForm"];
let submit = form.elements["idSubmit"];
let inputs = form.elements;

let mensaje
let caja = form.elements["idArea"];
caja.addEventListener("click",rellenar);
submit.addEventListener("click",Info);

function rellenar(evt){
    mensaje= prompt("Digamelon");
    
}

function Info(evt){
    let nombre = inputs["idNombre"].value;
    let numero = inputs["idNumero"].value;
    let fecha = inputs["idFecha"].value;
    let oculto = inputs["idHidden"].value;
    let contras = inputs["idPassword"].value;
    let area = inputs["idArea"].value;
    let select = inputs["idSelect"].value;
    let lista = inputs["idDatalist"].value;
    let radio
    if(inputs["idR1"].checked){
        radio = inputs["idR1"].value;
    }
    if(inputs["idR2"].checked){
        radio = inputs["idR2"].value;
    }
    if(inputs["idR3"].checked){
        radio = inputs["idR3"].value;
    }
    let check1= inputs["idCbox1"].value;
    let check2= inputs["idCbox2"].value;
    let color= inputs["idColor"].value;

    console.log(nombre);
    console.log(numero);
    console.log(fecha);
    console.log(oculto);
    console.log(contras);
    console.log(area);
    console.log(select);
    console.log(lista);
    console.log(radio);
    if(inputs["idCbox1"].checked){
        console.log(check1);
    }
    if(inputs["idCbox2"].checked){
        console.log(check2);
    }
    console.log(color);


    //let select = inputs["idSelect"].value;
    //let list = inputs["idDatalist"].value;

    //let color= inputs["idColor"].value;

    //let info = document.getElementById("Respuestas");
    evt.preventDefault();
}