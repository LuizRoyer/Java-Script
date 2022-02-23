// Arrays
const  frutas =['banana', 'maca','abacaxi','pera']

frutas.pop() // remove ultimo elemento
frutas.shift() // remove primeiro elemento

frutas.unshift('laranja')// adiciona no 1 da fila

frutas.splice(2,0,'uva','mamao')// adiciona na posicao 2 ,novas frutas
frutas.splice(3,1)// remove o indice 3 
frutas.splice(3,3)// remove 3 elementos apartir do indice 3

// reverter a ordem de uma String
const reverse = str => str.split('').reverse().join('');
console.log(reverse('javascript'));
----------------------------------------
tpircsavaj

// validar se é par 
const isEven = num => num % 2 === 0;
console.log(isEven(2));
---------------------------------
true


//write a program that prints the numbers from 1 to 100.
//But for multiples of three, print “Fizz” instead of the number,
//and for the multiples of five, print “Buzz”.
for(i=0;++i<10;console.log(i%5?f||i:f+'Buzz'))f=i%3?'':'Fizz'

//Remove HTML Tags
"<b>A</b>".replace(/<[^>]+>/gi, "");

// sortear um numero de 1 a 6
const throwdice = () => ~~ (Math.random () * 6) + 1;

