			
		var vs=null;
		var url;
		var autor = "pablo fran"
		

		function abrirVentana(){			
			
			let inputnombre = document.getElementById('idnombre');
            let inputapellido = document.getElementById('idapellido');			
            let inputedad = document.getElementById('idedad');

			vs = window.open("00_form2.html","Pagina en blanco");	
				
		}

		function mostrar(){
			alert("Esto es la página principal");
		}

		/*
		abrir terminal desde la carpeta en la que estan los archivos
		y ejecutar este comando para habilitar la comunicacion entre ventanas de estos archivos
		
		google-chrome --args --disable-web-security --user-data-dir="."

		*/


        /*
        lo optimo es tener 2 js uno solo con el abridor y otro con todo lo demas
        
        
        */