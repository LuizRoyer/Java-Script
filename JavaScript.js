Funções e Metodos auxiliares das Variaveis 

--> STRING
//Retorna o tamanho de uma string
const Text ='Teste'.lenght;

//Retorna um array quebrando a string por um delimitador
const Text ='aaaaaaaaxbbbbbbbb'.Split('x');

//Busca por um valor e substitui por outro
const Text='texto'.replace('xt','_');

//Retorna a "fatia" de um valor
const Text ='Texto'.slice(-1);

//Retorna a primeira letra menos a ultima
const Text ='Teste'.slice(0,-1);

// Retorna a palavra da segunda letra em diante
const Text ='Texto'.slice(1);

//Retorna N caracteres apartir de uma posição
const Text = 'Testo'.substring(1,2);

--> NUMEROS
//Retorna número com casas decimais
const number.toFixed(2);

//Transforma uma string em float
parseFloat('13,22');

Transforma uma string em Int
parseInt('99');

--> OBJECT

// Retorna as chaves do objeto
Object.keys(Carro);

//Retorna o valor das propriedades
Object.values(Carro)

--> Array
Pessoas[];
const idades = Pessoas.filter(perspn =>person.idade %2 ===0) // filtra todos as pessoas que tem idade parseFloat
				.reduce(age,person)=>{ // transforma o objeto em um numerico
				age +=person.idade; 
				return age},0);
				
--> TERNARIO
Condicao ? Verdadeiro: Falço
				
--> SWITCH
switch(fruta){
	case 'banana':
		console.log('R$ 3,00kg');
	[break;]
	case 'mamão':
	case 'pera':
		console.log('R$ 2,00 kg');
	[break;]
	default:
		console.log('Produto Não Cadastrado');
	[break;]
	}				
				
	
--> Prototipos

function Pessoa(name){
this.name = name;
}

const p = new Pessoa('Pedro')	

-->HERANÇA prototipe

function Animal(qtdPatas){
this.qtdPatas= qtdPatas;

}

function Cachorro(raca){
Animal.call(this.4);

this.raca= raca;
}				
				
	
const pug = new Cachorro('Mini')	
				
	
-->CLASSE

class Pessoa{
contructor(nome){
	this.nome=nome
 } 
}
				
				
--> HERANÇA CLASSE

class PessoaFisica extends Pessoa{
  contructor(name,cpf){
	super(name);
	this.cpf = cpf;
	}			
}				
				
--> Encapsulamento
function Pessoa(name){
var = name;

	Object.defineProperty(this,'name',{
	get:function(){
		return name;},
	set:function(value){
	name=value;
	}
	});
}

--> STATIC

function Pessoa(){}

Pessoa.walk =function(){
console.log('Andando...');
}			
				
class Animal{
static walk(){
console.log('andando');
}}

Person.walk();
Animal.walk();				


-- Arrays

const Pessoas = Array of('pedro','juca','ze');

--> Adicionar elemento no Array devolve quantidade de elementos
const frutas =['banana','abacaxi'];

frutas.push('mamão);

--> Remover o ultimo elemento do Array
frutas.pop();// retorna o item removido

-->adiciona item no inicio
frutas.unshift('laranja');

--> shift remove no inicio
frutas.shift();

--> concatenar
const feira =['arroz','feijao'];

feira.concat(frutas)

--> pegar uma parte do Array
frutas.slice(0,1);

--> pegar os itens de tras para frente

frutas.slice(-2);

// retorna um novo array com a soma dos valores *2
array.map(value =>values*2)

--> percorre o Array args e soma todo os valores
function Soma(...args){
	return args.reduce((acc,value)=> acc+value, 0);
}

console.log(Soma(5,5,3,2,5);



























				
				
				
				
				
				
				
				
				
				
				
