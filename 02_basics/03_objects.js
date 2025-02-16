// objects declare ke do method ek literal or ek constructors
// singleton
// literals ki tarah declare krte hain to singleton ni bnta h
// object literals
// object.create // constructors
const mysym = Symbol("key1")
const jsuser = {
    name : "ritika", // key and value
    [mysym]: "mykey1",
    age : 18,
    location : "jaipur",
    email : "ritikas99@gmail.com",
    isloggedin: false
}
console.log(jsuser.email); // wrong method
console.log(jsuser["email"])
console.log(jsuser.mysym);
