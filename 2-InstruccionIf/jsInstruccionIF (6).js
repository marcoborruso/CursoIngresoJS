function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;

    if(edad  <13){
        alert("Niño");
    }
    else if(edad <= 17){
        alert("Adolescente");
    }
    else if(edad <= 65){
        alert("Adulto")
    }
    else{
        alert("Anciano")
    }


}//FIN DE LA FUNCIÓN