//Generating a Sequence of Characters: You can create a range of characters, such as the alphabet.


let alphabet = '';
for (let i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i);
}
console.log(alphabet); // Outputs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"