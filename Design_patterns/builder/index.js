const PersonBuilder = require('./person.builder')

//Employees
const sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build()
const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build()
const phil = new PersonBuilder('Phil').makeEmployee().build()
 

//Shoppers
const charles= new PersonBuilder('Charles').withMoney(500).withList(['jeans','sunglasses']).build()
const ana= new PersonBuilder('Ana').withMoney(500).build()


console.log(sue.toString())
console.log(charles.toString())