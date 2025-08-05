const { v4: uuidv4 } = require('uuid');

class Calculator {
    constructor() {
        this.id = uuidv4();
    }
    #log = (value) => {
        console.log(`Calculation ID: ${this.id}`)
    }
    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        return value;
    }
    sub(num1, num2) {
        const value = num1 - num2
        this.#log(value)
        return value;
    }
    mul(num1, num2) {
        const value = num1 * num2
        this.#log(value)
        return value;
    }
    div(num1, num2) {
        const value = num1 / num2
        this.#log(value)
        return value;
    }
}

module.exports = Calculator