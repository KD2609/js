// let myName = "Dipesh                                                       "
// console.log(myName.length)

// let myHeros = ["Thor","SpiderMan"]

// let heroPower = {
//     thor : "Hammer",
//     SpiderMan : "Sling",

//     getSpiderPower : function () {
//         console.log(`Spidy power is ${this.SpiderMan}`);
//     }
// }

// Object.prototype.dipesh = function() {
//     console.log(`dipesh is present in all objects`);
// }

// heroPower.dipesh();
// myHeros.dipesh();

// Array.prototype.heyDipesh = function() {
//     console.log(`Dipesh says Hello`);
// }

// heroPower.heyDipesh();
// myHeros.heyDipesh();


//inheritance

// const user = {
//     username : "Dipesh",
//     email : "abc@example.com"
// }

// const teacher = {
//     makeVideo : true
// }

// const teachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment : "JS Assignment",
//     fullTime : true,
//     __proto__:teachingSupport
// }

// teacher.__proto__ = user;

// modern syntax
// Object.setPrototypeOf(teachingSupport,teacher);

let anotherUsername = "Dipesh  "
String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();