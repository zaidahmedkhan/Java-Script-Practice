const myArr = [0, 1, 2, 3, 4, 5, 6];
const myHeroes = ['xyz', 'abc', 'tsd'];
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArr[1]);

// array methods

myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(3));


console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);
console.log(myArr.splice(1, 3));
console.log("c", myArr);

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][2]);


const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

const flat_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];

console.log(flat_array.flat(Infinity));


console.log(Array.isArray("Zaid"));
console.log(Array.from("Zaid"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


