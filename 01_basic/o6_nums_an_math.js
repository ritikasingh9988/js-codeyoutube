const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2)); // 2point after decimal
const othernumber = 23.896
console.log(othernumber.toPrecision(3)); //between 1-21 string
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //insert commas

// maths
// by default library
console.log(Math);
console.log(Math.abs(-4)); // neg to pos
console.log(Math.round(4.3)); // roundoff
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random()); // everytime value between 0 nd 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1); // to avoid math.floor in 0.1 type cases

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min);

 