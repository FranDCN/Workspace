// 2. Realizar un script que permita mover una caja dentro de la ventana del navegador tanto con las
// teclas de desplazamiento del teclado central como con las del teclado numérico.document.write("Hola Mundo")
var coorX = 0;
var coorY = 0;
var altura = window.screen.height
var anchura = window.screen.width


window.onload = function () {
    window.addEventListener('keydown', (e) => {
        let caja = document.getElementById("idCaja")
        let desp = 10
        switch (e.key) {
            case '4':
            case 'ArrowLeft':
                coorX = (coorX - desp) < 0 ? coorX : coorX - desp;
                caja.style.left = coorX + 'px';
                break;
            case '6':
            case 'ArrowRight':
                coorX = coorX + desp > anchura ? coorX : coorX + desp;
                caja.style.left = coorX + 'px';
                break;
            case '8':
            case 'ArrowUp':
                coorY = (coorY - desp) < 0 ? coorY : coorY - desp;
                caja.style.top = coorY + 'px';
                break;
            case '22':
            case 'ArrowDown':
                coorY = coorY + desp > altura ? coorY : coorY + desp;
                caja.style.top = coorY + 'px';
                break;
        }
    });
};
