let users = fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
})
.then(
response => {
    let headerParams = response.headers.get('Content-Type').split(';');
    if (!response.ok) {
        throw new Error('Что-то не так с ответом сети!');
    }
    if (headerParams[0] != 'application/json') {
        throw new Error('Проблемы с заголовком!');
    }
    return response.json();
})
.then(data => {
    arr = data.filter(function(number) {
        return number.id % 2 == 0;
    });
    console.log(arr);
});
let arr;