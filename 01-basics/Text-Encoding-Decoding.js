//---. Text Encoding By Using charCodeAt()

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

//console.log(stringToBase64("Hello")); // Outputs: "0100100001100101011011000110110001101111"

//console.log(btoa(stringToBase64("Hello")));


//--- Text Decoding By Using fromCharCode()

//Converting Encoded Data: If you have data encoded as Unicode values, 
//you can convert it back to a string for display or further processing.

let encodedData = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
let message = String.fromCharCode(...encodedData);
//console.log(message); // Outputs: "Hello, World!"


let pwdLogin = "Pakistan1263";

let pwdLoginArr=[];
//console.log(typeof(pwdLoginArr));

for (i=0; i<=pwdLogin.length; i++){
    pwdLoginArr += pwdLogin.charCodeAt(i);
}

console.log(pwdLoginArr);


