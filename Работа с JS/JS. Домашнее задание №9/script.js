let items = [
    [1, 2, 1],
    [3, 2, 1],
    [2, 1, 3, 3]
];


let val = items.reduce(function(accumulator, currentValue) {
    return accumulator.concat(currentValue).sort();
});

console.log(val);

