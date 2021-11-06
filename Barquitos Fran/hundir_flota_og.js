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


    //ubicaBarcos(numeroBarcos, tamanoBarcos);



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


        //posXini = (parseInt(Math.random() * (10 - tamaño)));










    });

    //para añadir css directamente    document.getElementById(`id_${x}_${y}`).style.backgroundColor="grey";




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
            }

        }
    }
}