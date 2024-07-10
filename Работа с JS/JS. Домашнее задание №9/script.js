let items = [
    [1, 2, 1],
    [3, 2, 1],
    [2, 1, 3, 3]
];

let resultArr = items.reduce(function(accumulator, currentValue) {
    currentValue.forEach(function(value) {
        let isIncludes = false;
        accumulator.forEach(function(innerValue) {
            if (innerValue.includes(value) || innerValue.length == 0) {
                isIncludes = true;
                innerValue.push(value);
            }
        })
        if (isIncludes == false) {
            let newInnerValue = new Array();
            newInnerValue.push(value);
            accumulator.push(newInnerValue);
        }
    });
    return accumulator;
}, [[]]);

resultArr.forEach(function(value) {
    console.log(`Число ${value[0]} встречается в массиве ${value.length} раз(а).`);
});
