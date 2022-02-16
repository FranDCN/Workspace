

  let http = new XMLHttpRequest();
  let boton = document.getElementById("idBoton");
  boton.addEventListener("click",cargarAJAX)  
  let votos = document.getElementById("Votos");
  let primero=false;

 function cargarAJAX() {  
    console.log("entra Ev Ajax");
    http.addEventListener("load",aumentarVotos)
     
    http.open("GET", "http://localhost:3000/votos", true);
    http.send(null);


  }

function aumentarVotos() {
    console.log("entra Ev aumento");

   if(!primero){
      numero = http.responseText;
      let numerojason = JSON.parse(numero);
      numerofinal = numerojason[0].numero;
      primero=true;
   }
  votos.innerHTML=numerofinal;
  numerofinal++;
}

/*

let peticionhttp=new XMLHttpRequest();

let boton = document.getElementById("idBoton");

boton.addEventListener('click',cargarAJAX,false);



function cargarAJAX() {  

  peticionhttp.addEventListener('load',cargar,false);
  
  //peticionhttp.open("GET", "http://localhost:3000/users", true);
  //peticionhttp.send(null);

  peticionhttp.open('POST', 'http://localhost:3000/users');
  peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  peticionhttp.send(JSON.stringify({ id:8, name:'Pablo', location:'Madrid'}));




};

function cargar() {
     
    var r = document.getElementById("idResultado");
    if (peticionhttp.readyState == 4 && ((peticionhttp.status == 201) || (peticionhttp.status == 304))) {      
      
      r.innerHTML = peticionhttp.responseText
      
    } else {
      r.innerHTML = "En proceso";
    }
  }



*/