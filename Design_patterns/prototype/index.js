const scout_prototype = require('./scout_prototype')

let bb = scout_prototype.clone()
bb.name = ' BB Banks'
bb.addItemToList('slingshot')

let eve = scout_prototype.clone()
eve.name = 'Eve Banks'
eve.addItemToList('reading light')

console.log(`${bb.name} : ${bb.shoppingList}`)
console.log(`${eve.name} : ${eve.shoppingList}`)