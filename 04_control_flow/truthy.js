// const userEmail = "dipesh@gmail.com"

// if(userEmail){
//     console.log("Got user Email")
// }
// else{
//     console.log("Dont have user email")
// }

// falsy values
// false ,0 ,- 0,BigInt 0n,"",null,undefined,NaN


//truthy values
// "0" , "false","null", " ",[],{}, function(){}

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty")
// }

// Nullish Coalescing operator (??) : null, undefined

let val;
//val = 5 ?? 10;

val = null ?? 10;

console.log(val)


// ternary operator

const iceTeaPrice = 100;
iceTeaPrice >=90 ? console.log("more than 80") : console.log("less than 80")
