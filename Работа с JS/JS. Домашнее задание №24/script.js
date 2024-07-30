let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.setRequestHeader('Context-Type', 'application/json');


let webRequestPromise = new Promise((resolve, reject) => {
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.responseText);
        }
    }
});

let usersList; 

webRequestPromise.then((data) => {
    usersList = JSON.parse(data);
    for (let i = 0; i < usersList.length; i++) {
        createContainer(usersList[i]);
    }
    console.log(usersList);
})

xhr.send();


// Функция, создающая html-элементы на основе пользователя

let createContainer = (user) => {

    let outerContainer = document.createElement('div');

    outerContainer.style.backgroundColor = '#ebebeb';



    // Контейнер, содержащий элементы для одного пользователя
    let singleContainer = document.createElement('div');

    singleContainer.style.width = '90%';
    singleContainer.style.height = '100px';

    singleContainer.style.position = 'relative';

    singleContainer.style.margin = '10px auto';

    singleContainer.style.display = 'flex';
    singleContainer.style.justifyContent = 'space-between';
    singleContainer.style.alignItems = 'center';

    singleContainer.style.backgroundColor = '#ebebeb';


    // Кнопка с картинкой, активизирующая скрытый контейнер
    let infoButton = document.createElement('button');

    infoButton.style.width = '80px';
    infoButton.style.height = '80px';


    infoButton.style.border = 0;
    infoButton.style.borderRadius = '100px';

    infoButton.style.backgroundColor = '#008c8d';

    let image = document.createElement('img');

    image.src = 'letter.png';

    infoButton.appendChild(image);



    // Элемент с именем пользователя
    let userName = document.createElement('h2');

    userName.textContent = user.name;

    userName.style.color = '#008c8d';
    

    // Кнопка, активизирующая загрузку альбомов
    let albumsButton = document.createElement('button');

    albumsButton.textContent = 'Открыть альбомы';

    albumsButton.style.width = '130px';
    albumsButton.style.height = '60px';

    albumsButton.style.border = 0;
    albumsButton.style.borderRadius = '20px';

    albumsButton.style.boxShadow = '5px 5px gray';

    albumsButton.style.backgroundColor = '#dcffff';


    // Невидимый контейнер

    let addingInfo = document.createElement('div');

    addingInfo.style.width = '250px';
    addingInfo.style.height = '100px';

    addingInfo.style.display = 'none';

    addingInfo.style.position = 'absolute';
    addingInfo.style.top = '100px';

    addingInfo.style.zIndex = '1';

    addingInfo.style.backgroundColor = 'white';

    addingInfo.style.border = '1px solid gray';

    addingInfo.style.borderRadius = '20px';

    let mail = document.createElement('p');
    mail.textContent = `Email: ${user.email}`;
    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = `Number: ${user.phone}`;
    let web = document.createElement('p');
    web.textContent = `Website: ${user.website}`;

    addingInfo.appendChild(mail);
    addingInfo.appendChild(phoneNumber);
    addingInfo.appendChild(web);


    // Тайный список альбомов

    let albumsContainer = document.createElement('div');


    albumsContainer.style.display = 'none';

    albumsContainer.style.flexDirection = 'column';
    albumsContainer.style.justifyContent = 'space-evenly';
    albumsContainer.style.alignItems = 'left';

    albumsContainer.style.lineHeight = '0';

    albumsContainer.style.position = 'absolute';
    albumsContainer.style.top = '50px';
    albumsContainer.style.left = '1000px';

    albumsContainer.style.zIndex = '1';

    albumsContainer.style.backgroundColor = 'white';

    albumsContainer.style.borderRadius = '10px';

    let header = document.createElement('h2');

    header.textContent = 'Список альбомов';

    header.style.paddingLeft = '20px';

    header.style.color = '#008c8d';

    albumsContainer.appendChild(header);



    // Заполнение общей формы html-элементами
    singleContainer.appendChild(infoButton);
    singleContainer.appendChild(userName);
    singleContainer.appendChild(albumsButton);

    singleContainer.appendChild(addingInfo);
    singleContainer.appendChild(albumsContainer);

    outerContainer.appendChild(singleContainer);

    document.body.appendChild(outerContainer);


    // События
    // Выпадение элемента с доп. информацией при наведении мыши
    infoButton.addEventListener('mouseover', () => {
        addingInfo.style.display = 'flex';
        addingInfo.style.flexDirection = 'column';
        addingInfo.style.justifyContent = 'space-evenly';
        addingInfo.style.alignItems = 'center';

        addingInfo.style.lineHeight = '0';
    });

    // Скрытие элемента с доп. информацией при уведении мыши
    infoButton.addEventListener('mouseleave', () => {
        addingInfo.style.display = 'none';
    });


    // Загрузка с сервера списка альбомов пользователя при нажатии на кнопку
    albumsButton.addEventListener('click', () => {

        let xhrAlbums = new XMLHttpRequest();

        let address = 'https://jsonplaceholder.typicode.com/users/' + user.id + '/albums';

        console.log(address);

        xhrAlbums.open('GET', address, true);

        xhrAlbums.setRequestHeader('Context-Type', 'application/json');

        // Промис по получению данных из сети
        let albumsPromise = new Promise((resolve, reject) => {
            xhrAlbums.onreadystatechange = function() {
                if (xhrAlbums.readyState === 4 && xhrAlbums.status === 200) {
                    resolve(xhrAlbums.responseText);
                }
            }
        });

        let albums;

        // Создание списка с html-элементами для визуализации альбомов пользователя
        albumsPromise.then((data) => {
            albums = JSON.parse(data);
            if (albumsContainer.childNodes.length === 1) {
                for (let i = 0; i < albums.length; i++) {
                    let element = createAlbumsElements(albums[i]);
                    albumsContainer.appendChild(element);
                }
            }
            else return;
        })

        xhrAlbums.send();

    });

    // Событие, позволяющее прятать/выводить контейнер со списком альбомов пользователя при нажатии на кнопку
    albumsButton.addEventListener('click', () => {
        if (albumsContainer.style.display == 'none') {
            albumsContainer.style.display = 'flex';
        }
        else if (albumsContainer.style.display == 'flex') {
            albumsContainer.style.display = 'none';
        }
    })
}

// Функция по созданию html-элемента под каждый альбом пользователя

let createAlbumsElements = (album) => {
    let singleAlbum = document.createElement('div');

    singleAlbum.style.width = '90%';
    
    singleAlbum.style.margin = '10px auto';

    singleAlbum.style.backgroundColor = '#ebebeb';

    singleAlbum.style.borderRadius = '20px';

    let albumDescription = document.createElement('h3');

    albumDescription.textContent = album.title;

    albumDescription.style.color = '#008c8d';

    singleAlbum.appendChild(albumDescription);

    return singleAlbum;
}