function mostrar() {
	var contNeg = 0;
	var contPos = 0;
	var numero;
	var acumNeg = 0;
	var acumPos = 0;
	var contCer = 0;
	var respuesta;

	do {
		numero = parseInt(prompt("Ingresar un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		if (numero < 0) {
			acumNeg += numero;
			contNeg++;
		}
		else if (numero >= 0) {
			acumPos += numero;
			contPos++;
		}
		else {
			contCer++;
		}

		respuesta = prompt("¿Quiere ingresar otro numero?").toLowerCase();
	} while (respuesta == 'si');

	document.write("Suma de negativos: " + acumNeg + "</br>")
	document.write("Suma de positivos: " + acumPos + "</br>")
	document.write("Cantidad de positivos: " + contPos + "</br>")
	document.write("Cantidad de negativos: " + contNeg + "</br>")
	document.write("Cantidad de ceros: " + contCer + "</br>")
	document.write("Promedio de negativos: " + acumNeg/contNeg + "</br>")
	document.write("Promedio de positivos: " + acumPos/contPos + "</br>")
	document.write("Diferencia entre Pos y neg: " + acumPos - acumNeg + "</br>")
}//FIN DE LA FUNCIÓN