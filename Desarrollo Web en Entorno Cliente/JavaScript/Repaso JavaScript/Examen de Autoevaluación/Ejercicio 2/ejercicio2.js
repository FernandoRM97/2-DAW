	

	function insertar(){
		let insertado;

		let dni;

		let name = prompt("Introduzca el nombre del empleado");

		let apellido = prompt("Introduzca el apellido del empleado");

		let miTabla = (document.getElementById("tabla").rows.length) - 1;

		let dnis = [];
		
		let numeroEmp = parseInt(document.getElementById("numEmp").textContent);

		for (let i = 1; i <= miTabla ; i++) {
			
			dnis[i - 1] = document.getElementsByTagName("td")[(i*4)-3].textContent;

		}

		do {
			insertado = false;

			dni = prompt("Introduzca el dni del empleado");

			for (let i = 0; i < dnis.length; i++) {
			
				if(dni.includes(dnis[i])){
					alert("NO SE PUEDE REPETIR EL DNI.");
					insertado = false;
					break;
				}else{
					insertado = true;
				}
			
			}

		
		} while (insertado === false);

		if((insertado == true) && (name.length > 0) && (apellido.length > 0) && (dni.length > 0)){

			document.getElementById("numEmp").innerHTML = numeroEmp + 1;
		
			let laTabla = document.getElementById("tabla");
			
			let filaNueva = document.createElement("tr");

			let columnaNueva = document.createElement("td");

			let columnaNueva2 = document.createElement("td");

			let columnaNueva3 = document.createElement("td");

			let columnaNueva4 = document.createElement("td");

			let texto1 = document.createTextNode(miTabla+1);

			let texto2 = document.createTextNode(dni);

			let texto3 = document.createTextNode(name);

			let texto4 = document.createTextNode(apellido);

			columnaNueva.appendChild(texto1);

			columnaNueva2.appendChild(texto2);

			columnaNueva3.appendChild(texto3);

			columnaNueva4.appendChild(texto4);

			filaNueva.appendChild(columnaNueva);

			filaNueva.appendChild(columnaNueva2);

			filaNueva.appendChild(columnaNueva3);

			filaNueva.appendChild(columnaNueva4);

			laTabla.appendChild(filaNueva);

		}else{

			alert("Imposible insertar empleado.");

		}

	}
	

	function borrarEmp(){

		let miTabla = (document.getElementById("tabla").rows.length) - 1;
		
		let dnis = [];
		
		let numeroEmp = parseInt(document.getElementById("numEmp").textContent);

		for (let i = 1; i <= miTabla; i++) {
			
			dnis[i - 1] = document.getElementsByTagName("td")[(i*4)-3].textContent;

		}

			dni = prompt("Introduzca el dni del empleado");

			let dni2 = dnis.indexOf(dni);
			
				if(dni2 > -1){

					document.getElementById("tabla").deleteRow(dni2 + 1);
					document.getElementById("numEmp").innerHTML = numeroEmp - 1;
					
				}else{

					alert("El empleado no existe o no figura en la base de datos.");
				}

	}


	