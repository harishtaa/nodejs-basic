const { EventEmitter } = require('events')

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`kopi ${name} berhasil dibuat`)
}

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`)
}

// myEventEmitter.on('coffee-order', makeCoffee)
// myEventEmitter.on('coffee-order', makeBill)

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price)
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener)

myEventEmitter.emit('coffee-order', {name: 'Tubruk', price: 100000})