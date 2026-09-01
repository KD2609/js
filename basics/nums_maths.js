const score = 400
const balance = new Number(100)
console.log(balance)
console.log(score)

console.log(typeof balance.toString().length)
console.log(balance.toFixed(4))

const otherNumber = 123.5646
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math)

const  min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)