function hijosMalvados(){
    console.log(document.body.firstElementChild.nextElementSibling.children);
}

let pes
function puntosMortales(){

    console.log(document.getElementById("div2"));
    pes = document.getElementById("div2").children;
    
    for (let i of pes) {
        i.innerHTML += ".";
     
 }

}

function ejer2_3_color(){

    document.getElementById("ej3").style.color=`rgb(${colorRGB()}`;

}
function colorRGB(){
    //saca un codigo rgbpara el color
        let rojo,verde,azul;
        rojo = parseInt((Math.random())*255);
        verde = parseInt((Math.random())*255);
        azul = parseInt((Math.random())*255);
        return rojo+","+verde+","+azul

}

let cambia=true;
function ejer2_3_tamaño(){

    if (cambia){

        tamaño=30;
    }else{
        tamaño=20
    } 

    document.getElementById("ej3").style.fontSize=`${tamaño}px`;
    
    cambia=!cambia;
}

