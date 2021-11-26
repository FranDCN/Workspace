///ejer4.1


function ejer41(){

    let nuevoLi = document.createElement('li');//creo nodo

    numero = Math.random();
    let textoLi = document.createTextNode(`Nuevo elemento:${numero}`);//creo texto

    nuevoLi.appendChild(textoLi);//añado texto a noodo

    let miPrimeraLista = document.getElementById("41");//selecciono la lista en una variable

    miPrimeraLista.appendChild(nuevoLi); //añado el nodo a la lista




}

function ejer42(){
    let num = document.getElementById("cantidad").value;
    console.log(num);

    for(let i=0;i<num;i++){
        let nuevoInput = document.createElement('input');
        let nuevoLabel = document.createElement('label');

        numero = Math.random();
        let textoLabel = document.createTextNode(numero);

        nuevoLabel.appendChild(textoLabel);


        let formulario = document.getElementById("42")

        formulario.appendChild(nuevoInput);
        formulario.appendChild(nuevoLabel);

//        e.preventdefaultfalse()

    }



}





















///ejer4.2