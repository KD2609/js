let myDate = new Date()

console.log(myDate);

console.log(myDate.toString())
console.log(typeof myDate)

console.log(Date.now())
console.log(myDate.getTime())


console.log(myDate.toLocaleString('default',{
    weekday:"long"
    
}))