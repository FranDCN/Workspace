/*Crea un objeto llamado tvSamsung con las propiedades nombre (TV Samsung 42”), categoria
(Televisores), unidades (4), precio (345.95) y con un método llamado importe que devuelve 
el valor total de lasunidades (nº de unidades * precio)
*/
function ej_31(){
    function tvSamsung(nombre,categoria,unidades,precio){
        this.nombre=nombre;
        this.categoria=categoria;
        this.unidades=unidades;
        this.precio=precio;
    
        this.importe = function(){
            return this.unidades*this.precio;
        }
    }
    let tele = new tvSamsung(`TV Samsung 42"`,"Televisores",4,345.95);

    console.log("clase");
    console.log(tvSamsung);
    console.log("objeto");
    console.log(tele);
    console.log("resultado del metodo");
    console.log(tele.importe());

}



/*
        IGUAL PERO EN JSON
Crea un objeto llamado tvSamsung con las propiedades nombre (TV Samsung 42”), categoria
(Televisores), unidades (4), precio (345.95) y con un método llamado importe que devuelve 
el valor total de lasunidades (nº de unidades * precio)
*/



function ej_32(){

    

    telejson = {

        nombre: `TV Samsung 42”`, // Propiedades
        categoria: "Televisores" ,
        unidades: 4 ,
        precio: 345.95 ,
       

        importe: function(){
            return this.unidades*this.precio;
        }
    };


    console.log("objeto json");
    console.log(telejson);
    console.log("resultado del metodo");
    console.log(telejson.importe());
}

/*Crea una clase Productos con las propiedades y métodos del ejercicio anterior. Además tendrá un
método getInfo que devolverá: ‘Nombre (categoría): unidades uds x precio € = importe €’. Crea 3 productos
diferentes.*/

function ej_41(){

    class tvSamsung{
        constructor(nombre,categoria,unidades,precio){
            this._nombre = nombre;
            this._categoria = categoria;
            this._unidades = unidades;
            this._precio = precio;
        }
        get nombre(){
            return this._nombre;
        }
        get categoria(){
            return this._categoria;
        }
        get unidades(){
            return this._unidades;
        }
        get precio(){
            return this._precio;
        }


        set nombre(valor) {
            this._nombre = valor;
        }

        set categoria(valor) {
            this._categoria = valor;
        }

        set unidades(valor) {
            this._unidades = valor;
        }

        set precio(valor) {
            this._precio = valor;
        }

        importe(){
            return this.unidades * this.precio;
        }


        getInfo (){

            let info =`Nombre: ${this.nombre}| Categoria: ${this.categoria}| Unidades: ${this.unidades}| precio: ${this.precio}| importe total: ${this.importe()}`;

            console.log(info);


        }

    }   

    let telesmac6 = new tvSamsung(`TV Samsung 42"`,"Televisores",4,345.95);
    let telesmac7 = new tvSamsung(`TV Samsung 37"`,"Televisores",6,299.99);
    let telesmac8 = new tvSamsung(`TV Samsung 30"`,"Televisores",10,200.01);



    telesmac6.getInfo();
    telesmac7.getInfo();
    telesmac8.getInfo();
}


/*
Crea una clase Televisores que hereda de Productos
 y que tiene una nueva propiedad llamada tamaño.
 El método getInfo mostrará el tamaño junto al nombre
*/

class televisores extends tvSamsung {



    constructor(nombre,categoria,unidades,precio,tamaño){


   super(nombre,categoria,unidades,precio)

   this._tamaño = tamaño;
    

    }

   getInfo (){

        let info =`Nombre: ${this.nombre}| Categoria: ${this.categoria}| Unidades: ${this.unidades}| precio: ${this.precio}| importe total: ${this.importe()}`;

        console.log(info);


    }



}