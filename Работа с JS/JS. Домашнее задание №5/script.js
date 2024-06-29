let oneDimArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

console.log(oneDimArr);

for (let i = 0; i < oneDimArr.length; i++) {
    if (i % 2 == 0) {
        oneDimArr[i] = 1;
    }
}

console.log(oneDimArr);

let sum = 0;

for (let i = 0; i < oneDimArr.length; i++) {
    sum += oneDimArr[i];
    
}

console.log(sum);