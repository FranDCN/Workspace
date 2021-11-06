/*1 .- Lectura de números
        <br>Crea una página web que pida al usuario un número a través de un cuadro de lectura(prompt).
        <br>Un cuadro de mensaje indica si realmente era un número o no lo que escribió el usuario..
 */


function ejercicio1(){

    num = prompt("Dime un numero");

    if(isNaN(num)){
        alert(`${num} no es un numero`)
    }else{
        alert(`${num} es un numero`)
    }



}







/*
Intente meter el enunciado  con getElementById y innerHTML, trastee con problemas pero en otro ejercicio salio bien

problemas al ejecutarlo el getElementById, el navegador primero ejecuta todo el script que se ejecuta en <head>
despues el <body> asi que al buscar id de cosas que aun no conoce da error

al final meto los enunciados en el html por no perder tiempo cambiandolo todo.
buen ejemplo en ejercicio 3 funcion pinta tabla
*/