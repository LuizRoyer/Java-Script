const Store = require('./store')
const inventory = require('./inventory')

const skiShop = new Store('Steep and Deep', inventory)

const searchitem = 'asasis'
const results = skiShop.find(searchitem)

console.log(results)