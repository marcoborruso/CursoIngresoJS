function mostrar() {

	var contador = 0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta = 'si';

	while (respuesta == 'si') {
		//pido un numero
		numero = parseInt(prompt("Ingresar un numero"));
		respuesta = prompt("¿Quiere ingresar otro numero?");
		if (contador == 0) {
			minimo = numero;
			maximo = numero;
	
		}
		else
		{
			if (numero < minimo) {
				minimo = numero;
			}
		
			if (numero > maximo) {
				maximo = numero;
			}
	
	
		}
		contador++;
	}

	


	//mostrar mediante ID
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN