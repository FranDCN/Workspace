// Código js
var tiposBarcos = new Set(["lanchas" , "fragatas" , "portaAviones"]);

var tamanoBarcos = new Map([["lanchas",2] , ["fragatas",3] , ["portaAviones",4]]);

var numeroBarcos = new Map([["lanchas",2] ,["fragatas",4] , ["portaAviones",3]]);




var cnt=0;// BORRAR LUEGO SI ESO, util para comprobar en herramientas desarrollador

var casillasOcupadas =[];
var barco = [];

var tablero = new Array(10);



function partida(){

    if(cnt>0){
        empieza();//pone a cero
    }

    creatablero();

    ubicarBarcos();



}



//reinicia el html y las array para las partidas posteriores a la primera
function empieza(){    



    cnt=0;

    limpiahtml();

//reinicia las array
   
    
    barco=null;
    barco=[];

    casillasOcupadas=null;
    casillasOcupadas=[];

    tablero=null;
    tablero = new Array(10);


}

/*pone cada td a blanco y elimina el contador
 a futuro en vez d contador un indicador del tipo de barco quizas?*/
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


function ubicarBarcos(){
     cnt=0;
    
    numeroBarcos.forEach(function(cantidad,tipo){//recorre los tipos de barco escogiendo el sentido de cada uno ,da valores al barco,comprueba  que no colisiona con otro barco y si esta bien lo pinta
    // numeroBarcos.forEach(function(VALOR,INDEX){
        for (let i = 0; i < cantidad; i++) {
            do{

                barco=null;
                barco=[];

                let a = parseInt(Math.random()*2); //0 o 1

                if (a==0){//horizontal

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

                    tamano = tamanoBarcos.get(tipo)     //como comparten indice al entrar por el indice de numerobarco puedo entrar al valor de tamanobarco
                    //escoge posicion inicial

                    let posX  = (parseInt(Math.random()*10));
                    let posY = (parseInt(Math.random()*(11-tamano))); 
                    
                    barco.push(valorCoordenadas(posX,posY));

                    for (let i = 0; i < tamano-1; i++) {
                        posY  +=1;
                        barco.push(valorCoordenadas(posX,posY));
                    }
                }
            }while(!comprueba());
            
console.log("BARCO BUENO")//borra
            pintaBarco();
        }
        
    });

console.log(cnt+" cuadros pintados");
}

//devuelve el valor de la posicion como un unico numero
function valorCoordenadas(x,y){
    let posicion = x*10+y;
    return posicion;

}

//si devuelve true es un buen barco, ninguna posicion de las q va a pintar esta pintada ya
function comprueba(){
    console.log("COMPRUEBA BARCO")//borraaaa
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

/*con los valores de barco lo pinta en el html
si quisiera a cada barca d un color crear mas metodos o meterle el parametro tipo de barco*/
function pintaBarco(){
    barco.forEach(pos => {
        let x = parseInt(pos/10);
        let y = pos%10;
        casillasOcupadas.push(pos)
        document.getElementById(`id_${x}_${y}`).style.backgroundColor="grey";
        document.getElementById(`id_${x}_${y}`).innerHTML=`<div>${cnt}</div>`;

        tablero[x][y]=1;

cnt++;

    });
}

//lo meto xq he oido que hace falta pero no lo necesito de momento
function creatablero(){

    for (let i = 0; i < tablero.length; i++) {
        tablero[i] = new Array(10);

        for (let j = 0; j < tablero[i].length; j++) {
            
            tablero[i][j] = 0;
            console.log(tablero[i][j]);
        }
    }
}


function partida(ventana){

    if(cnt>0){
        empieza();//pone a cero
    }
    creatablero();

    ubicarBarcos();
}

var demo;

function test(){
return "holamundo";
}

function demostracionVisual(){



    do{
        demo = window.open("demo.html","_blank","width=800,height=500");

        
        demo.onload = function(){
            demo.partida();


        }

    }    while(!demo);
      












    //investigar como parar onclick return false o algo asi

     /*
    console.log(a);

    var a = window.open("demo.html","_blank","width=800,height=500");
    a.addEventListener('load', function(){
      a.partida();
    }, true);

    */









}

function verInformacionBarcos(){}



function delay(n){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < n){
        end = new Date().getTime();
    }
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