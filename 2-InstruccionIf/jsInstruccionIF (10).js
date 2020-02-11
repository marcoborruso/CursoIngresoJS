function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	nota = Math.floor(Math.random() * 11 - 1) + 1

	if(nota == 9 || nota == 10)
	{
		alert(nota + ": EXCELENTE")
	}
	if ( nota > 4 && nota <8)
	{
		alert(nota + ": APROBÓ");
	}
	if (nota <4)
	{
		alert(nota + ": Vamos, la próxima se puede ");
	}
}//FIN DE LA FUNCIÓN