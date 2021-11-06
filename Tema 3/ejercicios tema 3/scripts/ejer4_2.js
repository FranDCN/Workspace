

function enunciado4_2(){
    let enunciado =`Crear un script en el que se pregunte por el número de alumnos
    y en función de este dato pida el nombre de los alumnos y sus notas finales.
     Al final se debe mostrar, cada alumno con su nota y después
      la media de todos los alumnos<br>            <button align="center" onclick="ejercicio4_2()">Empieza el ejercicio</button>
      `;
document.getElementById('enunciado4.2').innerHTML = enunciado;
    

}

function ejercicio4_2(){

preguntaTotal();
creoAlumnos();
calculoMedia();
devuelvoDatos();

}





var cantidad;
var alumnos = [];

function abreVentana(){			
    
    vs = window.open("secundaria.html","","height=300,width=300");	
        

}

function preguntaTotal(){

    cantidad = prompt(`Cuantos alumnos hay en clase`);
}


function creoAlumnos(){
    
    let nombre,nota;
    
    for (let i = 0; i < cantidad; i++) {

        nombre = prompt(`Dime el nombre del alumno nº ${i+1}`);
        nota =parseFloat(prompt(`Dime la nota del alumno nº ${i+1}`));
        
    alumnos[i] = [nombre,nota];
    }

}

function calculoMedia(){
    let media=0;

    alumnos.forEach(a => {
        media +=a[1];
    })

    media=media/cantidad;
    return media;
}


function devuelvoDatos(){

    pTexto=``;

    for (let i = 0; i < alumnos.length; i++) {
        pTexto += `alumno nº ${i+1}. nombre: ${alumnos[i][0]}, nota media: ${alumnos[i][1]}.<br>`
    }    
    pTexto += `la nota media de la clase es ${calculoMedia()}.`;

    document.getElementById("respuesta4_2").innerHTML=pTexto;


}


