			
		var vs=null;
		var url;
		var autor = "Agustin"
		

		function abrirVentana(){			
			
			let inputUrl = document.getElementById('idUrl');			

			vs = window.open("secundaria.html","Pagina en blanco");	
				
		}

		function mostrar(){
			alert("Esto es la página principal");
		}

		/*
		abrir terminal desde la carpeta en la que estan los archivos
		y ejecutar este comando para habilitar la comunicacion entre ventanas de estos archivos
		
		google-chrome --args --disable-web-security --user-data-dir="."

		*/