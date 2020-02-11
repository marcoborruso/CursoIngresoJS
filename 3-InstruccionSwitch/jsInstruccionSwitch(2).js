function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case ("Julio"):
        case ("Agosto"):
            alert("Abrigate que hace frío");
            break;

        case ("Marzo"):
        case ("Abril"):
        case ("Mayo"):
        case ("Junio"):
        case ("Febrero"):
        case ("Enero"):
            alert("Falta para el invierno");
            break;

        case ("Septiembre"):
        case ("Octubre"):
        case ("Noviembre"):
        case ("Diciembre"):
            alert("Ya pasamos el frío, ahora CALOR!!");
            break;
    }





}//FIN DE LA FUNCIÓN