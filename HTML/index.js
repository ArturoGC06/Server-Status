function search (event) {
	var busqueda = document.getElementById("search").value
	console.log(busqueda)
	if (busqueda.toLowerCase() == "info"){
		console.log("Redirect info.html")
		window.location.href = "./info.html";
	}
		if (busqueda.toLowerCase() == "index"){
		console.log("Redirect Index.html")
		window.location.href = "./Index.html";
	}
		if (busqueda.toLowerCase() == "status"){
		console.log("Redirect status.html")
		window.location.href = "./status.html";
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