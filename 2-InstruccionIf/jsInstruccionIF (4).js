function mostrar()
{
//tomo la edad  

    //var edad;
    //edad = document.getElementById("edad").value;
    //if (edad >=13 && edad <17 ){
        //alert("es adolecente");
    //}

    var edad;

    edad = document.getElementById("edad").value;

    /*if(edad >= 13 && edad <= 17){
        
           // alert("Es adolescente")
            
    } */
    if (! (edad <12 || edad >17))
        alert("Es adolescente");

} //FIN DE LA FUNCION