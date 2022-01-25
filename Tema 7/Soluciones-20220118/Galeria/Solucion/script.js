var zFondos150 = ['./img/150x150/coche-1.jpg','./img/150x150/coche-2.jpg','./img/150x150/coche-3.jpg','./img/150x150/coche-4.jpg'];
var zFondos600 = ['./img/600x400/coche-1.jpg','./img/600x400/coche-2.jpg','./img/600x400/coche-3.jpg','./img/600x400/coche-4.jpg'];

var imagenPrincipal = document.getElementById("imagen-principal");
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage=`url('${zFondos600[0]}')`;
/*subImagenes[0].style.backgroundImage=`url('${zFondos150[0]}')`;
subImagenes[1].style.backgroundImage=`url('${zFondos150[1]}')`;
subImagenes[2].style.backgroundImage=`url('${zFondos150[2]}')`;
subImagenes[3].style.backgroundImage=`url('${zFondos150[3]}')`;
*/
subImagenes.forEach(elemento => {
  let id = elemento.id[elemento.id.length -1]
  elemento.style.backgroundImage=`url(${zFondos150[id]})`
});

/*subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);
subImagenes[3].addEventListener("mouseover",accion3);*/

subImagenes.forEach(elemento => elemento.addEventListener("mouseover",accion));
/*function accion0(){imagenPrincipal.style.backgroundImage =`url('${zFondos600[0]}')`;}
function accion1(){imagenPrincipal.style.backgroundImage =`url('${zFondos600[1]}')`;}
function accion2(){imagenPrincipal.style.backgroundImage =`url('${zFondos600[2]}')`;}
function accion3(){imagenPrincipal.style.backgroundImage =`url('${zFondos600[3]}')`;}*/

function accion(event){
  let id = this.id[this.id.length -1]  
  imagenPrincipal.style.backgroundImage =`url(${zFondos600[id]})`;
}

/**
  URL CÓDIGO FUENTE: https://francescricart.com/como-generar-una-galeria-de-imagenes-de-producto-con-javascript/
*/