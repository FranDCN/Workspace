window.onload = function(){

    var salida= "1";

    do{
    numero = parseFloat(prompt("Introduce un numero mayor o igual a 1"));
    } while(numero<1);

    for(let par=3; par<=numero; par=par+2){

        salida += "<br>"+ par.toString();
    }
    document.getElementById("valor_entrada").innerHTML = numero;
    document.getElementById("valor_salida").innerHTML = salida;
}
