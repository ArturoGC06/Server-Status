function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
window.onload = async function inicio(event) {
	console.log('Inicia')


	
/*	document.getElementById("indexid").classList.remove("index");
	console.log('Llega')
	document.getElementById("inicioid").classList.add("iniciobar");
	console.log('Aqui tb') */
	var ocultar = document.getElementById('principal')
	ocultar.style.visibility = 'hidden';
	$( "body" ).removeClass( "claro" );
	$( "body" ).addClass( "oscuro" );

	
	for (var i = 0 ; i < 100; i++) {
		var seconds = 0;
		
		window.scrollTo(0, 0)
		await sleep(60);
		var bar = document.getElementById('pgbar').style.width
		var progreso = parseInt(bar) + 1
		document.getElementById("pgbar").style.width = String(progreso).concat("","%")
		var contador = document.getElementById('pgbar').innerHTML
		var contadorInt = parseInt(contador) + 1
		document.getElementById("pgbar").innerHTML = String(contadorInt).concat("","%")
		}
	await sleep(140);
	document.getElementById('welcome').remove()
	ocultar.style.visibility = 'visible';
	$( "body" ).removeClass( "oscuro" );
	$( "body" ).addClass( "claro" );
	/* const ocultarpcarga = document.getElementsByClassName('iniciobar')[0];
	ocultar.style.visibility = 'hidden'; 

	

	ocultarinicio.style.visibility = 'show' */

}
