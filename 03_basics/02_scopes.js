let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}
console.log(a);

function one(){
    const username = "ritika"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // gives error
    two()
}
one()
if(true){
    const username = "ritika"
    if(username==="ritika"){
        const website = " youtube"
        console.log(username+website);
    }
    console.log(website); // gives error 
}
console.log(username); // gives error (out of scope)


console.log(addone(5)); // this woill not give error
function addone(num){ // method 1
    return num+1
}
addone(5)

addtwo(5) // gives error
const addtwo = function(num){ // method 2 // function declarerd and hold in a variable
    return num+2
}
addtwo(5)
