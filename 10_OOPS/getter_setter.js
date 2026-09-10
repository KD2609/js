class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this.__email.toUpperCase();
    }

    set email(value) {
        this.__email = value;
    }

    get password() {
        return `${this._password}hitesh`;
    }

    set password(value) {
        this._password = value;
    }
}

const hitesh = new User("h@hitesh.ai", "abc");

console.log(hitesh.email);