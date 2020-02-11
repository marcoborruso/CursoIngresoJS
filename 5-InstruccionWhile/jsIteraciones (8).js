function mostrar() {
	var numero;
	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 'si';

	do {
		numero = parseInt(prompt("Ingrese un número"));
		while (isNaN(numero)) {
			alert("Esto no es un numero")
			numero = parseInt(prompt("Ingrese un número"));
		}
		if (numero > 0) {
			positivo = positivo + numero;
		}
		else {
			negativo = negativo * numero
			contador = contador + 1;
		}

		respuesta = prompt("¿Quiere ingresar otro numero?")


	} while (respuesta == 'si');






	document.getElementById('suma').value = positivo;
	if (contador == 0) {
		contador = 0
	}
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN