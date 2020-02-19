function mostrar()
{
	var contador=0;
	var acumulador=0;
	var seguir='si';

	do
	{
		acumulador = acumulador + parseInt(prompt ("Ingrese un número"));
		seguir = prompt("¿Quiere ingresar otro número?");
		contador++;
	}while(seguir == 'si');

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN