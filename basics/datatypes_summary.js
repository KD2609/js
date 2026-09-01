// premtive datatypes

// 7 types : String , number,Boolean,null,undefined,Symbol,BigInt

//Refrence (non Premitive) : Array,Objects,Functions

const score =  false
const ScoreValue = 100.3

const isLoggedIn  = false;
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//Array
const heros = ["Iron Man","Thor"]

let obj = {
    name : "Dipesh",
    age : 22
}

const myFunction = function(){
    console.log("Hello World")
}