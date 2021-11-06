/*Crear una página web que muestre 
un color de fondo aleatorio 
cada vez que entremos en ella */

function ejercicio2(){

    document.write(`<div 
                    style = 'position:fixed;
                            background-color:rgb(${colorRGB()});
                            width: 100%;
                            height: 100%;'>
                    </div>

                    
                    `);


    function colorRGB(){

        let rojo,verde,azul;
        rojo = parseInt((Math.random())*255);
        verde = parseInt((Math.random())*255);
        azul = parseInt((Math.random())*255);
        return rojo+","+verde+","+azul

    }
                    

    /*
    crear div y añadir el style

    */

}