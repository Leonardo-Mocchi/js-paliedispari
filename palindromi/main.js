/* function palindromeCheck(word) {
    return word.split("").reverse().join("")
} */

function palindromeCheck(word) {
    let reversedWord = ""
    for (let i = 0; i < word.length; i++) {
        reversedWord += word[i]
    }
    return reversedWord
}

let userInput = prompt("inserisci una parola per vedere se è palindroma!", "Anna").toUpperCase();
let palindrome = palindromeCheck(userInput);

if (userInput === palindrome) {
    alert("La parola inserita è palindroma!")
} else {
    alert("WOMP WOMP! La parola inserita NON è palindroma")
}

console.log("La tua parola è: " + userInput);
console.log("La tua parola ribaltata è: " + palindrome);

