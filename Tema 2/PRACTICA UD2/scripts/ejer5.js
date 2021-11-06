/*
Crear una aplicación web que muestre 
2000 cuadrados de color aleatorio de 50x50 píxeles.
 La posición de cada cuadrado en la página también será aleatoria.



*/

function ejercicio5(){



    for (let i = 0; i < 2000; i++) {
        document.write(`<div style = 'position:fixed;
                                background-color:rgb(${colorRGB()});
                                width: 50px;
                                height: 50px;
                                ${posicionAleatoria()}
                                '>
                        </div>
        `);    
    }


    function colorRGB(){
    //saca un codigo rgbpara el color
        let rojo,verde,azul;
        rojo = parseInt((Math.random())*255);
        verde = parseInt((Math.random())*255);
        azul = parseInt((Math.random())*255);
        return rojo+","+verde+","+azul

    }

    function posicionAleatoria(){
    //añade lineas de css top y left para posicionar
        let coordenadaX,coordenadaY;

        coordenadaX = parseInt((Math.random())*100);
        coordenadaY = parseInt((Math.random())*100);
        return `top: ${coordenadaY}%;
                left: ${coordenadaX}%;`;


    }
}