function mostrar() {
    var nota;
    var contador = 0;
    var sexo;
    var bajita;
    var sexobajita;
    var notavaron = 0;
    var acumulador = 0;
    var promedio;
   


    while (contador < 5) {
        nota = parseInt(prompt("Ingrese una nota"));
        acumulador = acumulador + nota;
        while (isNaN(nota < 0 || nota > 10)) {
            nota = prompt("Esto no es una nota basuuuuura");
        }
        sexo = prompt("Ingrese un sexo");
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Esto no es un sexo malditooooo!");
        }
        if (contador == 0 || nota < bajita) {
            bajita = nota;
            sexobajita = sexo;
        }
        if (nota >= 6 && sexo == 'm') {

            notavaron++;
        }
        contador++;



    }
    promedio = acumulador / 5;
    alert(" El promedio de todas las notas es igual a : " + promedio + ", la nota mas baja es :" + bajita + " y su sexo es " + sexobajita + " y la cantidad de varones que su nota haya sido mayor o igual a 6 es : " + notavaron);



























    //for (var nota; contador < 5; contador++) {

    //  nota = parseInt(prompt("Ingrese una nota."));
    //while (isNaN(nota < 0 || nota > 10)) {
    //  nota = prompt("Nota inválida,ingrese una nota entre 0 y 10.");
    //}
    //sexo = prompt("Ingrese un sexo por favor.")
    //while (sexo != 'f' && sexo != 'm') {
    //  sexo = prompt("Sexo inválido, por favor ingrese un sexo.");
    //
    //if (contador == 0)
    //{
    //SexoyNotaBaja = nota;
    //  NotaBaja = nota
    //}
    //else
    // if(nota < NotaBaja){
    // NotaBaja = nota
    //   SexoyNotaBaja = sexo
    // }

    //}

    //  promedio = promedio + nota;


    //}
    // alert(" El promedio de las notas es" + promedio + " la nota mas baja es" + NotaBaja + " y el sexo de esa persona es" + SexoyNotaBaja );





}
