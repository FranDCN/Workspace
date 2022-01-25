let posY=0;
let posX=0;

function moverBloque(evt){   
    if(evt.key == "ArrowUp" || evt.key == "w"|| evt.key == "W"){
        
        posY = posY-5; //buscar posiciones limite para que no salga de la pagina

        document.getElementById("block").style.top=`${posY}px`

    }

    if(evt.key == "ArrowLeft" || evt.key == "a"|| evt.key == "A"){
       
        posX = posX-5; //buscar posiciones limite para que no salga de la pagina

        document.getElementById("block").style.left=`${posX}px`

    }

    if(evt.key == "ArrowDown" || evt.key == "s"|| evt.key == "S"){
       
        posY = posY+5; //buscar posiciones limite para que no salga de la pagina

        document.getElementById("block").style.top=`${posY}px`

    }

    if(evt.key == "ArrowRight" || evt.key == "d"|| evt.key == "D"){
        posX = posX+5; //buscar posiciones limite para que no salga de la pagina

        document.getElementById("block").style.left=`${posX}px`

    }
}



document.addEventListener("keydown",moverBloque);