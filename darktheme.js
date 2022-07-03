var matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(matched){
      $( "body" ).removeClass( "claro" );
	  $( "body" ).addClass( "oscuro-auto" );
	  $( "p" ).removeClass( "claro" );
	  $( "p" ).addClass( "oscuro" );
	  $( "ul" ).removeClass( "claro" );
	  $( "ul" ).addClass( "oscuro" );
	  $( "label" ).removeClass( "claro" );
	  $( "label" ).addClass( "oscuro" );
	  $( "h1" ).removeClass( "claro" );
	  $( "h1" ).addClass( "oscuro" );
	console.log('Modo oscuro activado');
}
else{
	      $( "body" ).removeClass( "oscuro" );
		$( "body" ).addClass( "claro-auto" );
      $( "p" ).removeClass( "oscuro" );
		$( "p" ).addClass( "claro" );
      $( "ul" ).removeClass( "oscuro" );
		$( "ul" ).addClass( "claro" );
      $( "label" ).removeClass( "oscuro" );
		$( "label" ).addClass( "claro" );
      $( "h1" ).removeClass( "oscuro" );
		$( "h1" ).addClass( "claro" );
	console.log('Modo claro activado');
}

function tema(event){
	if( $( "body" ).hasClass( "claro" )) {
      $( "body" ).removeClass( "claro" );
      $( "body" ).removeClass( "claro-auto" );
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
      $( "body" ).removeClass( "oscuro-auto" );
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