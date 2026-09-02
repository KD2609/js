// immediately invoked function

(function chai() {
    console.log(`DB connected`)
})();

((username) => {
    console.log(`DB connected TWO ${username}`)
})("Dipesh")

