function calcularIMC(){
try{
		var formulario = document.getElementById("formulario");
	
		var kilos = +formulario.kilos.value;
		var metros = +formulario.metros.value;
		var centimetros = +formulario.centimetros.value;
		
		validarCampos(kilos, metros, centimetros);
		
		var altura = (metros *100  + centimetros)/100;
		var imc = kilos/(altura* altura);
		
		formulario.imc.value =imc.toFixed(2);
		alertarIMC(imc);	
	}catch(e){
		alert(e.toString());
	}
}

function alertarIMC(imc){
	
	if(imc<20){
		alert("Abaixo do Peso");
	}else if( imc <= 25){
		alert("Peso ideal");
	}else if(imc <= 30){
		alert("Sobrepesso");
	}else if( imc <=40){
		alert("Obesidade Severa");
	}else if(imc<= 50){
		alert("Obesidade Morbida");
	}else{
		alert("Super Obesidade");
	}
}

function validarCampos(kilos, metros, centimetros){

	if(kilos<1){ throw "Informação Kiloes Invalida";}
	
	if(metros<1){ throw "Informação Metros Invalida";}
	
	if(centimetros<1){ throw "Informação Centimetros Invalida";}
	
}

