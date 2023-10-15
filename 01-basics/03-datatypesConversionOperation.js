let score = 33;
let valueInNumber = Number(score);
// console.table([score,valueInNumber, typeof(score), typeof valueInNumber]);

// score = "33";
// valueInNumber = Number(score);
// console.table([score,valueInNumber, typeof(score), typeof valueInNumber]);

// score = "33abc";
// valueInNumber = Number(score);
// console.table([score,valueInNumber, typeof(score), typeof valueInNumber]);

// score = "abc";
// valueInNumber = Number(score);
// console.table([score,valueInNumber, typeof(score), typeof valueInNumber]);

// score = null;
// valueInNumber = Number(score);
// console.table([score,valueInNumber, typeof(score), typeof valueInNumber]);

// score = undefined;
// valueInNumber = Number(score);
// console.table([score,valueInNumber, typeof(score), typeof valueInNumber]);

// score = true;
// valueInNumber = Number(score);
// console.table([score,valueInNumber, typeof(score), typeof valueInNumber]);


/*
"33" => 33 (number)
"33abc" =>  NaN (number)
"abc" =>  NaN (number)
null =>  0 (number)
undefined =>  NaN (number)
true =>  1 (number)
*/



// let boolVar = 1;
// valueInBool = Boolean(boolVar);
// console.table([boolVar,valueInBool, typeof(boolVar), typeof valueInBool]);

// boolVar = 0;
// valueInBool = Boolean(boolVar);
// console.table([boolVar,valueInBool, typeof(boolVar), typeof valueInBool]);

// boolVar = "";
// valueInBool = Boolean(boolVar);
// console.table([boolVar,valueInBool, typeof(boolVar), typeof valueInBool]);

// boolVar = "faizy";
// valueInBool = Boolean(boolVar);
// console.table([boolVar,valueInBool, typeof(boolVar), typeof valueInBool]);

// boolVar = null;
// valueInBool = Boolean(boolVar);
// console.table([boolVar,valueInBool, typeof(boolVar), typeof valueInBool]);

// boolVar = undefined;
// valueInBool = Boolean(boolVar);
// console.table([boolVar,valueInBool, typeof(boolVar), typeof valueInBool]);


/*
1 => true (boolean)
0 =>  false (boolean)
"" =>  false (boolean)
"faizy" =>  true (boolean)
null =>  false (boolean)
undefined =>  false (boolean)
*/


let strVar =33;
let varInStr = String(strVar);
// console.table([strVar,varInStr, typeof(strVar), typeof varInStr]);

// strVar =null;
// varInStr = String(strVar);
// console.table([strVar,varInStr, typeof(strVar), typeof varInStr]);


strVar =undefined;
varInStr = String(strVar);
console.table([strVar,varInStr, typeof(strVar), typeof varInStr]);

/*
33 => "33" (string)
null =>  "null" (string)
undefined =>  "undefined" (string)
*/