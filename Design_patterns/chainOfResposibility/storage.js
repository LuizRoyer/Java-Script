class Storage {

    constructor(name, inventory = [], deliveryTime = 0) {
        this.name = name
        this.inventory = inventory
        this.deliveryTime = deliveryTime

        this.next = null
    }

    lookInInventory(itemName) {
        let index = this.inventory.map(item => item.name).indexOf(itemName)
        return this.inventory[index]
    }

    setNext(storage) {
        this.next = storage
    }

    find(itemName) {
        let found = this.lookInInventory(itemName)

        if (found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime: this.deliveryTime === 0 ? 'now' : `${this.deliveryTime} day(s)`
            }
        } else if (this.next) {
            return this.next.find(itemName)
        } else {
          return  `we dont carry ${itemName}`
        }
    }
}

module.exports = Storage