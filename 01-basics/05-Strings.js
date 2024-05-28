/*-----String initialize by using (new String()) object------*/
const str1 = new String('Hellow');
//console.log(str1);



//-----------anchor() Function of String-------------
let myString = "Click here";
let anchorString = myString.anchor("myAnchor");

//console.log(anchorString); // Outputs: <a name="myAnchor">Click here</a>





////---------at() function of String---------------

let array = [10, 20, 30, 40, 50];

// console.log(array.at(0));  // Outputs: 10
// console.log(array.at(2));  // Outputs: 30
// console.log(array.at(-1)); // Outputs: 50 (last element)
// console.log(array.at(-3)); // Outputs: 30

let str = "Hello, world!";

// console.log(str.at(0));   // Outputs: H
// console.log(str.at(7));   // Outputs: w
// console.log(str.at(-1));  // Outputs: !
// console.log(str.at(-6));  // Outputs: w


////---------bold) function of String---------------

let myString1 = "This text will be bold!";
let boldString = myString1.bold();

//console.log(boldString); // Outputs: <b>This text will be bold!</b>


////---------charAt() function of String---------------

let myString2 = "Hello, world!";

// console.log(myString2.charAt(0));  // Outputs: "H"
// console.log(myString2.charAt(7));  // Outputs: "w"
// console.log(myString2.charAt(12)); // Outputs: "l"
// console.log(myString2.charAt(13)); // Outputs: "!" (since index 13 is within range)
// console.log(myString2.charAt(20)); // Outputs: "" (index out of range)

////Bracket Notation

let myString3 = "Hello, world!";

// console.log(myString3[0]);  // Outputs: "H"
// console.log(myString3[7]);  // Outputs: "w"
// console.log(myString3[12]); // Outputs: "l"
// console.log(myString3[13]); // Outputs: "!" (since index 13 is within range)
// console.log(myString3[20]); // Outputs: undefined (index out of range)



////---------charCodeAt() function of String---------------

let myString4 = "Hello, world!";

// console.log(myString4.charCodeAt(0));  // Outputs: 72 (Unicode value for "H")
// console.log(myString4.charCodeAt(7));  // Outputs: 119 (Unicode value for "w")
// console.log(myString4.charCodeAt(12)); // Outputs: 100 (Unicode value for "d")
// console.log(myString4.charCodeAt(13)); // Outputs: 33 (Unicode value for "!")
// console.log(myString4.charCodeAt(20)); // Outputs: NaN (index out of range)

/*
Use Cases
Encoding and Decoding: You might use charCodeAt() when you need to convert characters to their Unicode values 
for encoding or decoding purposes.
Character Processing: If you need to perform operations based on the Unicode values of characters, 
such as sorting or comparisons, charCodeAt() is useful.
Example: Summing Unicode Values
Here's an example that sums the Unicode values of all characters in a string

*/
let myString5 = "Hello";
let sum = 0;

for (let i = 0; i < myString5.length; i++) {
    sum += myString5.charCodeAt(i);
}

//console.log(sum); // Outputs: 500

////----------------------------USE CASES of charCodeAt()------------------------

//---1. Password Strength Checker
function checkPasswordStrength(password) {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let hasSpecialChar = false;

    for (let i = 0; i < password.length; i++) {
        let code = password.charCodeAt(i);
        if (code >= 65 && code <= 90) { // A-Z
            hasUpperCase = true;
        } else if (code >= 97 && code <= 122) { // a-z
            hasLowerCase = true;
        } else if (code >= 48 && code <= 57) { // 0-9
            hasDigit = true;
        } else {
            hasSpecialChar = true;
        }
    }

    if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
        return "Strong";
    } else {
        return "Weak";
    }
}

// console.log(checkPasswordStrength("Passw0rd!")); // Outputs: Strong
// console.log(checkPasswordStrength("password"));  // Outputs: Weak


//---2. Text Encoding

function stringToBase64(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let binary = str.charCodeAt(i).toString(2);
        result += binary.padStart(8, '0');
        console.log(binary.padStart(8, '0'));
    }
    //return btoa(result);
    return (result);
}

// console.log(stringToBase64("Hello")); // Outputs: "0100100001100101011011000110110001101111"

// console.log(btoa(stringToBase64("Hello")));



//---3. Character Frequency Analysis
//You can analyze the frequency of characters in a text, which is useful in cryptography, linguistics, and text analysis.


function charFrequencyAnalysis(text) {
    let frequency = {};
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

//console.log(charFrequencyAnalysis("hello world"));
// Outputs: { 104: 1, 101: 1, 108: 3, 111: 2, 32: 1, 119: 1, 114: 1, 100: 1 }

//---4. Sorting Strings by Unicode Values

function sortStringsByUnicode(arr) {
    return arr.sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            let diff = a.charCodeAt(i) - b.charCodeAt(i);
            if (diff !== 0) {
                return diff;
            }
        }
        return a.length - b.length;
    });
}

let strings = ["banana", "apple", "cherry", "date"];
// console.log(sortStringsByUnicode(strings));
// Outputs: ["apple", "banana", "cherry", "date"]


// 5. Custom Text Transformation
// You can create custom text transformations, such as ROT13 encryption, which shifts each character by 13 places in the alphabet.


function rot13(str) {
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            // Uppercase letters
            return String.fromCharCode(((code - 65 + 13) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Lowercase letters
            return String.fromCharCode(((code - 97 + 13) % 26) + 97);
        } else {
            // Non-alphabetic characters
            return char;
        }
    }).join('');
}

console.log(rot13("Hello, World!")); // Outputs: "Uryyb, Jbeyq!"


//Common Use Cases
//Decoding Unicode Values: When you have a list of Unicode values and need to convert them back into a readable string.


let unicodeValues = [72, 101, 108, 108, 111];
let decodedString = String.fromCharCode(...unicodeValues);
console.log(decodedString); // Outputs: "Hello"


//Creating Characters Programmatically: You can generate strings from specific Unicode values, 
//which can be useful for various text manipulation tasks.

let charA = String.fromCharCode(65); // 'A'
let charB = String.fromCharCode(66); // 'B'
console.log(charA, charB); // Outputs: "A B"


//Generating a Sequence of Characters: You can create a range of characters, such as the alphabet.


let alphabet = '';
for (let i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i);
}
console.log(alphabet); // Outputs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


//Converting Encoded Data: If you have data encoded as Unicode values, 
//you can convert it back to a string for display or further processing.


let encodedData = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
let message = String.fromCharCode(...encodedData);
console.log(message); // Outputs: "Hello, World!"






////---------codePointAt() function of String---------------




