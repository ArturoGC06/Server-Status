function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function inicio(event) {
	console.log('Inicia')
	for (var i = 0 ; i < 100; i++) {
		var seconds = 0;
		console.log(i)
		await sleep(50);
		var bar = document.getElementById('pgbar').style.width
		var progreso = parseInt(bar) + 1
		document.getElementById("pgbar").style.width = String(progreso).concat("","%")
		var contador = document.getElementById('pgbar').innerHTML
		var contadorInt = parseInt(contador) + 1
		document.getElementById("pgbar").innerHTML = String(contadorInt).concat("","%")
		}
}

