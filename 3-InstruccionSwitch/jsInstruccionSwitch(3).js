function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    //alert (mesDelAño);
    switch (mesDelAño) {
        case ("Julio"):
        case ("Agosto"):
        case ("Marzo"):
        case ("Abril"):
        case ("Mayo"):
        case ("Junio"):
        case ("Septiembre"):
        case ("Octubre"):
        case ("Noviembre"):
        case ("Diciembre"):
        case ("Enero"):
            alert("Este mes tiene 30 dias o mas");
            break;

        case ("Febrero"):
            alert("Este mes no tiene mas de 29 dìas");
            break;
    }


}//FIN DE LA FUNCIÓN