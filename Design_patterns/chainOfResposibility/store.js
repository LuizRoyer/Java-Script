const Storage = require('./storage')

class Store {

    constructor(name, inventory = []) {
        this.name = name

        const floor = new Storage('store floor', inventory.floor)
        const backroom = new Storage('store backroom', inventory.backroom)
        const localStore = new Storage('nearby store', inventory.localStore, 1)
        const warehouse = new Storage('warehouse ', inventory.warehouse, 5)

        floor.setNext(backroom)
        backroom.setNext(localStore)
        localStore.setNext(warehouse)

        this.Storage = floor
    }

    find(itemName) {
        return this.Storage.find(itemName)
    }
}

module.exports = Store