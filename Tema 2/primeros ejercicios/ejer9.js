window.onload = function(){

    var arrnumeros = new Array();
    do{
        var entrada = prompt("Introduce 2 numeros separados por un espacio 1º entre-50 y 50, 2º entre 1 y 20");
    
        arrnumeros=entrada.split(" ");
    
        num1 = parseInt(arrnumeros[0]);
        num2 = parseInt(arrnumeros[1]);

        console.log(num1);
        console.log(num2);

    } while((num1 <= -50 || num1 >= 50) || (num2 <= 1 || num2 >= 20));

    var producto =num1;

    var salida = num1.toString() + " x 1 = "+ producto.toString();

    for(let i=2 ; i<=num2; i++){

        producto =num1*i;
        salida +=  "<br>" + num1.toString() + " x "+ i.toString() + " = "+ producto.toString();


    }

    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;




}