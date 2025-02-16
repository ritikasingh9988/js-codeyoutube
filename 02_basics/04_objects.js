// const tinderuser = new Object() // singleton object
const tinderuser = {} // not singleton
tinderuser.id = "123abc"
tinderuser.name = "ritz"
tinderuser.isloggedin = falseconst regularuser = {
    email : "some@gmail.com"
    fullname: {
    userfullname: {
        firstname :"ritika",
        lastname : "singh"
    }
    }
}
console.log(regularuser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2} // problematic
constbj3 = Object.assign({},obj1,obj2) // static metho copies all enumerable own properties, {target nd source}
const obj3 = {...obj1, ...obj2}
const users = [
    {
        id : 1,
        email: "ritika@gmail.com"
    }, {
        id : 2
    }, {

    }
]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('islogged'));
console.log(obj3);


