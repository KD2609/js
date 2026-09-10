class User {
    constructor(email,password) {
        this.email = email;
        this.password = password
    }
}

const dipesh = new User("Dipesh@ai.com","123")
console.log(dipesh.password)