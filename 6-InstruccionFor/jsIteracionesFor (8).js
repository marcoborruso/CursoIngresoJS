function mostrar()
{

    var num = parseInt(prompt("Ingrese un número: "));

    while (isNaN(num)) 
    {
        num = parseInt(prompt("Ese no es un número. Ingrese un número: "));
    }

    for (var i = 1; i <= num; i++)
    {
        if ((num % i == 0) || (i != num) || (i != 1)) 
        {
            document.write(num + " No es un número primo");
        }
        else {
            document.write(num + " es un número primo");
        }

    }

}//FIN DE LA FUNCIÓN