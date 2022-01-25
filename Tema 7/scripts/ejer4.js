let papelera = document.getElementById("img1");

var encimaPapelera = false;

papelera.addEventListener("mouseover",enPapelera);

function enPapelera(evt){
    console.log("encima")

	encimaPapelera = true;
}

papelera.addEventListener("mouseout",noPapelera);

function noPapelera(evt){
    console.log("no encima")

	encimaPapelera = false;
}





let bola = document.getElementById("img2");

var atrapado= false;

bola.addEventListener("click",atrapaBola);

function atrapaBola(evt){
   
	console.log("tengo bola")
	atrapado = true;
    evt.preventDefault();
}

document.addEventListener("mouseup",sueltaBola);

function sueltaBola(evt){


    if(atrapado){

        console.log("suelto bola")
        bola.style.left = evt.clientX-100 +"px";
        bola.style.top = evt.clientY-100 + "px";

    }

    if(encimaPapelera && atrapado){

        papelera.setAttribute('src', '../Imagenes/papeleraLLena.jpg');
        bola.remove();

    }

	atrapado = false;
    evt.preventDefault();
}