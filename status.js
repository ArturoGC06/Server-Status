/* function comprobarip(event) {
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
	window.setTimeout(function(){
	}, 30);
} */
 
window.onload = function info(event){
	$("#alerta-error").hide();
	$("#alerta-error-ip").hide();
	$("#alerta-funciona").hide();
	$('#alerta-info').hide();	
	} 

function comprobarip(event) {
		var ipUrl = document.getElementById('ip').value //.split('.')	
		var ip = document.getElementById('ip').value.split('.')
		if (ipUrl.match(/[a-z]/i) && (ipUrl.includes("."))){
			console.log('Url')
			ipUrl = "http://" + ipUrl
			var settings = {
				cache: false,
				dataType: "jsonp",
				async: true,
				crossDomain: true,
				url: ipUrl,
				method: "GET",
				headers: {
				accept: "application/json",
				"Access-Control-Allow-Origin": "*",
				},

				statusCode: {
				200: function (response) {
					console.log("Status 200: Page is up!");
					$("#alerta-funciona").fadeTo(2000, 500).slideUp(500, function(){
					$("#alerta-funciona").slideUp(500);	
				   });
				},
				404: function (response) {
					console.log("Status 400: Page is down.");
					$("#alerta-error").fadeTo(2000, 500).slideUp(500, function(){
					$("#alerta-error").slideUp(500);	
				  });
				},
				0: function (response) {
					console.log("Status 0: Page is down.")
					$("#alerta-error").fadeTo(2000, 500).slideUp(500, function(){
					$("#alerta-error").slideUp(500);	
				  });
				},
				},
			}; 

				try{
					$.ajax(settings).done(function (response) {
						console.log(response);
					});
				}
				catch(error){
					console.log("Page is down")
				} 
			return true;
			} 
			
		if (ip.length == 4){
			for (var i = 0; i < ip.length;i++) {
				var ipd = parseInt(ip[i]);    
				if ((ipd > 255) || (ipd < 0)) {
					console.log("No es váildo")
					$("#alerta-error-ip").fadeTo(2000, 500).slideUp(500, function(){
					$("#alerta-error-ip").slideUp(500);	
				  });
					return false;
				}
				console.log("Es válido")
				$("#alerta-info").fadeTo(2000, 500).slideUp(500, function(){
				$("#alerta-info").slideUp(500);	
			      });
				 }
				
			var urlnum = document.getElementById('ip').value
				urlnum = "http://" + urlnum;
				var settingsnum = {

					// Defines the configurations
					// for the request
					cache: false,
					dataType: "jsonp",
					async: true,
					crossDomain: true,
					url: urlnum,
					method: "GET",
					headers: {
					accept: "application/json",
					"Access-Control-Allow-Origin": "*",
					},

					// Defines the response to be made
					// for certain status codes
					statusCode: {
					200: function (responsenum) {
						console.log("Status 200: Page is up!");
						$("#alerta-funciona").fadeTo(2000, 500).slideUp(500, function(){
					    $("#alerta-funciona").slideUp(500);	
				     });
					},
					404: function (responsenum) {
						console.log("Status 400: Page is down.");
						$("#alerta-error").fadeTo(2000, 500).slideUp(500, function(){ //cuadrado de info
					    $("#alerta-error").slideUp(500);	
				     });
					},
					0: function (responsenum) {
						console.log("Status 0: Page is down.")
						$("#alerta-error").fadeTo(2000, 500).slideUp(500, function(){
					    $("#alerta-error").slideUp(500);	
				     });
					},
					}, 
				}; 

				// Sends the request and observes the response
					try{
						$.ajax(settingsnum).done(function (responsenum) {
							console.log(responsenum);
						});
					}
					catch(error){
						console.log("Page is down")
					}
				}
					else{
						$("#alerta-error-ip").fadeTo(2000, 500).slideUp(500, function(){
						$("#alerta-error-ip").slideUp(500);
						});
						}
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
		window.location.href = "./inicio.html";
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
 

/*
function pingURL() {

// The custom URL entered by user
var URL = $("#url").val();
var settings = {

	// Defines the configurations
	// for the request
	cache: false,
	dataType: "jsonp",
	async: true,
	crossDomain: true,
	url: URL,
	method: "GET",
	headers: {
	accept: "application/json",
	"Access-Control-Allow-Origin": "*",
	},

	// Defines the response to be made
	// for certain status codes
	statusCode: {
	200: function (response) {
		console.log("Status 200: Page is up!");
		window.alert('La pagina esta operativa')
	},
	404: function (response) {
		console.log("Status 400: Page is down.");
		window.alert('La pagina esta caida')	
	},
	0: function (response) {
		console.log("Status 0: Page is down.")
		window.alert('La pagina no existe');
	},
	},
};

// Sends the request and observes the response
	try{
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	}
	catch(error){
		console.log("Page is down")
	}

} */

