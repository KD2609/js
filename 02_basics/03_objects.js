// singleton

//object literals

const mySym = Symbol("Key1")

const jsUser = {
    name : "Dipesh",
    [mySym] : "myKey1",
    age : 18,
    location: "Ranikhet",
    email: "abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
jsUser.email = "def@gmail.com"

jsUser.greeting = function(){
    console.log("Hello JSuser")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JSUser ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())