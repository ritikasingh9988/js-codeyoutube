const user = "ritika@gmail.com" // return true
const user = "" //  return dont have user
const user = [] // returns got user
if(user){
    console.log("got user");
} else {
    console.log("dont have user");
}
// falsy values
false, 0, -0,BigInt, 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

if(user.length === 0){
    console.log("Array is empty");
}
const emtyobj = {}
if(Object.keys(emtyobj).length === 0){
    console.log("object is empty");
}
 //false == 0  true
 // false == '' true
 //0 == '' true
 // logical operators are && , ||
 // nullish coalescing operator (??) : null undefined
 let val1;
 val1 = 5 ?? 10 // retrun jo phle ayega
 val1 = null ?? 10 // returns 10 if first val is null
 val1 = undefined ?? 10 // returns 10
 val1 = null ?? 10 ?? 20 // returns 10
 console.log(val1);
 // terniary operator
  //condition ? true : false
