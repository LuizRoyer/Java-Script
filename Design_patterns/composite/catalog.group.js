class CatalogGroup {

    constructor(name, composites = []) {
        this.name = name
        this.composites = composites
    }

    get total() {
        return this.composites.reduce((total, nextItem) => total + nextItem.total, 0)
    }

    toString() {
        console.log(`\nGroup name: ${this.name}`)
        this.composites.forEach(item => item.toString())
    }
}

module.exports = CatalogGroup