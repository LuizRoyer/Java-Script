const userFactory = require('./user.factory')

const bb= userFactory('BB Banks', 100)
var  luiz= userFactory('Luiz ', 100, 'employee','this and that')

luiz.payDay(100)

console.log(bb.toString())
console.log(luiz.toString())