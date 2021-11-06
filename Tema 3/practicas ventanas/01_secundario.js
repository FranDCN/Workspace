			
		//Recuperar valores del Padre
		let nombre = window.opener.document.getElementById("idNombre").value;
		let apellido = window.opener.document.getElementById("idApellido").value;
		let edad = window.opener.document.getElementById("idEdad").value;

		// Mostrar valores en página actual
		document.getElementById("valorNombre").innerHTML=nombre;
		document.getElementById("valorApellido").innerHTML=apellido;
		document.getElementById("valorEdad").innerHTML=edad;