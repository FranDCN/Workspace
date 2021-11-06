window.onload = function(){

        var salida= "2";

        do{
        var numero = parseFloat(prompt("Introduce un numero mayor o igual a 2"));
        } while(numero<2);
    
        for(let par=4; par<=numero; par=par+2){

            salida += "<br>"+ par.toString();
        }
        document.getElementById("valor_entrada").innerHTML = numero;
		document.getElementById("valor_salida").innerHTML = salida;
}
