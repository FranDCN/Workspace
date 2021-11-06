window.onload = function(){
    //var bisiesto = (a) => {return ((a%4==0 && a%100!=0) || a%400==0)?1:0}
    /*var bisiesto = function (a){
        return ((a%4==0 && a%100!=0) || a%400==0)?1:0;
    }*/
    function bisiesto(a){
        let s = ((a%4==0 && a%100!=0) || a%400==0)?1:0;
        return s;
    }
    let entrada,a;
    do{
        entrada = prompt("Introduce un año");

        a = parseInt(entrada);

        console.log(a);

    } while(a<0);

    /*if(bisiesto(a)){
        salida=1;
    }else{
        salida=0;
    }*/
    const salida=bisiesto(a);

    console.log(salida);


    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;
}