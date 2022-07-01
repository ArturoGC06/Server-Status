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
	  $( "h1" ).removeClass( "claro" );
	  $( "h1" ).addClass( "oscuro" );
    } else {
      $( "body" ).removeClass( "oscuro" );
		$( "body" ).addClass( "claro" );
      $( "p" ).removeClass( "oscuro" );
		$( "p" ).addClass( "claro" );
      $( "ul" ).removeClass( "oscuro" );
		$( "ul" ).addClass( "claro" );
      $( "label" ).removeClass( "oscuro" );
		$( "label" ).addClass( "claro" );
      $( "h1" ).removeClass( "oscuro" );
		$( "h1" ).addClass( "claro" );
	}
}

function botonentrar (event) {
	window.location.href = "./login.html";
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