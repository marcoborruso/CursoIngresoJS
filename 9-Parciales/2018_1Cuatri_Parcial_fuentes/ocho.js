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
    var seguir = 's'
    var flag = 0


    do {
        letra = prompt("Ingrese una letra").toUpperCase();
        while (!((letra >= 'A' && letra <= 'Z'))) {
            letra = prompt('Eso no es una letra válida. Ingrese una letra:').toUpperCase();
        }

        numero = parseInt(prompt("Ingrese un número entre el -100 y el 100"));
        while (numero < - 100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Error, ingrese un numero entre el -100 y 100"));
        }
        
        if (numero % 2 == 0) {
            pares++;
        }
        else {
            impares++;
        }
        //cuento la cantidad de ceros que hay

        //El promedio de los numeros positivos ingresados promedio = positivos / contadorpositivos;
        if (numero > 0) {
            positivos = positivos + numero;
            contadorpositivos++;
        }
        else if (numero == 0) {
            ceros++;
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


        seguir = prompt("¿Quiere ingresar otro numero?");
        //promedio = contadorpositivos / positivos;
    } while (seguir == 's');

    if (contadorpositivos != 0) {
        promedio = positivos / contadorpositivos;
    }

    document.write("La cantidad de numeros pares es: " + pares + "</br>");
    document.write("La cantidad de numeros impares es: " + impares + "</br>");
    document.write("El promedio de los numeros positivos ingresados es: " + promedio + "</br>");
    document.write("La suma de los numeros negativos ingresados es: " + negativos + "</br>");
    document.write("La cantidad de ceros ingresados es: " + ceros + "</br>");
    document.write("El numero maximo es: " + maximo + " y su letra es: " + lmaximo + "</br>");
    document.write("El numero minimo es: " + minimo + " y su letra es: " + lminimo + "</br>");
}
/*
function mostrar() {
    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var contadorPos = 0;
    var acumuladorPos = 0;
    var acumuladorNeg = 0;
    var maximo;
    var minimo;
    var letraMax;
    var letraMin;
    var flag = 0;
    var minimoMinus;
    var letraMinMinus;
    var flagMinus = 0;
    var promedioPos = 0;

    do {
        // pido los datos
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }

        numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Dato invalido. Ingrese un numero (-100 y 100): "));
        }
        // ------------- paridad ---------------

        if (numero % 2 == 0) {
            // pares
            contadorPares++;
        }
        else {
            // impares
            contadorImpares++;
        }

        // --------------- signo ---------------

        if (numero == 0) {
            // ceros
            contadorCeros++;
        }
        else if (numero > 0) {
            // positivos
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        else {
            // negativo
            acumuladorNeg = acumuladorNeg + numero;
        }

        // ------------- maximos y minimos -------------

        if (flag == 0 || numero < minimo) {
            minimo = numero;
            letraMin = letra;
        }
        if (flag == 0 || numero > maximo) {
            maximo = numero;
            letraMax = letra;
            flag = 1;
        }

        // --------------- g --------------

        if ((letra >= 'a' && letra <= 'z') && (flagMinus == 0 || numero < minimoMinus)) {
            minimoMinus = numero;
            letraMinMinus = letra;
            flagMinus = 1;
        }

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');

    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    document.write("a) La cantidad de números pares: " + contadorPares + "</br>");
    document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Maximo: " + maximo + " Letra: " + letraMax + "</br>");
    document.write("f) Minimo: " + minimo + " Letra: " + letraMin + "</br>");
    document.write("g) El menor numero de las letras minusculas: " + minimoMinus + " Letra: " + letraMinMinus + "</br>");

    
}*/