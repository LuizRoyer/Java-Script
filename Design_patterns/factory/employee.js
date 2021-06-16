
class Employee {
    constructor(name, money = 0, employer) {
        this.name = name
        this.money = money
        this.employer = employer
    }
    toString(){
        return `name: ${this.name}, money: ${this.money}, employee: ${this.employee}`
    }
}


module.exports = Employee