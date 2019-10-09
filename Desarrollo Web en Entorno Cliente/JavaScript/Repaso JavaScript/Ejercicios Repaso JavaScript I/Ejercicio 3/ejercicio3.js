
function mostrar() {

		let ciudades = ['Sevilla','Cadiz','Huelva','Malaga','Granada','Almeria','Jaen','Cordoba'];

		ciudades.sort();

		for (let i = 0; i <= ciudades.length - 1; i++) {

			tabla = document.getElementById("tabla");
			newTr = document.createElement("tr");
			newTd = document.createElement("td");
			newTd1 = document.createTextNode(ciudades[i]);

			newTd.appendChild(newTd1);
			newTr.appendChild(newTd);
			tabla.appendChild(newTr);
		}
}