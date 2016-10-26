
var nombre = document.getElementById("name").value;
var apellido = document.getElementById('lastname').value;
var email = document.getElementById('input-email').value;
var contrasena = document.getElementById('input-password').value;

function validateForm(){
	
	function validarNombre(){

		if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
	
	alert("Este campo es obligatorio");  
  	return false;

		}
	}
	validarNombre();
}















/*

	if( apellido == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	
	alert("Este campo es obligatorio");  
  	return false;
}
	if( email == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	
	alert("Este campo es obligatorio");  
  	return false;
}
	if( contrasena == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	
	alert("Este campo es obligatorio");  
  	return false;
}

}
*/