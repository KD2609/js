const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3])

const newArr = marvel_heros.concat(dc_heros)
console.log(newArr)

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)