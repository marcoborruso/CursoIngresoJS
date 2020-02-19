function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var seguir='si';



	while(seguir == 'si')
	{
		numero = parseInt(prompt ("Ingrese un número"));

		acumulador = acumulador + numero

		contador = contador + 1

		seguir = prompt("¿Quiere ingresar otro número?")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN