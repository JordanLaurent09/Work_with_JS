// Функция, определяющая простые числа

let checkIsPrime = (number) => {
    let dividers = 0;
    number = Math.abs(number);
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            dividers++;
        }
    }
    if (dividers <= 2) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
checkIsPrime(0);
checkIsPrime(1);
checkIsPrime(2);
checkIsPrime(3);
checkIsPrime(4);
checkIsPrime(21);

