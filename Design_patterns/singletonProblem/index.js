const logger = require('./logger')
const Shopper = require('./shopper')
const Store = require('./store')

logger.log('starting app ')

const bb = new Shopper('bb', 450)
const aa_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'glass',
        quantity: 50,
        price: 340
    },
    {
        item: 'black glass',
        quantity: 35,
        price: 760
    }
])

logger.log('finished config')

console.log(`${logger.count} logs total`)
logger.logs.map(log => console.log(`${log.message}`))