var n1,n2,n3;
n1 = prompt("Introduce tu número favorito");
n1 = parseInt(n1); 

n2 = prompt("Introduce tu segundo número favorito");
n2 = parseInt(n2); 

n3 = prompt("Introduce tu número menos favorito");
n3 = parseInt(n3);

if(n1>10 || n2>10 || n3>10){
    alert("Te has pasado con la nota");
}else{
    alert("Todo ok");
}