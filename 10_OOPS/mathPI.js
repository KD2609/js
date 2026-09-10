// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

const chai = {
    name : "ginger chai",
    price :250,
    isAvailable : true
}


Object.defineProperty(chai,'name',{
    Writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


