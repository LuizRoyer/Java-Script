const Store = require('./store')
const Shopper = require('./shopper')
const Mall = require('./mall')


let catsAndThings = new Store('Cats and Things')
let insAndOuts = new Store('Ins and Outs')

let bb = new Shopper('BB')
let cc = new Shopper('CC')
let dd = new Shopper('DD')
let aa = new Shopper('AA')


let valleyMall = new Mall()

catsAndThings.subscribe(bb)
catsAndThings.subscribe(dd)
catsAndThings.subscribe(aa)
catsAndThings.subscribe(valleyMall)

insAndOuts.subscribe(cc)
insAndOuts.subscribe(valleyMall)

catsAndThings.sale(20)
insAndOuts.sale(30)


console.log(valleyMall.sales)