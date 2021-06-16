arredondar para cima
Math.ceil(6.1) // 7

arredondar para baixo
Math.floor(6.1) // 6

//variavel global
global.NomeVariavel='valor'

//para acessar variavel global
global.NomeVariavel

this.class Pessoa ===  export class Pessoa

-------------------------------------------------------------
Number.prototype.entre =function(inicio, fim){
	return this >= inicio && this <=fim
}

const imprimirResultado = function(nota){
	
	if(nota.entre(9,10)){
		console.log('Quadro de Honra')
	}else if(nota.entre(7,8.99)){
		console.log('Aprovado')
	}else if(nota.entre(0,6.99)){
		console.log('Reprovado')
	}else{
		console.log('Nota inválida')
	}
}

imprimirResultado(9.5)
imprimirResultado(7.5)
imprimirResultado(4.5)
imprimirResultado(14)
-------------------------------------------------------------------

const Resultado = function(nota){
	
	switch(Math.floor(nota)){
		
		case 10: case 9:
			  console.log('Passou com Merito')
			  break
		
		case 8: case 7:
			  console.log('Aprovado')
			  break
			  
		case 6: case 5: case 4:
				console.log('Reprovado')
			  break			 
	
		default:
			 console.log('Nota inválida')
			  

    } 
		
}

Resultado(9)
Resultado(4)
Resultado(0)
Resultado(7.5)

--------------------------------------------------------------

notas=[5,6,8,9,6.5]
for( i in notas){
	console.log(i,'=', notas[i]) // 1 = 5
}





















