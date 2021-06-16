class CatalogItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    get total() {
        return this.price
    }

    toString() {
        console.log(`nome:${this.name} preço:R$ ${this.price}`)
    }

}

module.exports = CatalogItem