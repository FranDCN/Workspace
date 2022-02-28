// Clases
class persona {
    static _pMasAlta = 0;
    #_datos = "datos super delicados"

    constructor(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get edad() {
        return this._edad;
    }
    set edad(valor) {
        this._edad = valor;
    }
    static incremento() {
        persona._nUsuarios += 1;
    }
    toString() {
        let text = `${this._nombre} ${this._apellidos} tiene ${this._edad} años `;
        return text;
    }
    valueOf() {
        return this.edad;
    }
    #accederDatos(){
        console.log(this.#_datos);
        return this.#_datos;
    }
    verdatos(){
        return this.#accederDatos;
    }

}
class jugador extends persona {

    constructor(nombre, apellidos, edad, id) {
        super(nombre, apellidos, edad);
        this._id = id;
        this._aciertos = 0;
        this._fallos = 0;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get aciertos() {
        return this._aciertos;
    }
    set aciertos(aciertos) {
        this._aciertos = aciertos;
    }
    get fallos() {
        return this._fallos;
    }
    set fallos(fallos) {
        this._fallos = fallos;
    }
    //Puntuacion mas alta
    static actualizarPuntuacion(puntuacion){
        if(persona._pMasAlta<puntuacion){
            persona._pMasAlta= puntuacion;
        }
    }
    toString(){
        let text = `\nCon id ${this.id} | ${this.aciertos} aciertos y ${this.fallos} fallos | tu puntuacion máxima es de ${persona._pMasAlta}`;
        return super.toString()+text;
    }
    //Aumentar fallos y Aciertos
    fallar(){
        this._fallos++;
    }
    acertar(){
        this._aciertos++;
    }
    nuevoId(){
        this._id = parseInt(Math.random() *10000);
    }
    valueOf() {
        return this.aciertos-this.fallos;
    }
}
class autor extends persona{
    constructor(nombre, apellidos, edad) {
        super(nombre, apellidos, edad);
        this._github= "";
        this._lenguaje= "";
        this._version= "";
    }
    get github() {
        return this._github;
    }
    set github(github) {
        this._github = github;
    }
    get lenguaje() {
        return this._lenguaje;
    }
    set lenguaje(lenguaje) {
        this._lenguaje = lenguaje;
    }
    get version() {
        return this._version;
    }
    set version(version) {
        this._version = version;
    }
    toString(){
        let text = `\nCon la cuenta ${this.github} y trabajando con ${this.lenguaje} en su version ${this.version}`;
        return super.toString()+text;
    }
    static presentacion(){
        alert(`hola, soy el desarrollador y os aviso de que vais a sufrir`);
    }
}
//Informacion de barcos
let tiposBarcos = new Set(["lanchas", "fragatas", "portaAviones"]);

let tamanoBarcos = new Map([
    ["portaAviones", 4],
    ["fragatas", 3],
    ["lanchas", 2]
]);

let numeroBarcos = new Map([
    ["portaAviones", 2],
    ["fragatas", 3],
    ["lanchas", 4]
]);
let cantidadBarcos;
var flota = new Array();
//var flota2;
var tablero = new Array();

//Variables

let Fran;
let Jugador;
//de formulario
let form = document.forms["formulario"];
let submit = form.elements["idSubmit"];
let inputs = form.elements;

let nombreError = document.getElementById("idNombreError");
let apeError = document.getElementById("idApellidosError");
let edadError = document.getElementById("idEdadError");

submit.addEventListener("click",partidaNueva);
//Resetear errores de formulari9o
function limpiarError(){
    nombreError.innerHTML= "";
    apeError.innerHTML= "";
    edadError.innerHTML= "";
    inputs["nombre"].setCustomValidity("")
    inputs["apellidos"].setCustomValidity("")
    inputs["edad"].setCustomValidity("")
}
//Validacion
let validacion;
function validarForm(){
    limpiarError(); 
    validacion=true;

    if(inputs["nombre"].checkValidity() == false){ 
        validacion=false;
        if(inputs["nombre"].validity.valueMissing){
          inputs["nombre"].setCustomValidity("El nombre es obligatorio");
        }  
        nombreError.innerHTML = inputs["nombre"].validationMessage; 
    }
    if(inputs["apellidos"].checkValidity() == false){ 
        validacion=false;
        if(inputs["apellidos"].validity.valueMissing){
          inputs["apellidos"].setCustomValidity("Los apellidos son obligatorios");
        }  
        apeError.innerHTML = inputs["apellidos"].validationMessage; 
    }
    if(inputs["edad"].checkValidity() == false){ 
        validacion=false;
        if(inputs["edad"].validity.valueMissing){
          inputs["edad"].setCustomValidity("La edad es obligatoria");
        }  
        edadError.innerHTML = inputs["edad"].validationMessage; 
    }else if(inputs["edad"].value<18){
        validacion=false; 
        edadError.innerHTML = "Debe ser usted mayor de edad";
    }
  
   
    return validacion;
}
//Me genero
function generarAutor(){
    let Fran=new autor("Fran","del Cerro", 24);
    Fran.github="franciskis.github";
    Fran.lenguaje="JavaScript";
    Fran.version=6.01;
    return Fran;
}
//Generar jugador
function generarJugador(){

    let nombre = inputs["nombre"].value;
    let apellidos = inputs["apellidos"].value;
    let edad = inputs["edad"].value;  

    let Jugador = new jugador(nombre,apellidos, edad, 0);
    Jugador.nuevoId();
    Jugador.aciertos= 0;
    Jugador.fallos=0;
    return Jugador;
}
//Generar partida nueva
function partidaNueva(evt) {
    if(validarForm()==true){
        nuevoTablero(); 
    
        Fran=generarAutor();     
        Jugador=generarJugador();
        Jugador.nuevoId();  

        flota = null;
        flota2=null;
        flota = new Array();
        flota2 = new Array();

        ubicaBarcos(numeroBarcos, tamanoBarcos);
        pintaTablero();

        ajustarMira();

        document.getElementById("registro").style.display = "none";
        document.getElementById("juego").style.display = "block";
    
    }else{
        
    }

    
    evt.preventDefault();  
}
//Boton de reiniciar partida
document.getElementById("nueva").addEventListener("click",reiniciarPartida);

function reiniciarPartida(evt){
    nuevoTablero(); 
    //Crear nuevo array de flota
    flota = null;
    flota2=null;
    flota = new Array();
    flota2 = new Array();

    Jugador.aciertos=0;
    Jugador.fallos=0; 

    ubicaBarcos(numeroBarcos, tamanoBarcos);
    pintaTablero();
    evt.preventDefault();
}


//Añadir add events listener
function ajustarMira(){
    let casillas = document.getElementsByTagName("td");
    for(let i=0; i<casillas.length;i++){
        casillas[i].addEventListener("click",abrirFuego)
    }
}

//Cambiar los valores de array del mapa
function abrirFuego(){
    let x=parseInt(this.id.charAt(3));
    let y= parseInt(this.id.charAt(5));
    
    
    switch (tablero[`id_${x}_${y}`]) {
        case 0:
            tablero[`id_${x}_${y}`] = 3;
            Jugador.fallar();
            break;
        case 1:
            tablero[`id_${x}_${y}`] = 2;
            Jugador.acertar();
            comprobarHundido(`id_${x}_${y}`);
            break;
        case 2:
            Jugador.fallar();
            break;
        case 3:
            Jugador.fallar();
            break;
    }
    pintaTablero();
    if(heGanado()){
        jugador.actualizarPuntuacion(Jugador.aciertos-Jugador.fallos);
        alert(`Has hundido la flota enemiga`);
    }
    
}
//Comprobar si el estado de todas las partes de un barco están hundidas
/*function comprobarHundido(){
    let estado
    for(let i=0; i<cantidadBarcos;i++){
        estado=true;
        for(let j=0; j<flota2[i].length;j++){
            if(flota2[i][j]!=2){
                estado=false;
            }
        }
        if(estado==true){
            for(let j=0; j<flota2[i].length;j++){         
                tablero[flota2[i][j]]=4;        
            }
        }
    }
}*/

//Comprobar si queda barco vivo
function heGanado(){
    let victoria = true;
    for (let i = 0; i < 10; i++) {
        let x = i
        for (let j = 0; j < 10; j++) {
            let y = j;
            if(tablero[`id_${x}_${y}`] == 1){
                victoria = false;
            }
        }
    }
    return victoria;
}
//Botones de ver informacion 
function verAutor(){
    alert(Fran.toString());
}
function verJugador(){
    alert(Jugador.toString());
}

function dVisual() {

    var mapa = window.open("mapa.html", "chuleta", "width=800,height=500");
    mapa.tablero = tablero;


    mapa.onload = function() {
        mapa.tablero = tablero;
        mapa.pintaMapa();
    }

}

function infoBarcos() {

    info = window.open("informa.html", "chuleta2", "width=1000,height=500");
    info.flota = flota;
    let lineas = flota.length;
    let columnas = 4;
    let titulo = false;
    console.table(flota);
    info.onload = async function() {
            let table = info.document.createElement("table");
            table.setAttribute("border", "5");
            table.setAttribute("width", "100%");
            table.setAttribute("margin", "auto");
            for (let i = 0; i < lineas; i++) {
                let tr = info.document.createElement("tr");
                if (!titulo) {
                    let th = info.document.createElement("th");
                    let texto = info.document.createTextNode("TIPO DE BARCO");
                    th.appendChild(texto);
                    tr.appendChild(th);
                    th = info.document.createElement("th");
                    texto = info.document.createTextNode("TAMAÑO");
                    th.appendChild(texto);
                    tr.appendChild(th);
                    th = info.document.createElement("th");
                    texto = info.document.createTextNode("UBICACION INICIAL");
                    th.appendChild(texto);
                    tr.appendChild(th);
                    th = info.document.createElement("th");
                    texto = info.document.createTextNode("POSICION");
                    th.appendChild(texto);
                    tr.appendChild(th);

                    table.appendChild(tr);
                    tr = info.document.createElement("tr");
                    titulo = true;
                }
                for (let j = 0; j < columnas; j++) {
                    let td = info.document.createElement("td");
                    texto = info.document.createTextNode(flota[i][j]);
                    td.appendChild(texto);
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            info.document.getElementById("informe").appendChild(table);
        }
}

//Generar un tablero vacío
function nuevoTablero() {

    for (let i = 0; i < 10; i++) {
        let x = i
        for (let j = 0; j < 10; j++) {
            let y = j;
            tablero[`id_${x}_${y}`] = 0;
        }
    }
}
//Dibuja mapa en ventana
function pintaMapa() {
    for (let i = 0; i < 10; i++) {
        let y = i
        setTimeout(function timer() {
            for (let j = 0; j < 10; j++) {
                let x = j;
                switch (tablero[`id_${x}_${y}`]) {
                    case 0:
                        document.getElementById(`id_${x}_${y}`).style.backgroundColor = "aqua";
                        break;
                    case 1:
                        document.getElementById(`id_${x}_${y}`).style.backgroundColor = "black";
                        break;
                    case 2:
                        document.getElementById(`id_${x}_${y}`).style.backgroundColor = "red";
                        break;
                    case 3:
                        document.getElementById(`id_${x}_${y}`).style.backgroundColor = "darkblue";
                        break;
                    case 4:
                        document.getElementById(`id_${x}_${y}`).style.backgroundColor = "darkgreen";
                        break;
                }
            }
        }, (y + 1) * 1000);
    }
}
//Dibuja el tablero normal
function pintaTablero() {
    for (let i = 0; i < 10; i++) {
        let x = i
        for (let j = 0; j < 10; j++) {
            let y = j;
            switch (tablero[`id_${x}_${y}`]) {
                case 0:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "aqua";
                    break;
                case 1:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "aqua";
                    break;
                case 2:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "red";
                    break;
                case 3:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "darkblue";
                    break;
                case 4:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "darkgreen";
                    break;
            }
        }
    }
}
//De aquí al final colocar los barcos
//Lanza cada brco uno a uno
function ubicaBarcos(numeroBarcos, tamanoBarcos) {
    //cantidadBarcos=0;
    numeroBarcos.forEach(function(cantidad, tipo) {
        //cantidadBarcos += cantidad;
        let size = tamanoBarcos.get(tipo);
        amenizaje(cantidad, size, tipo);
    });
}
//Elige si es vertical o no y su posicion inicial
function amenizaje(cantidad, size, tipo) {
    let vertical, x, y;
    for (let i = 0; i < cantidad; i++) {
        do {
            vertical = esVertical();
            x = posX(vertical, size);
            y = posY(vertical, size);
        }
        while (!chocar(x, y, vertical, size));
        lanzar(x, y, vertical, size, tipo);
    }
}
//Devuelve de manera aleatoria si es vertical u horizontal
function esVertical() {
    let r = parseInt(Math.random() * 2);
    if (r == 0) {
        return false;
    } else if (r == 1) {
        return true;
    }
}
//Elige la casilla x, y si es gorizontal se asegura de que tenga suficente espacio
function posX(vertical, size) {
    if (vertical) {
        return parseInt(Math.random() * 10);
    } else {
        return parseInt(Math.random() * (10 - (size - 1)));
    }
}
//Elige la casilla y, y si es vertical se asegura de que haya espacio 
function posY(vertical, size) {
    if (vertical) {
        return parseInt(Math.random() * (10 - (size - 1)));
    } else {
        return parseInt(Math.random() * 10);
    }
}
//Se comprueba si se estan usando algunas de las casillas necesrias o si chocan los barcos
function chocar(x, y, vertical, size) {
    if (vertical) {
        for (let i = 0, a = y - 1; i < size + 2; i++, a++) {
            if (a == -1 || a == 10) {

            } else if (tablero[`id_${x}_${a}`] == 1) {
                return false;
            } else {
                if (x == 9) {

                } else {
                    if (tablero[`id_${x+1}_${a}`] == 1) {
                        return false;
                    }
                }
                if (x == 0) {

                } else {
                    if (tablero[`id_${x-1}_${a}`] == 1) {
                        return false;
                    }
                }
            }
        }
    } else {
        for (let i = 0, a = x - 1; i < size + 2; i++, a++) {
            if (a == -1 || a == 10) {

            } else if (tablero[`id_${a}_${y}`] == 1) {
                return false;

            } else {
                if (y == 9) {

                } else {
                    if (tablero[`id_${a}_${y+1}`] == 1) {
                        return false;
                    }
                }
                if (y == 0) {

                } else {
                    if (tablero[`id_${a}_${y-1}`] == 1) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

function lanzar(x, y, vertical, size, tipo) {
    //Se usa el array de flota
    barco = null;
    //barco2=null
    barco = []; 
    //barco2=[];
    barco.push(tipo);
    barco.push(size);
    barco.push(`${y}${x}`);
    if (vertical) {
        barco.push("Vertical");
    } else {
        barco.push("Horizontal");
    }
    //Se rellenan el resto de casilla del barco
    if (!vertical) {
        for (let i = 0; i < size; i++, x++) {
            tablero[`id_${x}_${y}`] = 1;
            //barco2.push(`id_${x}_${y}`)
        }
    } else if (vertical) {
        for (let i = 0; i < size; i++, y++) {
            tablero[`id_${x}_${y}`] = 1;
            //barco2.push(`id_${x}_${y}`)
        }
    }
    flota.push(barco);
    //flota2.push(barco2);
}

