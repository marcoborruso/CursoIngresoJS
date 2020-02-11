function mostrar() {
    var notas;
    var sexo;
    var contador = 0;
    var promedio;
    var notapb;
    var sexop
    var contadorvaron;

    while (contador < 5) {


        contador++;
        notas = prompt("Ingresar nota");

        while (isNaN(notas > 0 || notas < 10)) {
            alert("Ingresar una nota válida")
            notas = prompt("Ingresar nota");

        }
        if (contador = 0) {

        }
        sexo = prompt("Ingrese un sexo");

        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Error, ingrese su sexo nuevamente.");

        }
        notabj = parseInt(notas);
        if (notapb == 1 || notapb == notas) {
            notapb = notas;
            sexop = sexo;
        }


    }




    alert(notas + sexo);
}   