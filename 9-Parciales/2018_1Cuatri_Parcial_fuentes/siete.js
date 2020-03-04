function mostrar() {
    var nota;
    var sexo;
    var notaMenor;
    var sexoMenor;
    var acumulador = 0;
    var flag = 0;
    var contVaron = 0;


    for (var contador = 0; contador < 5; contador++) 
    {
        nota = parseInt(prompt("Ingrese la nota de (0-10): "));

        while (isNaN(nota) || (nota < 0 || nota > 10)) {
            nota = parseInt(prompt("Eso no es una nota válida. Ingrese nuevamente: "));
        }
       
        sexo = prompt('Ingrese su sexo "F" o "M"').toUpperCase();

       while(!(sexo == "M" || sexo == "F"))
       {
           sexo = prompt("Error, ingrese su sexo nuevamente.").toUpperCase();
       }

       if (nota < notaMenor || flag == 0){
           notaMenor = nota;
           sexoMenor = sexo;
           flag = 1;
       }

       if (sexo == "M" && nota >= 6){
           contVaron++;
       }

       acumulador = acumulador + nota;
    }

    document.write("El promedio de las notas es " + acumulador/5 + "</br>");
    document.write("La nota más baja fue " + notaMenor + " y el sexo de la persona es " + sexoMenor + "</br>");
    document.write("La cantidad de varones con nota superior a 6 es de " + contVaron);

}
