/*
function cambiaFondo(evt){
    console.log(evt.target);
    console.log(this)

    if(evt.target == document.getElementById("btn")){
        let red = parseInt(Math.random()*256);
        let green = parseInt(Math.random()*256);
        let blue = parseInt(Math.random()*256);
    
        let color = `rgb(${red},${green},${blue})`;
    
        document.getElementsByTagName("body")[0].style.backgroundColor = color;
    }else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    }  
}

document.addEventListener("click",cambiaFondo);
*/

//cambiamos document por this pero es esto suficiente??
function cambiaFondo(evt){
   
    if(evt.target == this.getElementById("btn")){
        let red = parseInt(Math.random()*256);
        let green = parseInt(Math.random()*256);
        let blue = parseInt(Math.random()*256);

        let color = `rgb(${red},${green},${blue})`;

        this.getElementsByTagName("body")[0].style.backgroundColor = color;
    }else {
        this.getElementsByTagName("body")[0].style.backgroundColor = "white";

    }
evt.preventDefault();
}

document.addEventListener("click",cambiaFondo);

