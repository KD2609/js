// // singleton -> const tinderUser = new Object()

// // non singleton --> const tinderUser = {}

// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Dipesh"
// tinderUser.isLoggedIn = false
// // console.log(tinderUser)

// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         userFullname : {
//             firstName: "Dipesh",
//             lastName:"Kandpal"
//         }
//     }
// }

// console.log(regularUser.fullname?.userFullname.firstName)

// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "a", 4 : "b"}

// // const obj = {obj1 ,obj2}

// const obj = Object.assign({},obj1,obj2)
// console.log(obj)

// const obj3 = {...obj1,...obj2}
// console.log(obj3)


// destructuring

const course = {
    courseName : "Js",
    price: "999",
    courseInstructor : "Dipesh"
}

const {courseInstructor : instructor} = course
console.log(instructor)


// {
//     "name" : "Dipesh",
//     "courseName" : "JS in Hindi",
//     "price" : "990"

// }
