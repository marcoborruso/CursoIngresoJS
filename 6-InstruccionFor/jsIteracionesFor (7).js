function mostrar()
{
    var num;
    var contDiv = 0;
    
    num = parseInt(prompt("Ingrese un número: "));

    while (isNaN(num)) 
    {
        num = parseInt(prompt("Ese no es un número. Ingrese un número: "));
    }

    for (var i = 1; i <= num; i++)
    {
        if (num % i == 0) {
            document.write((num/i) + "</br>");
            contDiv++;
        }

    }
    document.write("Contador de divisores: " + contDiv + "</br>");



}//FIN DE LA FUNCIÓN