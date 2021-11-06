/* 
1 Crear un programa que permita introducir 10 nombres de los socios de un club (utilizar la estructura de array). 
--Los elementos deben leerse de pantalla utilizando el método prompt().
--En el mensaje de salida que permite la introducción de los nombres debe indicarse el número de elemento que se solicita.
Después de introducir todos los elementos se tiene que mostrar la siguiente información por pantalla:
•	mostrar los nombres de los socios tal y como se han introducido
•	indicar el número socios que hay
•	mostrar el nombre de los socios ordenados por orden alfabético
•	mostrar el nombre de los socios en orden inverso al introducido

*/

/*window.onload = function(){*/


/*
var vs=null;
var socios=[];				
function abreVentana(){			
    
    vs = window.open("secundaria.html","","height=300,width=300");	
        
}

function creaArray(){

    for(let i=1; i<=10;i++){
        socios.push(prompt(`Introduce el usuario numero ${i}`));
    }
}



function muestraOrdenOriginal(){
    abreVentana();

    vs.document.write(window.opener.socios.slice());
}

function indicaNumeroSocios(){
    abreVentana();

    vs.document.write("hay "+window.opener.socios.length+" socios");
}

function muestraOrdenAlfabetico(){
    abreVentana();
    let soci = window.opener.socios;
    vs.document.write(soci.sort());
}

function muestraOrdenOriginalInverso(){
    abreVentana();

    vs.document.write(window.opener.socios.reverse());
}


*/

function enunciado4_1(){
    let enunciado =`<p>1 Crear un programa que permita introducir 10 nombres de los socios de un club (utilizar la estructura de array). 
    --Los elementos deben leerse de pantalla utilizando el método prompt().
    --En el mensaje de salida que permite la introducción de los nombres debe indicarse el número de elemento que se solicita.
    Después de introducir todos los elementos se tiene que mostrar la siguiente información por pantalla:</p>


    <button onclick="creaArray()">Crea la array</button>


    <p onclick="muestraOrdenOriginal()">•	mostrar los nombres de los socios tal y como se han introducido</p>
    <p onclick="indicaNumeroSocios()">•	indicar el número socios que hay</p>
    <p onclick="muestraOrdenAlfabetico()">•	mostrar el nombre de los socios ordenados por orden alfabético</p>
    <p onclick="muestraOrdenOriginalInverso()">•	mostrar el nombre de los socios en orden inverso al introducido</p>`;
document.getElementById('enunciado4.1').innerHTML = enunciado;
    

}



















var vs=null;
var socios=[];

function abreVentana(){			
    
    vs = window.open("secundaria.html","","height=300,width=300");	
        

}

function creaArray(){

    for(let i=1; i<=10;i++){
        socios[i-1] = prompt(`Introduce el usuario numero ${i}`);
    }
}



function muestraOrdenOriginal(){
    abreVentana();

    vs.document.write(socios.slice());
}

function indicaNumeroSocios(){
    abreVentana();

    vs.document.write(`hay ${socios.length} socios`);
}

function muestraOrdenAlfabetico(){ 

    abreVentana();
    let soci = [];
    for(let i=0; i<10;i++){
        soci[i] = socios[i];
    }


    vs.document.write(soci.sort());
}

function muestraOrdenOriginalInverso(){
    abreVentana();

    let soci = [];
    for(let i=0; i<10;i++){
        soci[i] = socios[i];
    }
    vs.document.write(soci.reverse());
}


/*apuntes sobre ejercicio

all principio todos las funciones tenian "vs.window.opener.socio.FUNCION"
pero la funcion esta ejecutandose en el primer html, no en el segundo, por eso no se usa window opener,
al cambiar vs desde el ppal sucede todo

*/
