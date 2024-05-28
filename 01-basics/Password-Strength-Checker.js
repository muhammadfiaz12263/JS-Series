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

console.log(checkPasswordStrength("Passw0rd!")); // Outputs: Strong
console.log(checkPasswordStrength("password"));  // Outputs: Weak