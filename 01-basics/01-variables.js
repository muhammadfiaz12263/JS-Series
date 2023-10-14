const accountId = 12345;
let accountEmail = "myemail@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore";
let accountState;

//accountId=2; // Not Allowed

/*
Prefer not to use "var"
becose of isuue of block,  and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);
