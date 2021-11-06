window.onload = function(){

    var arrnumeros = new Array();
    do{
        var entrada = prompt("Introduce una secuencia de numeros separados por coma y terminando con -1");
    
        arrnumeros=entrada.split(",");

        last= arrnumeros.length -1;

        numf = parseInt(arrnumeros[last]);

        console.log(numf);
        
    } while(numf!=-1);

    salida = "NO";

    console.log(arrnumeros.length);

    for(let i=0 ; i<arrnumeros.length; i++){

        if(parseInt(arrnumeros[i])==10){
            salida ="SI";
        }

    }

    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;




}