const user = {
    username : "Dipesh",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // {} --> vs code  ,browser--> Window

const chai = () => {
    let username = "Dipesh"
    console.log(this.username)
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2)

// console.log(addTwo(3,4))

const addTwo = (num1,num2)  => ({usermae : "Dipesh"})
console.log(addTwo(2,3))
