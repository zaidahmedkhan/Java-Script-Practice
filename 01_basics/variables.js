const accountId = 12345;
let accountEmail = "test@gmail.com";
var accountPassword = "12345";
accountCity = "karachi";
let accountState;


/*

 const variables cant change after assigned,
 prefer not to use var becuase of issue in block scope and functional scope.


*/



accountEmail = "example@gmail.com";
accountPassword = "54321";
accountCity = "lahore";

// console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);
