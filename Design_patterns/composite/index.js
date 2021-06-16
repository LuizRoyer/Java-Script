const CatalogItem = require('./catalog.item')
const CatalogGroup = require('./catalog.group')


const boots = new CatalogItem('Leather Boots', 79.99)
const sneakers = new CatalogItem('Kicks', 39.99)
const flipFlops = new CatalogItem('California wook boots', 19.50)

const groupShoes = new CatalogGroup('Shoes and Such',
    [boots, sneakers, flipFlops])

const groupFood = new CatalogGroup('Food for while you try on clothes',
    [new CatalogItem('Milkshake', 5.99),
    new CatalogItem('potatoes Fries', 3.99),
    new CatalogItem('apple', 0.10)])

const keyChain = new CatalogItem('Key Chain', 0.65)

const catalog = new CatalogGroup('clothes and Food',
             [keyChain, groupShoes, groupFood])

             
console.log('boots total :', `${boots.total}`)
console.log('shoes total :', `${groupShoes.total}`)

boots.toString()
sneakers.toString()
groupShoes.toString()


catalog.toString()
console.log('catalog total :', `${catalog.total}`)