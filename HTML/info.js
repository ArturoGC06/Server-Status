function tema(event){
	if( $( "body" ).hasClass( "claro" )) {
      $( "body" ).removeClass( "claro" );
	  $( "body" ).addClass( "oscuro" );
	  $( "p" ).removeClass( "claro" );
	  $( "p" ).addClass( "oscuro" );
	  $( "ul" ).removeClass( "claro" );
	  $( "ul" ).addClass( "oscuro" );
	  $( "label" ).removeClass( "claro" );
	  $( "label" ).addClass( "oscuro" );
    } else {
      $( "body" ).removeClass( "oscuro" );
		$( "body" ).addClass( "claro" );
      $( "p" ).removeClass( "oscuro" );
		$( "p" ).addClass( "claro" );
      $( "ul" ).removeClass( "oscuro" );
		$( "ul" ).addClass( "claro" );
      $( "label" ).removeClass( "oscuro" );
		$( "label" ).addClass( "claro" );
	}
}

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