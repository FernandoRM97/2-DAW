
function aplicar() {

	tabla = document.getElementById("tabla");
	newTr = document.createElement("tr");
	newTd1 = document.createElement("td");
	newTd2 = document.createElement("td");
	newTd3 = document.createElement("td");
	newTd11 = document.createTextNode(document.getElementById("posicion").value);
	newTd22 = document.createTextNode(document.getElementById("equipo").value);
	newTd33 = document.createTextNode(document.getElementById("puntos").value);

	fila = document.getElementById("posicion").value;
	viejoTr = tabla.getElementsByTagName("tr")[fila];
	console.log(viejoTr);

	newTd1.appendChild(newTd11);
	newTd2.appendChild(newTd22);
	newTd3.appendChild(newTd33);
	newTr.appendChild(newTd1);
	newTr.appendChild(newTd2);
	newTr.appendChild(newTd3);

	console.log(newTr);

	// tabla.replaceChild(viejoTr,newTr);

	viejoTr.parentNode.replaceChild(newTr, viejoTr);



}