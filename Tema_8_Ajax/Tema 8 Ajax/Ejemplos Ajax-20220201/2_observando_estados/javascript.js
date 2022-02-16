

  let http = new XMLHttpRequest();
  let boton = document.getElementById("idBoton");
  boton.addEventListener("click",cargarAJAX)  

 function cargarAJAX() {  
    
    http.addEventListener("readystatechange",mostrar)
      
    http.open("GET", "http://www.dwec.agustin.com/UD_10/index_1.html",true);
    http.send(null);
};

function mostrar() {
  var r = document.getElementById("idResultado");
  var p = document.getElementById("idPasos");
  
  p.innerHTML += "<br>Cambio de estado";
  
  if (http.readyState == 4 && http.status == 200) {
    p.innerHTML += "<br>readyState: " + http.readyState;
    p.innerHTML += "<br>status: " + http.status;
    p.innerHTML += "<br>Datos transferidos";
    p.innerHTML += "<br> ------------------------>";
    r.innerHTML = http.responseText;
  } else {
    p.innerHTML += "<br>readyState: " + http.readyState;
    p.innerHTML += "<br>status: " + http.status;
    p.innerHTML += "<br>En espera...";
    p.innerHTML += "<br> ------------------------>";
    r.innerHTML = "En proceso";
  }
}

