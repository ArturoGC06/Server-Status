function comprobarcred (event) {
	var usuario = document.getElementById("user").value
	console.log(usuario)
	if (usuario == "Hola"){
	console.log("Redirect info.html")
	window.location.href = "./info.html";
	
	}
}