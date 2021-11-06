window.onload = function(){
    do{
        numero = parseInt(prompt("Introduce un numero"));
    }while(numero<1);

    salida = "valorintrducido -> " + numero.toString() + "<br><br>";



    for(i=1;i<numero;i++){
        for(j=1;j<=i;j++){
            salida += "* "
        }
        salida +="<br>"
    }

    document.write(salida);
}
