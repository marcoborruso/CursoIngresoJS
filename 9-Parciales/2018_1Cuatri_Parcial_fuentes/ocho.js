function mostrar()
{
    var numero;
    var letra;
    var pares;
    var acumuladorpares = 0
    var impares;
    var acumuladorimpares= 0
    var acumladodeceros= 0
    var positivos
    var acumuladorpositivos = 0
    var negativos
    var acumuladornegativos = 0
    var numletramax
    var numletramin

    var seguir = 's'
    var promedio; 
    
    do{
        impares= parseInt(impares);
        pares = parseInt(pares);
        numero = parseInt(prompt("Ingresar un número"));
        letra = prompt("Ingresar una letra")

        if(numero % 2 == 0){
            acumuladorpares++;
        }
            else {
                acumuladorimpares++;
            }
           if (numero >0){
               acumuladorpositivos = acumuladorpositivos + numero;
           } 
           else {
               acumuladornegativo = acumuladornegativo + numero;
           }

        
        
        
        
seguir = prompt("¿Quìere seguir ingresando numeros y letras?")
    }while(seguir == 's');

    document.write("La cantidad de numeros pares es :" + acumuladorpares);
    document.write("La cantidad de numeros impares es :" + acumuladorimpares + "<br>");
    document.write("La cantidad de numeros negativos :" + acumuladornegativo +  "<br>");
    document.write("La cantidad de numeros positivos es :" + acumuladorpositivo + "<br> " );
}
