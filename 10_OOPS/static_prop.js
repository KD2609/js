class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const Dipesh = new User('Dipesh')
// console.log(Dipesh.createId())
console.log(User.createId());