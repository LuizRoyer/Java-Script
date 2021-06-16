class Shopper {
    constructor(name, money) {
        this.name = name
        this.money = money
    }

    payDay(value){
         this.money+=value
    }
    
    toString(){
        return `name: ${this.name}, money: ${this.money}`
    }
}

module.exports = Shopper