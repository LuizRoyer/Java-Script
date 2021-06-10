//  ctrl + alt + n  roda o arquivo js
/*
    codigo de mais linhas
*/
const total = 22
console.log(total.toString(2))//converte o retorno em binario

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

const palavra = 'oi mundo'

pegarLetra = palavra.charAt(4) // pega a letra na posicao 4

let concatenar = ' hello'.concat(palavra).concat('!')
let substituirTodasLetras = palavra.replace(/\w/g, 'e')
let substituirNoIndex = palavra.replace(0, 'O')

const numeros = [1, 2, 4, 5, 6, 5]
numeros.pop()// exclui o ultimo elemento
delete numeros[0] //exclui o item no index

let items = ["tea", "coffee", "milk"];
// remove elementos da matriz de itens começando da posição 0 até o comprimento da matriz 
items.splice(0, items.length);
items.length = 0; // para esvaziar o Array

// Verificação de múltiplas condições
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) { 
    // Execute some code 
}
// Verificação de múltiplas condições
if ([1, 'one', 2, 'two'].includes(value)) { 
    // Execute some code 
}

// repetir uma string 5x
'Hello '.repeat(5);

//Encontre o número máximo e mínimo na matriz
const arr = [2, 8, 15, 4]; 
Math.max(...arr); // 15 
Math.min(...arr); // 2

//O reduce()método percorre cada elemento e retorna um único valor.
const numbers = [5, 8, 20, 35, 10, 4];

const sum = numbers.reduce((total, value) => {
    return total + value;
});

console.log(sum); // 82

// filtrar numeros pares de um array
const numbers = [5, 6, 9, 32, 14];

const even = numbers.filter((number) => {
     return number % 2 === 0;
});

console.log(even); // [6, 32, 14]




