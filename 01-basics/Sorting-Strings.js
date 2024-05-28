//--- Sorting Strings by Unicode Values

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
console.log(sortStringsByUnicode(strings));
// Outputs: ["apple", "banana", "cherry", "date"]