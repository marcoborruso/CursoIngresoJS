function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	

	while(numero<0 || numero >10) {

		numero = prompt("Error, ingrese un número entre 0 y 10.");

	}
	document.getElementById("Numero").value = numero;
	alert("Número correcto");	
	
	




}//FIN DE LA FUNCIÓN