const Shopper = require('./shopper')

let scout = new Shopper()
scout.addItemToList('camping knife')
scout.addItemToList('tent')
scout.addItemToList('backpack')
scout.addItemToList('map')
scout.addItemToList('glasses')

module.exports = scout
