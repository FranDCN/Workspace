/*2.1
Crea un buscador para que tus visitantes puedan encontrar un texto cualquiera en tus páginas.
 Pide al usuario que introduzca la cadena a buscar.
 Permitir las opciones de:
    • Búsqueda de palabras completas.
    • Distinguir entre mayúsculas y minúsculas
*/


function ejercicio2_1(){

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