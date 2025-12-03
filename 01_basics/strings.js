const name = "zaid";
const repoCount = 50;


console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   // string interpolation

const gameName = new String("zaid ahmed");

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,6);
console.log(anotherString);


const trimString = "   zaid   ";
console.log(trimString);
console.log(trimString.trim());

const url = "www.zaidahmedkhan.com"
console.log(url.replace('ahmed', 'AHMED'));










