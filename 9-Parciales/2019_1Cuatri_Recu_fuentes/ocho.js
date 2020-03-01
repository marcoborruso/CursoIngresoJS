function mostrar()
{

    var color;
    var valor;
    var respuesta;
    var contRojo = 0;
    var contRojo5000 = 0;
    var contMenor5000 = 0;
    var acumValor = 0;
    var contAutos = 0;
    var mayorValor = 0;
    var colorCaro;
    
    do {
        color = prompt('Ingrese el color del vehículo (R=Rojo - V=Verde - A=Amarillo):').toUpperCase();
        while(!(color == "R" || color == "V" || color == "A")){
            color = prompt('Ese no es un color válido, ingrese el color nuevamente (R=Rojo - V=Verde - A=Amarillo):').toUpperCase();
        }

        valor = parseInt(prompt('Ingrese el valor del vehículo (Entre 0 y 10000'));
        while (isNaN(valor) || valor > 10000 || valor < 0){
            valor = parseInt(prompt('Eso no es un número válido. Ingrese el valor del vehículo (0-10000):'));
        }

        if (color == 'R'){
            contRojo++;
            if (valor > 5000){
                contRojo5000++;
            }
        }
        
        if (valor < 5000){
            contMenor5000++;
        }

        if (mayorValor < valor){
            mayorValor = valor;
            colorCaro = color;
        }

        acumValor = acumValor + valor;
        contAutos++;

    } while (respuesta = confirm('Desea continuar?'));

    document.write('a) La cantidad de rojos es: ' + contRojo + '</br>');
    document.write('b) La cantidad de rojos de precio mayor a 5000 es: ' + contRojo5000 + '</br>');
    document.write('c) La cantidad de vehículos con precio menor a 5000: ' + contMenor5000 + '</br>');
    document.write('d) El promedio del VALOR de todos los vehículos es: ' + acumValor/contAutos + '</br>');
    document.write('e) El auto más caro vale: ' + mayorValor + ' y su color es ' + colorCaro + '</br>');

}
