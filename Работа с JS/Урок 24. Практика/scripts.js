let infoTotal;

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.setRequestHeader('Content-Type', 'application/json');

/* xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        infoTotal = xhr.responseText;
    }
} */

xhr.send();

/* function operator(data) {
    infoTotal = data;
} */

let dreadPromise = new Promise((resolve, reject) => {

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.responseText);
        }
    }

});




dreadPromise.then(
    data => {
        infoTotal = data;
        infoTotal = JSON.parse(data);
        console.log(infoTotal);

        /* for (let i = 0; i < infoTotal.length; i++) {
            createStructure(infoTotal[i]);
        } */
        
    }
);

function createStructure(data) {
    // Основной контейнер создаю
    let mainContainer = document.createElement('div');
    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'column';

    document.body.appendChild(mainContainer);


    // А тут создаю внутреннюю плашку

    let innerContainer = document.createElement('div');


    innerContainer.style.display = 'flex';
    innerContainer.style.justifyContent= 'space-between';

    let innerImage = document.createElement('img');
    innerImage.alt = 'Здесь должен быть круг зеленого цвета';

    let innerName = document.createElement('h2');
    innerName.textContent = data[0].name;

    let innerButton = document.createElement('button');
    innerButton.textContent = 'Открыть';

    mainContainer.appendChild(innerContainer);

    innerContainer.appendChild(innerImage);
    innerContainer.appendChild(innerName);
    innerContainer.appendChild(innerButton);
}