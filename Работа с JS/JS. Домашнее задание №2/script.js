// 1 Среднее арифметическое значение
let averageScore = 0;

let mathScore = prompt("Enter your math score:", "some number");

let chemistryScore = prompt("Enter your chemistry score:", "some number");

let physicsScore = prompt("Enter your physics score:", "some number");

let informaticsScore = prompt("Enter your informatics score:", "some number");

averageScore = (mathScore / 4 + chemistryScore / 4 + physicsScore / 4 + informaticsScore / 4);

console.log(averageScore);

if (averageScore < 3) {
    alert("You are dummy!");
}
else if (averageScore >= 3 && averageScore < 4) {
    alert("Try better!");
}
else if (averageScore >= 4 && averageScore < 5) {
    alert("Go ahead!");
}
else if (averageScore == 5) {
    alert("Bloody brilliant!");
}
else {
    alert("Я ВЫЗЫВАЮ РОДИТЕЛЕЙ");
}

// 2 Определение типа треугольника

let firstSide = prompt("Enter triangle side:", "some default number");
let secondSide = prompt("Enter triangle side:", "some default number");
let thirdSide = prompt("Enter triangle side:", "some default number");

if (firstSide === secondSide === thirdSide) {
    alert("Треугольник равносторонний");
}
else if ((firstSide == secondSide && firstSide != thirdSide) || (firstSide == thirdSide && firstSide != secondSide)) {
    alert("Треугольник - равнобедренный");
}

else if (firstSide != secondSide && secondSide != thirdSide && firstSide != thirdSide){
    alert("Треугольник - разносторонний");
}
else {
    alert("Я не знаю, что это такое, если бы я знал, что это такое, но я не знаю, что это такое");
}


// 3 Диапазон значений

let boundaryLesser = 1;
let boundaryGreater = 20;

let guessNumber = prompt("There is exists some number boundary; try to find it out.", "some default number");

if (guessNumber > boundaryGreater) {
    alert("Wrong, the boundary lies below");
}
else if (guessNumber < boundaryLesser) {
    alert("No, it's greater");
}

else if (guessNumber >= boundaryLesser && guessNumber <= boundaryGreater) {
    alert("Win");
}

else {
    alert("STOP IT!!!");
}

