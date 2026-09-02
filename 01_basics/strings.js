const name = "dipesh"
const repoCount = 3

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('Dipesh- Kandpal')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.indexOf('K'))

const newString = gameName.substring(0,6)
console.log(newString)

console.log(gameName.split('-'))