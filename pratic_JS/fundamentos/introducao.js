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

