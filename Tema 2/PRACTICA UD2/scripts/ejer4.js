/*
Crea una página web que pida un número entero positivo al usuario 
y calcule su factorial. El factorial de 5(se suele denotar como 5!), 
es el resultado de multiplicar: 1*2*3*4*5, es decir:120
*/

function ejercicio4(){



    let num,resultado;


    do{
        num = parseInt(prompt("Dime un numero entero mayor a 0"));

    }while(isNaN(num) || num<1)




    //FACTORIAL FUNCION CLASICA
    function clasicaFactorial(){
        
        resultado=num;

        for (let i = resultado-1; i >1; i--) {
            resultado=parseInt(resultado*i);
        }
        
    }
    clasicaFactorial();
    alert(` funcion normal El factorial de ${num} es ${resultado}`);





    //FACTORIAL FUCNION ANONIMA

        let anonimaFactorial = function(num,resultado){
            resultado=num;
            for (let i = resultado-1; i >1; i--) {
                resultado=parseInt(resultado*i);
                
            }  
            return resultado;  
        }
    alert(` funcion anonima El factorial de ${num} es ${anonimaFactorial(num,resultado)}`);


    // FACTORIAL FUNCION FLECHA

        let flechaFactorial = (num,resultado) => {
            resultado=num;
            for (let i = resultado-1; i >1; i--) {
                resultado=parseInt(resultado*i);   
            }    
            return resultado;
        }

    alert(`funcion flecha El factorial de ${num} es ${flechaFactorial(num,resultado)}`);



}