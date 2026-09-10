const User = {
    username : "Dipesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function() {
        //console.log('Got user details from db');
        console.log(`Username : ${this.username}`)
        console.log(this)

    }
}

// console.log(user.username);
// user.getUserDetails();
// console.log(this)

function user(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }

    return this;
}

const userOne = new user("Dipesh",12,true);

const userTwo = new user("Deepanshu",13,false);
console.log(userOne.constructor);


