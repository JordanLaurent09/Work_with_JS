let secretDigit = Math.floor(3 * Math.random()) + 1;

let attempt = 3;

while (attempt > 0) {
    let userInput = prompt("Отгадайте загаданную цифру. Число Ваших попыток - " + attempt + ".");

    if (userInput == secretDigit) {
        console.log("И у нас - Победитель! Вы получаете книгу по программированию.\nИ кстати говоря - загаданное число это " + secretDigit + ".");
        break;
    }

    else if (userInput != secretDigit) {
        attempt--;
        console.log("Вы не угадали!");
    }

    if (attempt == 0) {
        console.log("ПЕЧАЛЬКА))\nИ кстати говоря - загаданное число это " + secretDigit + ".");
    }

}