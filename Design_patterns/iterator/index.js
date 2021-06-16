const InventoryItem = require('./inventoryItem')
const Iterator = require('./iterator')

require('readline').emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

console.log('Press any direction key..')

const inventory = new Iterator([

    new InventoryItem('Poles', 9.99),
    new InventoryItem('Skis', 799.99),
    new InventoryItem('Boots', 79.99),
    new InventoryItem('Burgers', 4.99),
    new InventoryItem('Fries', 2.99),
    new InventoryItem('Shake', 4.99),
    new InventoryItem('Jeans', 69.99),
    new InventoryItem('Shoes', 89.99),
    new InventoryItem('Shirt', 29.99),
])

process.stdin.on('keypress', (str, key) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0)

    switch (key.name) {

        case 'right':
            // process.stdout.write('right')
            inventory.next().writeLn()
            break

        case 'left':
            // process.stdout.write('left')
            inventory.prev().writeLn()
            break

        case 'down':
            // process.stdout.write('down')
            inventory.last().writeLn()
            break

        case 'up':
            // process.stdout.write('up')
            inventory.first().writeLn()
            break

        case 'c':
            if (key.ctrl) {
                process.exit()
            }

    }
})