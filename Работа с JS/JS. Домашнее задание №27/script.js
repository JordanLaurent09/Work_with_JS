document.addEventListener("DOMContentLoaded", function() {
    let statusCircle = document.getElementsByClassName('circle');

    // Функция для изменения цвета круга
    function changeColor(color) {
        for (let i = 0; i < statusCircle.length; i++) {
            statusCircle[i].style.backgroundColor = color;            
        }
    }

    // Функция для создания задержки
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Асинхронная функция для выполнения запросов
    async function fetchData() {
        try {
            changeColor('red'); // Кружок горит красным, когда выполняется первый промис
            await delay(2000);

            let response1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
            let data1 = await response1.json();
            changeColor('orange'); // Кружок загорается оранжевым, когда первый промис выполнен
            await delay(2000);

            let response2 = await fetch('https://jsonplaceholder.typicode.com/posts/5');
            let data2 = await response2.json();
            changeColor('yellow'); // Кружок загорается желтым, когда второй промис выполнен
            await delay(2000);

            let response3 = await fetch('https://jsonplaceholder.typicode.com/albums/2');
            let data3 = await response3.json();
            changeColor('green'); // Кружок загорается зеленым, когда третий промис выполнен
            await delay(2000);

            let response4 = await fetch('https://jsonplaceholder.typicode.com/posts/20');
            let data4 = await response4.json();
            changeColor('#ff2d03'); // Четвертый круг загорается цветом красного оттенка, когда выполнен четвертый промис
            await delay(2000);

            let response5 = await fetch('https://jsonplaceholder.typicode.com/comments/20');
            let data5 = await response5.json();
            changeColor('#8dff03'); // Пятый круг загорается цветом салатового оттенка, когда выполнен пятый промис
            await delay(2000);

        } catch (error) {
            console.error('Error:', error);
            changeColor('gray'); // Кружок возвращается к серому цвету в случае ошибки
        }
    }

    fetchData();
});