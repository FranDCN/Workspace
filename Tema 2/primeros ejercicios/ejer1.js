alert("EJERCICIO 2");


/*  Crear un programa en javascript 
    que realice la lectura de 3 valores numéricos enteros.
    Además del nombre y apellido del usuario.
    Debes utilizar 5 variables,
    cada una con su tipología correspondiente.
*/ 


var n1,n2,n3,nombre,apellido;

nombre = prompt("Cual es tu nombre");
apellido = prompt("Cual es tu apellido");
n1 = prompt("Dime un numero");
n2 = prompt("dime otro numero");
n3 = prompt("venga va el ultimo numero");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);


alert(`${nombre} ${apellido} ha elegido los numeros ${n1}, ${n2} y ${n3}` );