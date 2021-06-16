const Shopper = require('./shopper')
const { InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem } = require('./inventory.item')

const bb = new Shopper('BB', 5000)

const walkman = new InventoryItem('walkman', 29.50)
const necklace = new InventoryItem('necklace', 9.50)

const goldNecklace = new GoldenInventoryItem(necklace)
const diamondNecklace = new DiamondInventoryItem(goldNecklace)

const diamondWalkman = new DiamondInventoryItem(walkman)

bb.purchase(diamondNecklace)
bb.purchase(diamondWalkman)

bb.printStatus()
