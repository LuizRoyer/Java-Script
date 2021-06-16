class InventoryItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    writeLn() {
        process.stdout.write(`${this.name} preço :R$ ${this.price} `)
    }
}

module.exports = InventoryItem