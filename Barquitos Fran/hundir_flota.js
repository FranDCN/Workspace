// Código js
document.getElementsByTagName("body");

let tiposBarcos = new Set(["lanchas", "fragatas", "portaAviones"]);

let tamanoBarcos = new Map([
    ["lanchas", 2],
    ["fragatas", 3],
    ["portaAviones", 4]
]);

let numeroBarcos = new Map([
    ["lanchas", 4],
    ["fragatas", 3],
    ["portaAviones", 2]
]);
var tablero = new Array();

window.onload = function() {

    nuevoTablero(); //pone a cero
    //console.log(tablero);
    ubicaBarcos(numeroBarcos, tamanoBarcos);
    pintaTablero();


}
function chuletario(){

    nuevaVentana=window.open("chuleta.html","chuleta","width=800,height=500");
       
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

function ubicaBarcos(numeroBarcos, tamanoBarcos) {
    numeroBarcos.forEach(function(cantidad, tipo) {
        let size = tamanoBarcos.get(tipo);
        amenizaje(cantidad, size);
    });
}

function amenizaje(cantidad, size) {
    let vertical, x, y;
    for (let i = 0; i < cantidad; i++) {
        do {
            vertical = esVertical();
            x = posX(vertical, size);
            y = posY(vertical, size);
        }
        while (!chocar(x, y, vertical, size));
        lanzar(x, y, vertical, size);
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

function lanzar(x, y, vertical, size) {
    if (!vertical) {
        for (let i = 0; i < size; i++, x++) {
            tablero[`id_${x}_${y}`] = 1;
        }
    } else if (vertical) {
        for (let i = 0; i < size; i++, y++) {
            tablero[`id_${x}_${y}`] = 1;
        }
    }
}