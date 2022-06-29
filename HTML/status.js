function comprobarip(event) {
		var ip = document.getElementById('ip').value.split('.')
		if (ip.length == 4){
			for (var i = 0; i < ip.length;i++) {
			var ipd = parseInt(ip[i]);
			if ((ipd > 255) || (ipd < 0)) {
				console.log("No es váildo")
				return false
			}
			}
		}
		console.log("Es válido")
}

function search (event) {
	var busqueda = document.getElementById("bsearch").value
	console.log(busqueda)
	if (busqueda.toLowerCase() == "info"){
		console.log("Redirect info.html")
		window.location.href = "./info.html";
	}
		if (busqueda.toLowerCase() == "inicio"){
		console.log("Redirect Index.html")
		window.location.href = "./Index.html";
	}
		if (busqueda.toLowerCase() == "status"){
		console.log("Redirect status.html")
		window.location.href = "./status.html";
	}
		if (busqueda.toLowerCase() == "acerca de"){
		console.log("Redirect info.html")
		window.location.href = "./info.html";
	}
		if (busqueda.toLowerCase() == "about"){
		console.log("Redirect info.html")
		window.location.href = "./info.html";
	}
}

function correctip (event) {
	var ip = document.getElementById("search").value
	var ipArr = ip.split('.');
	console.log(ipArr)
	console.log(ipArr.length);
	if (ipArr.length == 4){

		for (var i = 0; i < ipArr.length; i++){
			console.log(ipArr[i])
			if (parseInt(ipArr[i])>256 || parseInt(ipArr[i])<0) {
				console.log("Incorrecto")
				return false;
			}
		}
		console.log("Ip correcta")
		return true;
	}
}

