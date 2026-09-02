function sayMyName(){
    console.log("Dipesh")
}

// sayMyName()

function addTwoNumbers(num1,num2) {
     return num1 + num2
}

const result = addTwoNumbers(3,4)
console.log(result)

function loginUserMessage(username){
    if(username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Dipesh"))
console.log(loginUserMessage())

//REST operator
function calculateCarPrice(...num1) {
    return num1
}

console.log(calculateCarPrice(200,300,400,500))

