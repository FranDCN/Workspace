/*
Haz una página web que implemente un juego de encontrar un número aleatorio bajo las premisas que se explican a continuación:

La página calculará un número del 1 al 100.

Luego preguntará al usuario por el número.

Si el usuario escribe algo que no es un número, se indica el error de número inválido y solicita un número valor.

Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.

Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.

Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.

Al final, si ha finalizado correctamente el juego se indica el número de intentos.

Se permite volver a jugar al usuario mediante un cuadro de confirmación

----> Ampliación sobre ejercicio 3

--------------------------------------------------------------------------

 a) Almacenar en un array los diferentes valores introducidos (almacenar en otro array los números repetidos).

 c) Comprobar si el número introducido es repetido

 d) Mostrar en una tabla, las diferentes partidas.....

 	- Número Final :    xxx

 	- Valores insertados:   x , y , z , .....*/

function ejercicio3(){


    do {
        var nJuego, nJugador, cnt = 0;

        var arrayNumeros = new Array();

        var fin = false;

        nJuego = parseInt((Math.random() * 100) + 1);

        alert("para no perder el tiempo, el número es "+nJuego);
        
        do {
            nJugador = pideNumero(cnt,arrayNumeros);

            arrayNumeros[cnt] = nJugador;
            cnt++;

            if (!fin) { compruebaNumero(nJuego, nJugador, cnt) };

        } while (!fin);


        pintaTabla(nJuego,arrayNumeros);

        fin = confirm("¿Quieres jugar otra ronda?");

    } while (fin);



    function pideNumero(cnt,arrayNumeros) {
        let nJugador,repetido;

        do {
            repetido = false;
            nJugador = prompt("Dime un numero del 1 al 100");

            if (nJugador == null) {
                alert("Has huido");
                fin = true;
            } else if (isNaN(nJugador) || nJugador < 1 || nJugador > 100) {
                alert("Entrada incorreta");
            }

            for (let i = 0; i < arrayNumeros.length; i++) {
                if(nJugador == arrayNumeros[i]){
                    repetido=true;
                    alert(`ya has introducido ${nJugador} anteriormente`);
                }           
            }



        } while ( repetido || !fin && (isNaN(nJugador) || nJugador < 1 || nJugador > 100));

        return parseInt(nJugador);
    }


    function compruebaNumero(nJuego, nJugador, cnt) {
        

        if (nJugador == nJuego) {
            alert(`Has ganado en ${cnt} intentos. Estos han sido tus números: ${muestraNumeros(arrayNumeros)}`);

            fin = true;
        } else if (nJugador > nJuego) {
            alert("El numero es más pequeño");
        } else if (nJugador < nJuego) {
            alert("El numero es más grande");
        }

    }

    function muestraNumeros(arrayNumeros) {
        let listaIntentos = "";
        for (let i = 0; i < arrayNumeros.length; i++) {
            listaIntentos += arrayNumeros[i] + " ";
        }
        return listaIntentos;
    }

    
    

    function pintaTabla(nJuego,arrayNumeros){

        tabla = document.getElementById('tabla').innerHTML +`<tr>
                                                                <td>${nJuego}</td>
                                                                <td>${muestraNumeros(arrayNumeros)}</td>
                                                            </tr>`;
        document.getElementById('tabla').innerHTML = tabla;  

    }

}