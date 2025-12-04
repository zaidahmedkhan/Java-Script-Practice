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
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);
console.log(myArr.splice(1,3));
console.log("c", myArr);

