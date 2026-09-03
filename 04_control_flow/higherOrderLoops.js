// for of

// const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num);
// }


// maps

// const map = new Map()
// map.set("IN","India")
// map.set("Fr","Frnace")

// console.log(map);

// for (const [key,value] of map){
//     console.log(key , ":-",value)
// }

// objects are non iteratable with for of loop


// const obj = {
//     js : "javascript",
//     cpp : "C++",
//     rb : "ruby",
//     swift : "swift by apple"
// }

// for (const key in obj){
//     console.log(`${key} shortcut is for ${obj[key]}`);
// }


// Higher order function

const coding = ["js","ruby","python","java","cpp"]

// coding.forEach(function (item) {
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})