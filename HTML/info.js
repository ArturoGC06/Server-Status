function sendMail(event) {
	var name = document.getElementById('mails').value
		if (name=='Arturo') {
		 window.location.href = "mailto:Arturo@gmail.com";
	}
		if (name=='Gonzalo') {
		 window.location.href = "mailto:Gonzalo@gmail.com";
	}
		if (name=='Ignacio') {
		 window.location.href = "mailto:Ignacio@gmail.com";
	}
}

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
}