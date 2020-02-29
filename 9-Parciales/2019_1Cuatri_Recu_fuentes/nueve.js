function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var nota;
    var contVaronesAprobados = 0;
    var contDeMenores = 0;
    var acumNotaMenores = 0;
    var contAdolescentes = 0;
    var acumNotaAdolescentes = 0;
    var contMayores = 0;
    var acumMayores = 0;
    var contFemenino = 0;
    var contMasculino = 0;
    var notasMasc = 0;
    var notasFem = 0;
           
    do{
       nombre = prompt("Ingrese el nombre:");
       while (!isNaN(nombre)){
           nombre = prompt("Eso no es un nombre, ingrese un nombre:");
       }
       
       edad = parseInt(prompt("Ingrese la edad:"));
       while (isNaN(edad) || edad > 100 || edad < 3){
           edad = parseInt(prompt("Eso no es una edad válida, ingrese la edad:"));
       }
       
       sexo = prompt('Ingrese sexo "F" o "M":').toUpperCase();
       while(!(sexo == "M" || sexo == "F")){
           sexo = prompt("Error, ingrese su sexo nuevamente:").toUpperCase();
       }
       
       nota = parseInt(prompt("Ingrese la nota entre 1 y 10:"))
       while (isNaN(nota) || nota > 10 || nota < 1){
           nota = parseInt(prompt("Eso no es una nota válida, ingrese la nota (1-10):"));
        }
        
        if (sexo == "M" && nota > 5){
            contVaronesAprobados++;
        }
        if (edad < 13){
            acumNotaMenores = acumNotaMenores + nota;
            contDeMenores++;
        }
        else if (edad > 18){
            acumMayores = acumMayores + nota;
            contMayores++;
        }
        else {
            acumNotaAdolescentes = acumNotaAdolescentes + nota;
            contAdolescentes++;
        }

        if (sexo == "M"){
            notasMasc = notasMasc + nota;
            contMasculino++;
        }
        else {
            notasFem = notasFem + nota;
            contFemenino++;
        }
         
       // respuesta = prompt("¿Quiere continuar?").toLowerCase();

    } while (respuesta = confirm("Desea continuar?"));
    
    document.write("a) Cantidad de varones aprobados: " + contVaronesAprobados + "</br>");
    document.write("b) Promedio de notas de menores: " + acumNotaMenores/contDeMenores + "</br>");
    document.write("c) Promedio de notas de adolescentes: " + acumNotaAdolescentes/contAdolescentes +"</br>");
    document.write("d) Promedio de notas de mayores: " + acumMayores/contMayores + "</br>");
    document.write("e) Promedio de notas masculino: " + notasMasc/contMasculino + "</br>");
    document.write("f) Promedio de notas femenino: " + notasFem/contFemenino + "</br>");
}
