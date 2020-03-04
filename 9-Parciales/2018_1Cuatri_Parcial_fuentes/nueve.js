function mostrar() {
    var producto;
    var peso;
    var temperatura;
    var pares = 0;
    var marcaMax;
    var productoBajoCero = 0;
    var pesoMax;
    var pminomo;
    var seguir = 's';
    var flag = 0;
    var flagMin = 0;



    do {
        producto = prompt("Ingrese la marca de un producto");

        peso = parseInt("Ingresar peso entre 1 y 100");

        while (peso > 1 || peso < 100 || isNaN(peso)) {
            peso = parseInt("Error, ingrese un peso válido.");
        }
        temperatura = parseInt("Ingresar una temperatura entre -30 y 30");
        while (!(temperatura > -30 && temperatura < 30)) {
            temperatura = parseInt("Error, ingrese una temperatura válida.");
        }

        if (temperatura % 2 == 0) {
            pares++;
        }

        if ((peso > pesoMax && temperatura > 0) || flag == 0){
            pesoMax = peso;
            marcaMax = marca;
            flag = 1;
        }
        if (temperatura < 0){
            productoBajoCero++;
        }
        if (peso > pesoMax){
            pesoMax = peso;
        }
        if (peso < pesoMin || flagMin == 0) {
            pesoMin = peso;
            flagMin = 1;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contadorProducto++;

        seguir = prompt("¿Quiere ingresar mas datos?");
    } while (seguir == 'si')

    promedioPeso = acumuladorPeso/contadorProducto;

    document.write('Temperaturas pares ' + pares + '</br>')
    document.write('Producto pesado no cong ' + marcaMax + '</br>')
    document.write('productos cong ' + productoBajoCero + '</br>')
    document.write('Temperaturas pares ' + productoBajoCero + '</br>')
    document.write('Temperaturas pares ' + productoBajoCero + '</br>')
    document.write('Temperaturas pares ' + productoBajoCero + '</br>')
}
/*function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var contadorPares = 0;
    var marcaPesada;
    var maximoPeso;
    var flag = 0;
    var contadorCongelados = 0;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var pesoMax;
    var pesoMin;

    do {
        // pido los datos
        marca = prompt("Ingrese una marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }

        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalido. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > maximoPeso) && temperatura > 0) {
            maximoPeso = peso;
            marcaPesada = marca;

            flag = 1;
        }

        if (temperatura < 0) {
            contadorCongelados++;
        }


        if (contador == 0 || peso > pesoMax) {
            pesoMax = peso;
        }
        if (contador == 0 || peso < pesoMin) {
            pesoMin = peso;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contador++;

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');


    promedioPeso = acumuladorPeso / contador;






    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    if (flag == 0) {
        document.write("b) La marca del producto más pesado no congelado: No se ingresaron productos no congelados</br>");

    }
    else {

        document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + " Peso: " + maximoPeso + "</br>");
    }
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCongelados + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("e) Maximo: " + pesoMax + "</br>");
    document.write("e) Minimo: " + pesoMin + "</br>");

}
*/