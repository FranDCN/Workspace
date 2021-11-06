window.onload = function(){
    //var perimetroRectangulo = (a,b) => {return a*2 + b*2}
    /*var perimetroRectangulo = function (a,b){
        return a*2 + b*2;
    }*/
    function perimetroRectangulo(a,b){
        let s = a*2 + b*2;
        return s;
    }
        
    let entrada, a, b;

    do{
        entrada = prompt("Introduce 2 numeros separados una,");

        arrnumeros=entrada.split(",");

        a = parseFloat(arrnumeros[0]);
        b = parseFloat(arrnumeros[1]);

        console.log(a);
        console.log(b);

    } while(arrnumeros.length!=2);

    const salida = perimetroRectangulo(a,b);
    console.log(salida);


    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;
}