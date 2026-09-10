function User(email,password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this,'email',{
        set : function(value) {
            this._email = value;
        },
        get : function() {
            return this._email.toUpperCase();
        }
        
    })
}

const chai = new User("Chai@example.com","Chai");
console.log(chai.email);
chai.email = "abc@gmail.com";
console.log(chai.email);
