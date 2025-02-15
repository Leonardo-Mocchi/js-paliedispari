function textCheck(word) {
    if (word == "even" || word == "odd") {
        return true
    } else {
        alert("ERROR: MUST WRITE 'EVEN' OR 'ODD'");
        return false
    }
}

function numCheck(num) {
    if (num >= 1 && num <= 5) {
        return true;
    } else {
        alert("ERROR: NUMBER MUST BE BETWEEN 1 AND 5");
        return false;
    }
}

function botNumGen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sum(num1, num2) {
    return num1 + num2;
}

const userChoice = prompt("Choose 'even' or 'odd' then write it", "even").toLowerCase();
const userNum = Number(prompt("Choose an integer between 1 and 5", "1"));
const userChoiceValidator = textCheck(userChoice);
const userNumValidator = numCheck(userNum);
const proceed = sum(userChoiceValidator, userNumValidator);

const botNum = botNumGen(1, 5);

if (proceed !== 2) {
    alert("ERROR: RESPECT PREVIOUS REQUESTS!")
} else if (proceed == 2) {
    const failPass = sum(userNum, botNum)
    if (failPass % 2 === 0 && userChoice == "even") {
        alert("YOU WON! ... nothing ... BUT YOU STILL WON! HOORRAY!!")
    } else if ((failPass + 1) % 2 === 0 && userChoice == "odd") {
        alert("YOU WON! ... nothing ... BUT YOU STILL WON! HOORRAY!!")
    } else {
        alert("YOU ... lost WOMP WOMP!")
    }
}
console.log("You declared: " + userChoice);
console.log("Your Number is: " + userNum);
console.log("Our Number is: " + botNum);