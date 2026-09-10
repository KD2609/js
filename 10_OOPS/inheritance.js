class User {
    constructor(Username) {
    this.Username = Username
    }

    logMe () {
        console.log(`USERNAME id ${this.Username}`)
    }
}

class Teacher extends User {
    constructor(Username,email,password) {
        super(Username)
        this.email = email
        this.password = password
    }
}