const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
// marvel.push(dc) // arr inside arr
// console.log(marvel);
//console.log(marvel[3][1]);
// const all = marvel.concat(dc)
// console.log(all);
const allnew = [...marvel, ...dc]
console.log(allnew);

const arr2 = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const realarr2 = arr2.flat(Infinity)
console.log(realarr2);
console.log(Array.isArray("ritika")); // return false
console.log(Array.from("ritika")); // converts in array
console.log(Array.from({name: "ritika"})); // returns empty arr
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); 
