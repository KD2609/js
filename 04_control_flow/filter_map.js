const coding = ["js","ruby","python","java","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values)

// const myNums = [1,2,3,4,5,6,7]
//  const newNums = myNums .filter( (num) => (num > 5))
// const newNums = myNums.filter( (num) => {
//     return num > 5
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })
//  console.log(newNums)

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums
//                 .map( (num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums);



// reduce

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval
// },3)

const myTotal = myNums.reduce( (acc,cur) => acc + cur ,0)

console.log(myTotal)
