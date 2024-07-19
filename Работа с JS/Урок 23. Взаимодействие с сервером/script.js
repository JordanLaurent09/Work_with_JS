let xhr = new XMLHttpRequest();

// Запрос //

xhr.open('POST', 'https://jsonplaceholder.typicode.com//posts', true);

xhr.setRequestHeader('Content-Type', 'application/json');

// Для корректной работы
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    } 
}



// Для обработки ошибок
xhr.onerror = () => {
    console.log("Ошибка");
}


// Для установки таймаута запроса
xhr.timeout = 2000;
xhr.ontimeout = () => {
    console.error("ВРемя запроса истекло")
}




xhr.send();
/* xhr.send(JSON.stringify(
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
)); */

//console.log(xhr.responseText);
