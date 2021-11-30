// Código js
let autor = {

    nombre: "",
    apellidos: "",
    edad: "",

    informacionAutor: function() {

        let info = `El autor es ${this.nombre} ${this.apellidos} de ${this.edad} años`
    },

    github: "",
    lenguaje: "",
    version: ""
};

let jugador = {

    nombre: "jugador 1",
    apellidos: "apellido1",
    edad: "18",
    id: 12345,

    aciertos: 0,
    fallos: 0,
    puntuacion: 0,

}

document.getElementsByTagName("body");

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
    ubicaBarcos(numeroBarcos, tamanoBarcos);
    pintaTablero();
}

function dVisual() {

    mapa = window.open("mapa.html", "chuleta", "width=800,height=500");

    mapa.onload = function() {
        mapa.tablero = tablero;
        mapa.pintaMapa();
    }

}

function infoBarcos() {

    info = window.open("informa.html", "chuleta2", "width=800,height=500");
    info.flota = flota;
    console.table(flota);
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
        let x = i
        for (let j = 0; j < 10; j++) {
            let y = j;
            switch (tablero[`id_${x}_${y}`]) {
                case 0:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "aqua";
                    break;
                case 1:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "black";
                    break;
            }
        }
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
    barco.push(x);
    barco.push(y);
    barco.push(vertical);
    barco.push(size);
    barco.push(tipo);
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