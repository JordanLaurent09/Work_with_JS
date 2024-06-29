// 1 Факториал числа

let number = Math.abs(prompt("Введите любое число", "some default number"));

let factorial = 1;

if (number != null || number != 0) {
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
}

console.log("Факториал числа " + number + " равен " + factorial + ".");



// 2 Проверка на делители

let userInput = prompt("Введите желаемое число для поиска всех его делителей:", "some default number");

let absoluteValue = Math.abs(userInput);

if (userInput == null) {
    console.log("???");
}

else if (userInput == 0) {
    console.log("Делить на нуль нельзя!");
}

else if (absoluteValue > 0) {
    for (let i = 1; i <= absoluteValue; i++) {
        if (absoluteValue % i == 0) {
            console.log(i + " - делитель числа " + userInput + ".");
        }
    }
}