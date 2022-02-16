
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
