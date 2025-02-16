// objects declare ke do method ek literal or ek constructors
// singleton
// literals ki tarah declare krte hain to singleton ni bnta h
// object literals
// object.create // constructors
const mysym = Symbol("key1")
const jsuser = {
    name : "ritika", // key and value
    [mysym]: "mykey1", // symbol syntax
    age : 18,
    location : "jaipur",
    email : "ritikas99@gmail.com",
    isloggedin: false
}
console.log(jsuser.email); // wrong method
console.log(jsuser["email"])
console.log(jsuser.mysym);
jsuser.email = "ritz@gmail.com"
// Object.freeze(jsuser) // cant be changed
jsuser.email = "ritz56@gmail.com"
console.log(jsuser);
jsuser.greeting = function(){
    console.log("helllo js user");
}
jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting); // returns undefined
console.log(jsuser.greeting()); // returns not a function
console.log(jsuser.greetingtwo());
