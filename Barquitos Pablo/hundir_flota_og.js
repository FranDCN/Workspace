// Código js
var tiposBarcos = new Set(["lanchas" , "fragatas" , "portaAviones"]);

var tamanoBarcos = new Map([["lanchas",2] , ["fragatas",3] , ["portaAviones",4]]);

var numeroBarcos = new Map([["lanchas",2] ,["fragatas",4] , ["portaAviones",3]]);




var cnt=0;// BORRAR LUEGO SI ESO

var casillasOcupadas =[];
var barco = [];


function partida(){
if(cnt>0){
    empieza(casillasOcupadas);//pone a cero
}
    ubicarBarcos();

}


function empieza(casillasOcupadas){//esto aun no funciona, no se borran los valores de casillasOcupadas

    cnt=0;

    casillasOcupadas.forEach(pos => {
        let x =pos%10;
        let y =parseInt(pos/10);
        console.log(pos+" "+x+" "+y)

        document.getElementById(`id_${x}_${y}`).style.backgroundColor="white";
        document.getElementById(`id_${x}_${y}`).innerHTML=``;
        pos=200;

    })
    
        barco = null;
        barco = [];



}



function ubicarBarcos(){
     cnt=0;
    
    numeroBarcos.forEach(function(cantidad,tipo){
        
        for (let i = 0; i < cantidad; i++) {
            do{
                barco=null;
                barco=[];
            
                let a = parseInt(Math.random()*2); //0 o 1

                if (a==0){//horizontal

                    tamaño = tamanoBarcos.get(tipo)    
                    posX  = (parseInt(Math.random()*(10-tamaño)));
                    posY  = (parseInt(Math.random()*10));

                    barco.push(valorCoordenadas(posX,posY));

                    for (let i = 0; i < tamaño-1; i++) {
                        posX  +=1;
                        barco.push(valorCoordenadas(posX,posY));
                    }

                    

                }else{//vertical

                    tamaño = tamanoBarcos.get(tipo)    
                    posX  = (parseInt(Math.random()*10));
                    posY = (parseInt(Math.random()*(10-tamaño))); 
                    
                    barco.push(valorCoordenadas(posX,posY));

                    for (let i = 0; i < tamaño-1; i++) {
                        posY  +=1;
                        barco.push(valorCoordenadas(posX,posY));
                    }
                }
            }while(!comprueba(barco));
            console.log("BARCO BUENO")///BORRA

            pintaBarco(barco);
            

        }
        
    });

console.log(cnt+" cuadros pintados");
}

function valorCoordenadas(x,y){//devuelve el valor de la posicion en un unico numero
    let posicion = x*10+y;
    return posicion;

}

function comprueba(barco){//si devuelve true es un buen barco, ninguna posicion de las q va a pintar esta pintada ya
    console.log("COMPRUEBA BARCO")//borraaaa
    let valido= true;
    barco.forEach(pos => {
        if (casillasOcupadas.includes(pos)){
            valido=false;
            console.log("ERROR ERROR")

        }
        console.log("¿esta "+pos+" en las casillas ocupadas : "+casillasOcupadas+"?")

    });

    return valido;
}


function pintaBarco(barco){//pinta el barco si quisiera a cada barca d un color crear mas metodos o meterle el parametro tipo de barco
    barco.forEach(pos => {
        let x = parseInt(pos/10);
        let y = pos%10;
        casillasOcupadas.push(pos)
        document.getElementById(`id_${x}_${y}`).style.backgroundColor="grey";
        document.getElementById(`id_${x}_${y}`).innerHTML=`<div>${pos}</div>`;

cnt++;

    });
}





/*

x =20%10->0
y =20/10->2
document.getElementById(`id_${x}_${y}`) = meteme un <div Style></div>
*/

/*
Crear una función llamada ubicarBarcos,  
que aleatoriamente ubique los barcos en el tablero.
 Completando una matriz con la siguiente estructura:

lancha_1        1,3     Horizontal         
lancha_2    	2,3     Horizontal*/