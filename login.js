/* function comprobarcred (event) {
	var contrasena = document.getElementById("password").value
	if (contrasena == "patata") and {
		window.location.href = "./index.html";
	}
	else {
		window.alert("Contraseña incorrecta")
		console.log("contraseña incorrecta")
	}
	var usuario = document.getElementById("user").value
	if (usuario == "pata"){
		window.location.href = "./index.html";
	}
	else {
		window.alert("Contraseña usuario incorrecto")
		console.log("contraseña correcta")
	}
} */
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

function comprobarcred (event) {
	var contrasena = document.getElementById("password").value
	var usuario = document.getElementById("user").value
	if ((contrasena == "patata") && (usuario == "admin")){
		window.location.href = "./inicio.html";
	}
	else {
		window.alert("El usuario o la contraseña es incorrecta")
		console.log("contraseña o usuario incorrecta")
	}
}