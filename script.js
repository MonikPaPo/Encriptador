function encriptar(){
	var texto = document.getElementById("textoencriptador").value.toLowerCase();

	var textoEncriptado = texto.replace(/e/igm,"enter");
	var textoEncriptado = textoEncriptado.replace (/o/igm,"ober");
	var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
	var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
	var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

	document.getElementById("encriptado").innerHTML = textoEncriptado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}


function desencriptar(){
	var texto = document.getElementById("textoencriptador").value.toLowerCase();

	var textoEncriptado = texto.replace (/enter/i,"e");
	var textoEncriptado = textoEncriptado.replace (/ober/i,"o");
	var textoEncriptado = textoEncriptado.replace (/imes/i,"i");
	var textoEncriptado = textoEncriptado.replace (/ai/i,"a");
	var textoEncriptado = textoEncriptado.replace (/ufat/i,"u");

	document.getElementById("encriptado").innerHTML = textoEncriptado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}


function copiado(){

	var contenido = document.querySelector("#encriptado")
	contenido.select();
	document.execCommand("copy");
	alert("Copiado")
}