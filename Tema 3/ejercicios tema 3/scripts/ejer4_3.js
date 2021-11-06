/* 
1 Crear un array para los nombres y otro para las edades.
 Introducir en el elemento 0 del primer array un nombre y en el elemento 0 del segundo array su edad y así sucesivamente hasta 6 nombres.
 Crear un enlace que permita mostrar por pantalla cada nombre con su edad y otro para ver la media de todas las edades.
 Utilizar una función para calcular la media de las edades.
*/



function enunciado4_3(){
    let enunciado =`<p>Crear un array para los nombres y otro para las edades.
    <br>Introducir en el elemento 0 del primer array un nombre y en el elemento 0 del segundo array su edad y así sucesivamente hasta 6 nombres.
    <br>Utilizar una función para calcular la media de las edades.
    <br>Crear un enlace que permita mostrar por pantalla cada nombre con su edad y otro para ver la media de todas las edades.
    <br><button align="center" onclick="ejercicio4_3()">Empieza el ejercicio</button>                </p>`;

document.getElementById('enunciado4.3').innerHTML = enunciado;
}

function ejercicio4_3(){

    
    preguntaTotal();
    creaArrays();
    calculaMedia();
    devuelvoDatos();
    
    }


    var cantidad;
    var nombres= [];
    var edades= [];






function preguntaTotal(){
    //El enunciado especifica que sean 6
    cantidad = prompt(`Cuantos alumnos hay en clase`);
}

function creaArrays(){
   
    for(let i=0; i<cantidad ;i++){
        nombres[i] = prompt("Dime un nombre de alumno.");
        edades[i] = parseFloat(prompt("Dime su edad.")); 
    }   
}

function calculaMedia(){
 let media=0;

    for (const e of edades) {
        media += e;
    }

    media = media/cantidad;
    console.log(media);
    return media;
}
function devuelvoDatos(){

    pTexto=``;

    for (let i = 0; i < cantidad; i++) {
        pTexto += `El alumno ${nombres[i]} tiene ${edades[i]}.<br>`
    }    
    pTexto += `la media de edades de la clase es ${calculaMedia()}.`;

    document.getElementById("respuesta4_3").innerHTML=pTexto;


}





/* 4.1 codigo apoyo para copiar cosas
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

function muestraOrdenAlfabetico(){ //a vewr, esto no funciona, soci apunta a socios asi que sort cambia ambas
//, hay que crearla parte a parte.
//implementear luego

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
