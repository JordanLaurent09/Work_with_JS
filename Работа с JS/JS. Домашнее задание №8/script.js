// 1 Проверка на палиндром

let checkPalyndrome = (someWord = "palyndrome") => {
    let isPalyndrome = false;
    for (let i = 0; i < someWord.length / 2 + 1; i++) {
        if (someWord[i] == someWord[someWord.length - i - 1]) {
            isPalyndrome = true;
        }
        else {
            isPalyndrome = false;
        }
    }

    console.log(isPalyndrome);
}

let palyndromList = Array("bob", "dog", "people", "circumstances", "abracadabra", "шалаш", "шабаш", "варрав");

for (let i = 0; i < palyndromList.length; i++) {
    checkPalyndrome(palyndromList[i]);
    
}

// 2 Возврат количества гласных букв


let calcVowels = function(line) {

    let vowelsDictionary = Array('a', 'e', 'i', 'o' , 'u' , 'y');

    let vovwelsCount = 0;

    for (let i = 0; i < line.length; i++) {
        if (vowelsDictionary.includes(line[i])) {
            vovwelsCount++;
        }
    }

    return vovwelsCount;
}

console.log("В строчке show me your war face! " + calcVowels("show me your war face!") + " гласных.");


// 3 Получение из массива нового массива с только четными элементами

function getEvensArray(primaryArray = Array(2, 3)) {
    let evensArray = new Array();

    for (let i = 0; i < primaryArray.length; i++) {
        if (primaryArray[i] % 2 == 0) {
            evensArray.push(primaryArray[i]);
        }
    }

    return evensArray;
}

let initialArray = [1, 22, 45, 34, 21, 26, 27, 11, 20];

console.log("Содержимое исходного массива");
console.log(initialArray);

console.log("Содержимое результирующего массива");
console.log(getEvensArray(initialArray));

