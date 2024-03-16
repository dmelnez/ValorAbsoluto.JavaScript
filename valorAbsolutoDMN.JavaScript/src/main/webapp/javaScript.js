/**
 * 
 */

 function calculoaAbsoluto(){
	 	 
 let numeroUsu01 = prompt("Introduzca un numero: ");

	if (numeroUsu01 < 0) 
	{
		numeroUsu01 = numeroUsu01 * -1;
	}
	
	
	document.getElementById("valorAbsoluto").innerHTML = numeroUsu01;
	
 }