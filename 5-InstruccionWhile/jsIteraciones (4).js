function mostrar()
{

	var num = parseInt(prompt("Ingrese un número entre 0 y 9."));
	

	while(num<0 || num >9 || isNaN(num)) 
	{
		num = parseInt(prompt("Error, ingrese un número entre 0 y 9."));
	}
	document.getElementById("Numero").value = num;
	alert("Número correcto");	
	
	




}//FIN DE LA FUNCIÓN