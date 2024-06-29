let matrix = [
    [-4, 7, -9, 3, 10],
    [5, -2, 8, -6, 1],
    [-8, 0, 4, -5, 9],
    [2, -3, 6, -7, -10]
    ];

// 1 Вывод массива на экран


for (let i = 0; i < matrix.length; i++) {

    let line = "";

    for (let j = 0; j < matrix[i].length; j++) {
        line += matrix[i][j] + " ";

    }
    console.log(line);
}

console.log(" ");

// 2 Замена всех нечетных элементов единицей

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
        if (j % 2 != 0) {
            matrix[i][j] = 1;
        }
    }
}

// 3 Вывод на экран массива с измененными данными
for (let i = 0; i < matrix.length; i++) {

    let line = "";

    for (let j = 0; j < matrix[i].length; j++) {
        line += matrix[i][j] + " ";

    }
    console.log(line);
}

console.log(" ");

// 4 Вывод сумм каждого подмассива

for (let i = 0; i < matrix.length; i++) {

    let sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];

    }
    console.log(sum); 
}