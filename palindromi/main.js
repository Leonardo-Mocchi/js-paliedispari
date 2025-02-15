
function palindromeCheck(word) {
    return word.split("").reverse().join("")    //.split() .join(" ")
}

let userInput = prompt("inserisci una parola per vedere se è palindroma!", "Anna").toUpperCase();
let palindrome = palindromeCheck(userInput);

if (userInput === palindrome) {
    alert("La parola inserita è palindroma!")
} else {
    alert("WOMP WOMP! La parola inserita NON è palindroma")
}

console.log(userInput);
console.log(palindromeCheck);
console.log(palindrome);

