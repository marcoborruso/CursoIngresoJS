function mostrar() 
{
    var num;
    var contPar = 0;
    
    num = parseInt(prompt("Ingrese un número: "));

    while (isNaN(num)) 
    {
        num = parseInt(prompt("Ese no es un número. Ingrese un número: "));
    }

    for (var num2 = 1; num2 <= num; num2++)
    {
        if (num2 % 2 == 0) {
            document.write(num2 + "</br>");
            contPar++;
        }

    }
    document.write("Contador de Pares: " + contPar + "</br>");
}//FIN DE LA FUNCIÓN