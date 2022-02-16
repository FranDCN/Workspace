// Código js
var tiposBarcos = new Set(["lanchas" , "fragatas" , "portaAviones"]);

var tamanoBarcos = new Map([["lanchas",2] , ["fragatas",3] , ["portaAviones",4]]);

var numeroBarcos = new Map([["lanchas",2] ,["fragatas",4] , ["portaAviones",3]]);

var cnt =0;// BORRAR LUEGO SI ESO, util para comprobar en herramientas desarrollador, aun medio util al pintar la flota

var casillasOcupadas =[];//array con info de en que casillas hay barco en 1d
var flota = [];//coleccion de barcos

var tablero = new Array(10); //le pongo una longitud para poder usar .length


///////////////////////////////////////////////////////////////////////////////////////////////////////                P R O G R A M A      P R I N C I P A L                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    cnt= 0;
    for (const barco of flota) {

        for (const pos of barco[1]) {
            let x = parseInt(pos/10);
            let y = pos%10;
            document.getElementById(`id_${x}_${y}`).style.backgroundColor="grey";
            document.getElementById(`id_${x}_${y}`).innerHTML=`<div>${cnt}</div>`; // cnt indica el numero del barco, quizas cambiar por XY para saber el numero de la casilla o por algo que indique el tipo de barco
        }
        
    cnt++;

    }
}

async function pintaFlotaDemo(){
    cnt= 0;
    for (const barco of window.opener.flota) {  //window.opener

        for (const pos of barco[1]) {
            let x = parseInt(pos/10);
            let y = pos%10;
            document.getElementById(`id_${x}_${y}`).style.backgroundColor="grey";
            document.getElementById(`id_${x}_${y}`).innerHTML=`<div>${cnt+1}</div>`; // cnt indica el numero del barco, quizas cambiar por XY para saber el numero de la casilla o por algo que indique el tipo de barco
        }
        
    cnt++;
    await delay(1);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////                V E N T A N A S                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//metodo que abre demo y lo pinta demo.onload para que no se pinte hasta que la ventana ha cargado
var demo;
function demostracionVisual(){

    if(flota.length>0){

            demo = window.open("demo.html","demo","width=800,height=500");//en el segundo parametro usar _blank puede resolver problemas

            setTimeout(function(){demo.pintaFlotaDemo()},3000);
            

    }else{alert("Tienes que empezar la partida")}
 
/* forzaba originalmente que se ejecutase el metodo despues de abrir la ventana con el onload,
    pero buscando como hacer el delay para la demo he visto que podria forzar que se ejecutase mas tarde con un timeout, que opcion es mejor?
    seguramente el onload para la logica pero en onload tengo que poner _blank en el segundo parametro para que abra siempre una ventana distinta,
    si le pongo un nombre se pregunta si esta onload una ventana que ya esta cargada asi que no ejecuta el metodo, 
    Para version final preguntar que es mejor.


    if(flota.length>0){
        do{
            demo = window.open("demo.html","_blank","width=800,height=500");
        demo.onload = function(){
                demo.pintaFlotaDemo();
            }

        }while(!demo);
    }else{alert("Tienes que empezar la partida")}
 */
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

/*  ayuda para delays
    https://www.delftstack.com/es/howto/javascript/javascript-wait-for-x-seconds/  

function delay(n){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < n){
        end = new Date().getTime();
    }
}
*/
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////                O B J E T O S                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class persona{

    constructor(nombre,apellidos,edad){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(valor) {
        this._nombre = valor;
    }

    get apellidos() {
        return this._apellidos;
    }
    set apellidos(valor) {
        this._apellidos = valor;
    }

    get edad() {
        return this._edad;
    }
    set edad(valor) {
        this._edad = valor;
    }

    toString() {
        return "nombre "+this.nombre//metodo get
    }
    
    valueOf() {
        return this.edad//metodo get
    } 

    static muestraSaludo(){
        alert(this.#creaSaludo());
    }

    static#creaSaludo() {
        return  'GOOOOOOOOOOOOD MOOOOOOORNIIIIIIIIIIIIING VIETNAAAAAAAAAAAAAAAAM\ndemostracion del uso de mis metodos privados y estaticos'
     }

}

class autor extends persona {
    constructor() {
        super("Pablo","Sierra Torres",27);
        this._github = "git url";
        this._lenguaje = "JS";
        this._version = "0.1";
   }

    get github() {
    return this._github;
    }
    set github(valor) {
        this._github = valor;
    }

    get lenguaje() {
        return this._lenguaje;
    }
    set lenguaje(valor) {
        this._lenguaje = valor;
    }
    get version() {
        return this._version;
    }
    set version(valor) {
        this._version = valor;
    }

}

class jugador extends persona {
    constructor(nombre,apellidos,edad) {

        super(nombre,apellidos,edad);
        this._aciertos = 0;
        this._fallos = 0;
        this._id = 1;
       
   }
    get aciertos() {
        return this._aciertos;
    }
    set aciertos(valor) {
        this._aciertos = valor;
    }

    get fallos() {
        return this._fallos;
    }
    set fallos(valor) {
        this._fallos = valor;
    }

    get id() {
        return this._id;
    }
    set id(valor) {
        this._id = valor;
    }

}

persona.prototype.funcionProto = function(){
    return "Añadido mediante prototipo";
}

let person = new persona;
let auto = new autor;
let jugado = new jugador;
//comprobacion de como el metodo añadido por prototipo funciona
console.log(person.funcionProto());
console.log(auto.funcionProto());
console.log(jugado.funcionProto());




function creaJugador(){

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    let jugador1 = new jugador(nombre,apellidos,edad);
    

    return jugador1;
}


function enseñaAutor(){
    let autor1 = new autor;
    persona.muestraSaludo()

    alert(`AUTOR DEL JUEGO \n  nombre : ${autor1.nombre}\n  apellidos : ${autor1.apellidos}\n  edad : ${autor1.edad}\n  github : ${autor1.github}\n  lenguaje : ${autor1.lenguaje}\n  version : ${autor1.version}`);
}

function enseñaJugador(){
    let jugador1 = creaJugador();

    alert(`JUGADOR \n  nombre : ${jugador1.nombre}\n  apellidos : ${jugador1.apellidos}\n  edad : ${jugador1.edad}\n  aciertos : ${jugador1.aciertos}\n  fallos : ${jugador1.fallos}\n  ID : ${jugador1.id}`);
}


/*TO DO para version final
las nuevas ventanas con onload o timeout?
eliminar console logs y cnt que solo son para comprobar cosas
idea: unir las ventanas de demo e informacion en una sola? a la izq el tablero a la dcha la lista
mejorar funcionalidad de la poo, pensar en que podemos quitar del progama general y añadir como metodos
*/