  let http = new XMLHttpRequest();

  let boton1 = document.getElementById("idHora");
  let boton2 = document.getElementById("idRand");

  boton1.addEventListener("click",cargarAJAX1);
  boton2.addEventListener("click",cargarAJAX2);

  let result = document.getElementById("resultado");
  let ruta=0;
  let gancho;
  let resultado;
  let numerojason;

 function cargarAJAX1() {  
    console.log("entra En Ajax1");

    ruta = 1;

    http.open("GET", "http://localhost:3000/fecha", true);

    http.addEventListener("load",mostrarResultado);
     
    
    http.send(null);

  }

function cargarAJAX2() {  
    console.log("entra En Ajax2");

    ruta = 2;

    http.open("GET", "http://localhost:3000/votos", true);

    http.addEventListener("load",mostrarResultado);
     
    http.send(null);
  }

function mostrarResultado() {
    console.log("entra En resultado");
    
    if(http.status == 404){

      console.log("entro en peti mala");
      result.innerHTML="Peticion imposible en estos momentos, pruebe otra";

    }else{

      console.log("entro en peti buena");
      gancho = http.responseText;
      numerojason = JSON.parse(gancho);
      if(ruta==1){
        resultado = numerojason[0].fecha;
      }else if(ruta==2){
        resultado = numerojason[0].numero;
      }
      result.innerHTML=resultado;

   }
  
}