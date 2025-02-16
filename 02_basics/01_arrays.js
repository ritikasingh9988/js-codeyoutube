const myarr = [0,1,2,3,4,5]
console.log(myarr[0]);
const myarr2 = new Array(1,2,3,4,5)
myarr.push(6)
myarr.pop()
// myarr.unshift(9) // 9 added in start of arr
// myarr.shift() // 9 removed
console.log(myarr.includes(9));
console.log(myarr.indexOf(9)); // return -1
const newarr = myarr.join() // type of changed
console.log(newarr); // string 
console.log(myarr);
// slice // splice
console.log("A", myarr);
const myn1 = myarr.slice(1,3); // range excluded
console.log(myn1);
console.log("B " , myarr);

const myn2 = myarr.splice(1,3); // range included
console.log("C " , myarr);
console.log(myn2);
//slice will not remove anything from original array
//splice will remove Array(1,3)



