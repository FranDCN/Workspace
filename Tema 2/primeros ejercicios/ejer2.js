alert("EJERCICIO 2");
var n1,n2,n3,nombre,apellido;

nombre = prompt("Cual es tu nombre");
apellido = prompt("Cual es tu apellido");
n1 = prompt("Dime un numero");
n2 = prompt("dime otro numero");
n3 = prompt("venga va el ultimo numero");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

nombrecompleto = nombre +" "+apellido;
suma = n1+n2+n3;
multi = n1*n2*n3;
divi = n1/n3;


alert(`${nombrecompleto} ha elegido los numeros ${n1}, ${n2} y ${n3}.
        su suma es ${suma} su producto ${multi} y la division ${divi}` );