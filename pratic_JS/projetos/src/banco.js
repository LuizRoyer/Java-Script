const next = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

function save(product) {
    if (!product.id) {
        product.id = next.id
    }

    products[product.id] = product
    return product
}

function getProduct(id) {
    //caso nao encontre volta objeto vazio
    return products[id] || {}
}

function getProducts() {
    return Object.values(products)
}

function remove(id) {
    delete products[id]
}

module.exports = { save, getProduct, getProducts, remove }