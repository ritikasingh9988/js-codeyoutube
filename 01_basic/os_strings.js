const name = "ritika"
const repo = 50
console.log(name+repo+"value"); // dont use this
console.log(`hello my name is ${name} and my repo is ${repo}`);
const gamename = new String('ritika')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));
const newString = gamename.substring(0,4);
console.log(newString);
const anotherstring = gamename.slice(-8,4)
console.log(anotherstring)
const newstringone = "  ritika  "
console.log(newstringone);
console.log(newstringone.trim()); // works on whitespace not new lines
const url = "https://ritika.com/ritika%20singh"
console.log(url.replace('%20', '-'));
console.log(url.includes('ritika'));
console.log(url.includes('sundar'));
console.log(gamename.split('-'));3333333333333333333333