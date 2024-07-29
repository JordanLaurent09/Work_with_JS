let container = document.createElement('div');

container.style.width = '500px';

container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.alignContent = 'center';

document.body.appendChild(container);


let textHolder = document.createElement('input');

textHolder.placeholder = 'Введите номер пользователя';

textHolder.style.width = '200px';

textHolder.style.borderTop = 0;
textHolder.style.borderLeft = 0;
textHolder.style.borderRight = 0;

let button = document.createElement('button');

button.textContent = 'Поиск';

container.appendChild(textHolder);
container.appendChild(button);


let xhr = new XMLHttpRequest();


button.addEventListener('click', () => {
    let userInput = textHolder.value;

    console.log(userInput);

    textHolder.value = '';

    if (userInput < 1 || userInput > 10) {
        userInput = 1;
    }

    let webAddress = `https://jsonplaceholder.typicode.com/users/${userInput}`;

    console.log(webAddress);

    let userData;

    xhr.open('GET', webAddress, true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    // Промис для асинхронной работы

    let userPromise = new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    });

    userPromise
    .then(
        data => {
            userData = JSON.parse(data);
            createDataPanel(userData);
        }
    )
    xhr.send();
})


// Функция по созданию таблички с данными о пользователе
let createDataPanel = (data) => {
    let infoContainer = document.createElement('div');

    infoContainer.style.border = '5px double orange';

    infoContainer.style.backgroundColor = 'black';
    infoContainer.style.color = 'orange';

    let user__name = document.createElement('h2');
    let user__login = document.createElement('h2');
    let user__email = document.createElement('h2');
    let user__address = document.createElement('h2');
    let user__phone = document.createElement('h2');
    let user__website = document.createElement('h2');
    let user__job = document.createElement('h2');

    user__name.textContent = `Имя пользователя: ${data.name}`;
    user__login.textContent = `Никнейм: ${data.username}`;
    user__email.textContent = `Почта: ${data.email}`;
    user__address.textContent = `Адрес: ${data.address.city}, ${data.address.street}, ${data.address.suite}, ${data.address.zipcode}`;
    user__phone.textContent = `Номер телефона: ${data.phone}`;
    user__website.textContent = `Вебсайт: ${data.website}`;
    user__job.textContent = `Место работы: ${data.company.name}`;

    infoContainer.appendChild(user__name);
    infoContainer.appendChild(user__login);
    infoContainer.appendChild(user__email);
    infoContainer.appendChild(user__address);
    infoContainer.appendChild(user__phone);
    infoContainer.appendChild(user__website);
    infoContainer.appendChild(user__job);

    document.body.appendChild(infoContainer);
}