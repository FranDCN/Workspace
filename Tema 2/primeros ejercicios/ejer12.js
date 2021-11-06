window.onload = function(){
    /*var suma = function(a,b){
        return a+b;
    }*/
    //var suma = (a,b) => {return a+ b}
    function suma(a,b){
        let s = a+b;
        return s;
    }
    let entrada,a,b;
    do{
        entrada = prompt("Introduce 2 numeros separados una,");

        arrnumeros=entrada.split(",");

        a = parseInt(arrnumeros[0]);
        b = parseInt(arrnumeros[1]);

        console.log(a);
        console.log(b);

    } while(arrnumeros.length!=2);

    salida = suma(a,b);
    console.log(salida);


    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;
}