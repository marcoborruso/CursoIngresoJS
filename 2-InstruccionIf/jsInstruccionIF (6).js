function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;

    if(edad  >=18){
        alert("es mayor de edad");
}
    if(edad >= 13)
{

         if (edad <= 17)
    {
            alert("es adolescente");
    }
        
}
        if (edad < 13){
                alert ("es menor de edad ");
}


}//FIN DE LA FUNCIÓN