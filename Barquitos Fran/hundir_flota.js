// Código js
class persona {

    static _nUsuarios = 0;
    static _pMasAlta = 0;
    #_datos = "datos super delicados"

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
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
        let text = `${this._nombre} ${this._apellido} tiene ${this._edad} años `;
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

    constructor(nombre, apellido, edad, id) {
        super(nombre, apellido, edad);
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
    static actualizarPuntuacion(puntuacion){
        if(persona._pMasAlta<puntuacion){
            persona._pMasAlta= puntuacion;
        }
    }
    toString(){
        let text = `tiene el id ${this.id} y ${this.aciertos} aciertos y ${this.fallos} fallos`;
        return super.toString()+text;
    }
    nuevoId(){
        this._id = Math.random() *10000;
    }
    valueOf() {
        return this.aciertos-this.fallos;
    }
}
class autor extends persona{
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
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
        let text = `con la cuenta ${this.github} y trabajando con ${this.lenguaje} en su version ${this.version}`;
        return super.toString()+text;
    }
    static presentacion(){
        alert(`hola, soy el desarrollador y os aviso de que vais a sufrir`);
    }
}
document.getElementsByTagName("body");
 
let Fran=generarAutor();
let Pablo=generarJugador();

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
var flota = new Array();

var tablero = new Array();

function partidaNueva() {
    nuevoTablero(); //pone a cero
    //console.log(tablero);
 
    completarInfoJugador();

    flota = null;
    flota = new Array();

    ubicaBarcos(numeroBarcos, tamanoBarcos);
    pintaTablero();
}
function generarAutor(){
    let Fran=new autor("Fran","del Cerro", 24);
    Fran.github="franciskis.github";
    Fran.lenguaje="JavaScript";
    Fran.version=6.01;
    return Fran;
}

function generarJugador(){
    let Pablo=new jugador("Pablo","Sierra", 27, 0);
    Pablo.aciertos= 10;
    Pablo.fallos=7;
    return Pablo;
}

function completarInfoJugador(){
    let nombre = prompt("Introduce tu nombre");
    let apellido = prompt("Introduce tu apellido");
    let edad = prompt("Introduce tu edad");
    let aciertos = prompt("¿Cuántos aciertos quieres?");
    let fallos = prompt("¿Y Cuántos fallos?");
    Pablo.nombre=nombre;
    Pablo.apellido=apellido;
    Pablo.edad=edad;
    Pablo.aciertos=aciertos;
    Pablo.fallos=fallos;
    Pablo.nuevoId();
}

function verAutor(){
    alert(Fran.toString());
}
function verJugador(){
    alert(Pablo.toString());
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
        //flota!!!

}

function nuevoTablero() {

    for (let i = 0; i < 10; i++) {
        let x = i
        for (let j = 0; j < 10; j++) {
            let y = j;
            tablero[`id_${x}_${y}`] = 0;
        }
    }
}

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

                }
            }
        }, (y + 1) * 1000);
    }
}

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
            }
        }
    }
}

function ubicaBarcos(numeroBarcos, tamanoBarcos) {
    numeroBarcos.forEach(function(cantidad, tipo) {
        let size = tamanoBarcos.get(tipo);
        amenizaje(cantidad, size, tipo);
    });
}

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

function esVertical() {
    let r = parseInt(Math.random() * 2);
    if (r == 0) {
        return false;
    } else if (r == 1) {
        return true;
    }
}

function posX(vertical, size) {
    if (vertical) {
        return parseInt(Math.random() * 10);
    } else {
        return parseInt(Math.random() * (10 - (size - 1)));
    }
}

function posY(vertical, size) {
    if (vertical) {
        return parseInt(Math.random() * (10 - (size - 1)));
    } else {
        return parseInt(Math.random() * 10);
    }
}

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
    barco = null;
    barco = [];
    barco.push(tipo);
    barco.push(size);
    barco.push(`${y}${x}`);
    if (vertical) {
        barco.push("Vertical");
    } else {
        barco.push("Horizontal");
    }
    if (!vertical) {
        for (let i = 0; i < size; i++, x++) {
            tablero[`id_${x}_${y}`] = 1;
        }
    } else if (vertical) {
        for (let i = 0; i < size; i++, y++) {
            tablero[`id_${x}_${y}`] = 1;
        }
    }
    flota.push(barco);
}

