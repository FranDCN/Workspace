// Código js
document.getElementsByTagName("body");

let tiposBarcos = new Set(["lanchas", "fragatas", "portaAviones"]);

let tamanoBarcos = new Map([
    ["lanchas", 2],
    ["fragatas", 3],
    ["portaAviones", 4]
]);

let numeroBarcos = new Map([
    ["lanchas", 2],
    ["fragatas", 4],
    ["portaAviones", 3]
]);
var tablero = new Array();

window.onload = function() {

    nuevoTablero(); //pone a cero
    //console.log(tablero);
    pintaTablero();
    ubicaBarcos(numeroBarcos, tamanoBarcos);
    pintaTablero();


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

function ubicaBarcos(numeroBarcos, tamanoBarcos) {
    numeroBarcos.forEach(function(cantidad, tipo) {
        let size = tamanoBarcos.get(tipo);
        amenizaje(cantidad, size);
    });
}

function esVertical() {
    let r = parseInt(Math.random() * 2);
    if (r == 0) {
        return false;
    } else if (r == 1) {
        return true;
    }
}

function posX(sentido, size) {
    if (sentido) {
        return parseInt(Math.random() * 10);
    } else {
        return parseInt(Math.random() * (10 - size));
    }
}

function posY(sentido, size) {
    if (sentido) {
        return parseInt(Math.random() * (10 - size));
    } else {
        return parseInt(Math.random() * 10);
    }
}

function comprobar(x, y, sentido, size) {
    //Hacer luego
    return true;
}

function lanzar(x, y, sentido, size) {
    if (!sentido) {
        for (let i = 0; i < size; i++, x++) {
            tablero[`id_${x}_${y}`] = 1;
        }
    } else if (sentido) {
        for (let i = 0; i < size; i++, y++) {
            tablero[`id_${x}_${y}`] = 1;
        }
    }
}

function amenizaje(cantidad, size) {
    let sentido, x, y;
    for (let i = 0; i < cantidad; i++) {
        do {
            sentido = esVertical();
            x = posX(sentido, size);
            y = posY(sentido, size);
        }
        while (!comprobar(x, y, sentido, size));
        lanzar(x, y, sentido, size);
    }
}

function pintaTablero() {
    for (let i = 0; i < 10; i++) {
        let x = i
        for (let j = 0; j < 10; j++) {
            let y = j;
            switch (tablero[`id_${x}_${y}`]) {
                case 0:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "lightblue";
                    break;
                case 1:
                    document.getElementById(`id_${x}_${y}`).style.backgroundColor = "grey";
                    break;
            }

        }
    }
}