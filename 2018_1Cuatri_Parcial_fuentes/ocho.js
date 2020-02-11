function mostrar() {

    var numero;
    var letra;
    var pares = 0;
    var impares = 0;
    var ceros = 0;
    var positivos = 0
    var contadorpositivos = 0
    var promedio = 0
    var negativos = 0
    var minimo;
    var maximo;
    var lminimo;
    var lmaximo;
    var seguir = 'si'
    var flag = 0


    do {
        letra = prompt("Ingrese una letra");
        numero = parseInt(prompt("Ingrese un número entre el -100 y el 100"));

        while (!(numero >= - 100 && numero <= 100)) {
            numero = parseInt(prompt("Error, ingrese un numero entre el -100 y 100"));
        }
        seguir = prompt("¿Quiere ingresar otro numero?");
        //conte numeros pares
        if (numero % 2 == 0) {
            pares++;

        }
        //conte numeros impares
        else {
            impares++;
        }
        //cuento la cantidad de ceros que hay
        if (numero == 0) {
            ceros++;
        }
        //El promedio de los numeros positivos ingresados promedio = positivos / contadorpositivos;
        if (numero > 0) {
            positivos = positivos + numero;
            contadorpositivos++;
        }
        else {
            negativos = negativos + numero

        }
        if (numero > maximo || flag == 0) {
            maximo = numero;
            lmaximo = letra;
        }
        if (numero < minimo || flag == 0) {
            minimo = numero;
            lminimo = letra;
            flag = 1
        }



        //promedio = contadorpositivos / positivos;
    } while (seguir == 'si');

    if (contadorpositivos != 0) {
        promedio = positivos / contadorpositivos;
    }

    document.write("La cantidad de numeros pares es: " + pares + "<br>");
    document.write("La cantidad de numeros impares es: " + impares + "<br>");
    document.write("El promedio de los numeros positivos ingresados es: " + promedio + "<br>");
    document.write("La suma de los numeros negativos ingresados es: " + negativos + "<br>");
    document.write("La cantidad de ceros ingresados es: " + ceros + "<br>");
    document.write("El numero maximo es: " + maximo + " y su letra es: " + lmaximo + "<br>");
    document.write("El numero minimo es: " + minimo + " y su letra es: " + lminimo + "<br>");
}
