function mostrar()
{

var sexo = prompt("Ingrese f ó m .").toUpperCase();

/*while(sexo!="f" && sexo != "m" && sexo != "M" && sexo != "F") sexo == "M" || sexo == "F" ||*/

while(!(sexo == "M" || sexo == "F" || isNaN(sexo)))
{
    sexo= prompt("Error, ingrese su sexo nuevamente.").toUpperCase();
}

if(sexo == "F") 
{
    alert("Bienvenida");
    sexo = "Femenino";
}
else {
    alert("Bienvenido");
    sexo = "Masculino";
}

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN