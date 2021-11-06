window.onload = function(){
var notas =new Array();


nota = prompt("Introduzca una nota");
if(nota<3){cal="Muy deficiente"}
else if(nota<5){cal="insuficiente"}
else if(nota<6){cal="bien"}
else if(nota<9){cal="notable"}
else if(nota<=10){cal="sobresaliente"}
notas[nota]=cal;

nota = prompt("Introduzca otra nota");
if(nota<3){cal="Muy deficiente"}
else if(nota<5){cal="insuficiente"}
else if(nota<6){cal="bien"}
else if(nota<9){cal="notable"}
else if(nota<=10){cal="sobresaliente"}
notas[nota]=cal;

nota = prompt("Introduzca la última nota");
if(nota<3){cal="Muy deficiente"}
else if(nota<5){cal="insuficiente"}
else if(nota<6){cal="bien"}
else if(nota<9){cal="notable"}
else if(nota<=10){cal="sobresaliente"}
notas[nota]=cal;

console.table(notas);
document.write("Abre la consolo")
}