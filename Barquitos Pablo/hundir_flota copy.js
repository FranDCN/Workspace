// Código js
var tiposBarcos = new Set(["lanchas" , "fragatas" , "portaAviones"]);

var tamanoBarcos = new Map([["lanchas",2] , ["fragatas",3] , ["portaAviones",4]]);

var numeroBarcos = new Map([["lanchas",2] ,["fragatas",4] , ["portaAviones",3]]);




var cnt =0;// BORRAR LUEGO SI ESO, util para comprobar en herramientas desarrollador, aun medio util al pintar la flota

var casillasOcupadas =[];//array con info de en que casillas hay barco en 1d
var flota = [];//coleccion de barcos

var tablero = new Array(10); //array 10x10


////////////////////////////////////////        P R O G R A M A     P R I N C I P A L       /////////////////////////////////////////////////////////////////////////////////////////////////////////
function partida(){

    
    empieza();//pone a cero
    

    creaTableroCeros();

    ubicarBarcos();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//reinicia el html y las array para las partidas posteriores a la primera
function empieza(){    

    cnt =0;

    limpiahtml();

//reinicia las array
   
    flota=null;
    flota=[];

    casillasOcupadas=null;
    casillasOcupadas=[];

    tablero=null;
    tablero = new Array(10);//importante aqui la longitud de tablero para usar tablero.length cuando se rellene el tablero cambiar por un const arriba quizas?
    
}

//pone cada td en azul y quita el contador d barco
function limpiahtml(){
    celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor="aqua";
        
    }
    casillasOcupadas.forEach(pos => {
        let x = parseInt(pos/10);
        let y = pos%10;
        document.getElementById(`id_${x}_${y}`).innerHTML=``;
    })

}

//llena de 0s la array tablero
function creaTableroCeros(){

    for (let i = 0; i < tablero.length; i++) {
        tablero[i] = new Array(10);

        for (let j = 0; j < tablero[i].length; j++) {
            
            tablero[i][j] = 0;
        }
    }
}

//crea barco y si esta bien añade a flota
function ubicarBarcos(){
     cnt =0;
     let sentido;
     let barco = [];
    
    numeroBarcos.forEach(function(cantidad,tipo){//recorre los tipos de barco escogiendo el sentido de cada uno ,da valores al barco,comprueba  que no colisiona con otro barco y si esta bien lo pinta
    // numeroBarcos.forEach(function(VALOR,INDEX){
        for (let i = 0; i < cantidad; i++) {
            do{
                barco=null;
                barco=[];

                let a = parseInt(Math.random()*2); //0 o 1

                if (a==0){//horizontal

                    sentido="horizontal";
                    tamano = tamanoBarcos.get(tipo);     //como comparten indice al entrar por el indice de numerobarco puedo entrar al valor de tamanobarco
                    //escoge posicion inicial
                    let posX  = (parseInt(Math.random()*(11-tamano)));
                    let posY  = (parseInt(Math.random()*10));
                    //creo nuevo barco
                    barco.push(valorCoordenadas(posX,posY));
                    for (let i = 0; i < tamano-1; i++) {
                        posX  +=1;
                        barco.push(valorCoordenadas(posX,posY));
                    }  

                }else{//vertical

                    sentido="vertical";

                    tamano = tamanoBarcos.get(tipo)     //como comparten indice al entrar por el indice de numerobarco puedo entrar al valor de tamanobarco
                    //escoge posicion inicial

                    let posX  = (parseInt(Math.random()*10));
                    let posY = (parseInt(Math.random()*(11-tamano))); 
                    //creo nuevo barco
                    barco.push(valorCoordenadas(posX,posY));
                    for (let i = 0; i < tamano-1; i++) {
                        posY  +=1;
                        barco.push(valorCoordenadas(posX,posY));
                    }
                }
            }while(!comprueba(barco));
            

console.log("BARCO BUENO")//borra
            barcoTablero(barco);                    //añado barco a tablero
            flota.push( [tipo,barco,sentido]);      //añado barco a flota

            for (const pos of barco) {
                casillasOcupadas.push(pos)
        }

            
        }
        
    });

}

//devuelve el valor de la posicion(2,3) como un unico numero(23)
function valorCoordenadas(x,y){
    let posicion = x*10+y;
    return posicion;

}

//si devuelve true es un buen barco, ninguna posicion de las q va a pintar esta pintada ya
function comprueba(barco){
    console.log("COMPRUEBA BARCO")//borraa looooogs
    let valido= true;
    barco.forEach(pos => {
        if (casillasOcupadas.includes(pos)){
            valido=false;
            console.log("ERROR ERROR")

        }
        console.log("¿esta "+pos+" en las casillas ocupadas : "+casillasOcupadas+"?")

    });

    return valido;
}

//añade los 1 al tablero donde hay un barco
function barcoTablero(barco){
    barco.forEach(pos => {
        let x = parseInt(pos/10);
        let y = pos%10;
        tablero[x][y]=1;
    });
}

/*con los valores de cada barco en la flota lo pinta en el html
si quisiera a cada barca d un color contar con el el parametro tipo de barco tb
Ahora no se usa, solo se pinta la demo
*/
function pintaFlota(){
    for (const barco of flota) {

        for (const pos of barco[1]) {
            let x = parseInt(pos/10);
            let y = pos%10;
            document.getElementById(`id_${x}_${y}`).style.backgroundColor="grey";
            document.getElementById(`id_${x}_${y}`).innerHTML=`<div>${cnt}</div>`; 
        }
        
cnt++;

    }
}

function pintaFlotaDemo(){
    for (const barco of window.opener.flota) {  //window.opener

        for (const pos of barco[1]) {
            let x = parseInt(pos/10);
            let y = pos%10;
            document.getElementById(`id_${x}_${y}`).style.backgroundColor="grey";
            document.getElementById(`id_${x}_${y}`).innerHTML=`<div>${cnt}</div>`; 
        }
        
    cnt++;
    delay(20);
    
    }
}


//metodo que abre demo y lo pinta demo.onload para que no se pinte hasta que la ventana ha cargado
var demo;
function demostracionVisual(){

    if(flota.length>0){
        do{
            demo = window.open("demo.html","_blank","width=800,height=500");
        demo.onload = function(){
                demo.pintaFlotaDemo();
            }

        }while(!demo);
    }else{alert("Tienes que empezar la partida")}
 
 }


//metodo para ver la info de la flota
var info;
function verInformacionBarcos(){

    if(flota.length>0){
        do{
            info = window.open("info.html","_blank","width=800,height=500");
            info.onload = function(){
                info.creaLista();
            }

        }while(!info);
    }else{alert("Tienes que empezar la partida")}
 
    



}

//crea las listas con la info de los barcos
function creaLista(){
    let ul = document.getElementById("lista");//selecciono la lista en una variable
    let cntBarcos = 0;
    numeroBarcos.forEach(function(cantidad,tipo){//recorre los tipos de barco escogiendo el sentido de cada uno ,da valores al barco,comprueba  que no colisiona con otro bar
        // numeroBarcos.forEach(function(VALOR,INDEX){

            let tipoLi = document.createElement('li'); //creo elemento 
            let textoUlLi = document.createTextNode(tipo);
            tipoLi.appendChild(textoUlLi);//añado elemento a lista
    
            let ol = document.createElement('ol');//creo lista
    
            for (let i = 0; i < cantidad; i++) {
                                            
        
            //tantas vueltas como cantidad de barco por tipo
                
                let barcoLi = document.createElement('li');//creo elemento barco
                let textobarcoLi = document.createTextNode(textoInfoBarco(cntBarcos));
                barcoLi.appendChild(textobarcoLi);//añado texto a elemento barco

                ol.appendChild(barcoLi);//añado elemento barco a ol
                cntBarcos++;
            }
            tipoLi.appendChild(ol);//añado elemento a lista

            ul.appendChild(tipoLi);//añado elemento a lista


    });


}
//devuelve texto para la lista de la info
function textoInfoBarco(n){
    let textoBarco="Este barco esta en las casillas :";
    console.log(window.opener.flota[n][1]);

    for (let i = 0; i < window.opener.flota[n][1].length; i++) {
        textoBarco += " " + window.opener.flota[n][1][i];
        
    }

        return textoBarco;
}





function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}


/*
function delay(n){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < n){
        end = new Date().getTime();
    }
}
*/


let autor = {

    nombre :"",
    apellidos : "",
    edad : "",

    informacionAutor : function(){

        let info = `El autor es ${this.nombre} ${this.apellidos} de ${this.edad} años`
    },

    github : "",
    lenguaje : "",
    version : ""
};

let jugador = {


    nombre : "jugador 1",
    apellidos:"apellido1",
    edad :"18",
    id: 12345,

    //resultados = {"aciertos":0,"fallos":0,"puntuacion":0}


}





























/*
Crear una función llamada ubicarBarcos,  
que aleatoriamente ubique los barcos en el tablero.
 Completando una matriz con la siguiente estructura:

lancha_1        1,3     Horizontal         
lancha_2    	2,3     Horizontal



Crear la función demostracionVisual
Dibuja los barcos en la tabla similar a la del documento index,html, según van siendo creados. Para que el proceso sea más vistoso debes utilizar la función delay(n).
Crear un botón en el juego llamado "Ver Demo colocación", que hace uso de esta función.
Utiliza una nueva ventana para visualizar el proceso.


Crear la función VerInformacionBarcos
Inserta en una nueva ventana(haciendo uso del dom) la información de los diferentes barcos.
La información de los barcos está localizada en :



let tiposBarcos = new Set(["lanchas" , "portaAviones"])
let tamanoBarcos = new Map([["lanchas",2] , ["portaAviones",3]])
 let numeroBarcos = new Map([["lanchas",2] , ["portaAviones",3]])


Función delay(n), ->  Aplicar un retraso de n segundos:

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}




*/