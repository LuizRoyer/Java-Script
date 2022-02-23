// Objetos - POO

// Get and Set
const sequencia ={
	_valor:1,
	
	get valor(){return _valor++},
	set valor(valor){
		if(valor > this._valor)
			this._valor = valor
	}
}

// herança - cadeia de prototipos
const avo ={olhos:'verdes'}
const pai = {__proto__:avo , cabelo:'loiro'}
const filho ={__proto__:pai, altura:1.75}
//----------------------------------------------
filho.olhos // 'verdes'
const carro ={ velocidadeAtual:0 , velocidademaxima:200, velocidade(){return `${this.velocidadeAtual} Km/h` } }
const ferrari ={modelo:'f20' , velocidade(){return `${this.modelo} - ${super.velocidade()}`}}
Object.setPrototypeOf(ferrari,carro)

//----------------------------------------------
const pai ={ nome:'pedro', cabelo:'preto'}

const filha = Object.create(pai)
filha.nome='maria'

const filho2 = Object.create(pai,{
	nome:{value:'joao', writable:true , enumerable:true},
	altura:{value:1.75, writable:false , enumerable:true}}
)
//------------------------
class avo{ 
	constructor(sobrenome){
		this.sobrenome= sobrenome
	}
}

class pai extends avo{
	constructor(sobrenome, profissao){
		super(sobrenome)
		this.profissao = profissao
	}
}


















