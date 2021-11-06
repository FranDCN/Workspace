window.onload = function(){
    /*var primo = function (a){
        let s=(a>=2);
        for(let i=2;i<a && s==true;i++){
            s!=(a%i==0); 
            console.log(s);       
        }
        return s;
    }*/
    //var primo=(a)=>{s=(a>=2);for(i=2;i<a && s==true;i++){s=!(a%i==0);}return s;}  
    function primo (a){
        if(a<2){
            return false;
        }
        for(i=2;i<a;i++){
            if(a%i==0){
                return false;
            }     
        }
        return true;
    }
    let entrada,a;
    do{
        entrada = prompt("Introduce numero primo");

        a = parseInt(entrada);

        console.log(a);

    } while(a<0);
    
    salida=primo(a);
    console.log(salida);


    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;
}