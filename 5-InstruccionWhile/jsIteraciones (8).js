function mostrar() {
	var numero;
	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 'si';

	do {
		numero = parseInt(prompt("Ingrese un número"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		if (numero >= 0) {
			positivo += numero;
		}
		else {
			negativo *= numero;
			flag = 1
		}

		respuesta = prompt("¿Quiere ingresar otro numero?").toLowerCase();


	} while (respuesta == 'si');

	if (flag == 0) {
		negativo = 0
	}

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN