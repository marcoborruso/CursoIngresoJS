function mostrar() {
    var producto;
    var peso;
    var temperatura;
    var marcapesado;
    var contadorproductos;
    var pmaximo;
    var pminomo;
    var seguir = 'si'


    do {
        producto = prompt("Ingrese la marca de un producto");
        peso = parseInt("Ingresar peso entre 1 y 100");

        while (peso > 1 || peso < 100) {
            peso = parseInt("Error, ingrese un peso válido.");
        }
        temperaturas = parseInt("Ingresar una temperatura entre -30 y 30");
        while (!(temperatura > -30 && temperatura < 30)) {
            temperaturas = parseInt("Error, ingrese una temperatura válida.");
        }
        seguir = prompt("¿Quiere ingresar mas datos?");

    } while (seguir == 'si')
}
