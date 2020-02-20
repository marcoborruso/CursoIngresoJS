function mostrar() {

	//	var contador = 0;
	var flag = 0;
	var numero;
	var maximo;
	var minimo;
	var respuesta

	do {
		numero = parseInt(prompt("Ingresar un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		if (flag == 0 || numero > maximo) {
			maximo = numero;
		}
		if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag = 1;
		}
		/*if (contador == 0) {
			minimo = numero;
			maximo = numero;
			contador++;	
		}
		else
		{
			if (numero < minimo) {
				minimo = numero;
			}
		
			if (numero > maximo) {
				maximo = numero;
			}*/
		respuesta = prompt("¿Quiere ingresar otro numero?").toLowerCase();
	} while (respuesta == 'si');

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN