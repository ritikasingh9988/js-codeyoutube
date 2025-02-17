// this => current context
const user = {
    username: "ritika",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomemessage()
// user.username = "ritz"
// user.welcomemessage()
// function chai(){
//     let username = "ritika"
//     console.log(this.username); // undefined
// }
// chai();

const chai = () => { // arrow function
    let username = "ritika"
    console.log(this.username); // undefined
    console.log(this); //returns {}
}
chai()

const addtwo = (num1,num2) => { // curly braces use kiya to return keyword likhna pdega
    return num1+num2
}
// implicit return :
const addtwo = (num1,num2) =>  (num1+num2) // parenthesis likhe to return keyword ni likhna pdega
const addtwo = (num1,num2) => ({username: "ritika"})
console.log(addtwo(3,4));
const myarr = [2,5,3,7,8]
myarr.forEach()