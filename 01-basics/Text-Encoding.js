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

console.log(stringToBase64("Hello")); // Outputs: "0100100001100101011011000110110001101111"

console.log(btoa(stringToBase64("Hello")));