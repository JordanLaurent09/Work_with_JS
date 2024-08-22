let circles = document.getElementsByClassName('circle');


let radius = 300; // Радиус окружности
let numCircles = 10; // Количество кружков
let circleSize = 900; // Размер кружков

for (let i = 0; i < circles.length; i++) {
 
  let angle = (i / numCircles) * (2 * Math.PI);
  let x = Math.cos(angle) * radius + (circles[i].clientWidth / 2) - (circleSize / 2);
  let y = Math.sin(angle) * radius + (circles[i].clientHeight / 2) - (circleSize / 2);
  
  circles[i].style.left = `${x}px`;
  circles[i].style.top = `${y}px`;

}

// Функция, анимирующая веб-страницу при помощи GSAP
function makeAnimation() {
    let tl = gsap.timeline({duration: 1, yoyo: false});

    tl.from('.wrapper', {duration: 10, rotation: 360, repeat: -1, ease: "linear"})
    .from("#circle1", {x: 1500})
    .from("#circle2", {x: 1500, y: 500})
    .from("#circle3", {x: 1000, y: 1000})
    .from("#circle4", {x: 1000, y: 1000})
    .from("#circle5", {x: 1000, y: 1000})
    .from("#circle6", {x: 1000, y: 1000})
    .from("#circle7", {x: 1000, y: 1000})
    .from("#circle8", {x: 1000, y: 1000})
    .from("#circle9", {x: 1000, y: 1000})
    .from("#circle10", {x: 1000, y: 1000})
    .from('.circle', {repeat: -1, duration: 10, rotation: -360, ease: "linear"});


    document.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('circle')) {
        tl.pause();

        let titleText = document.getElementById(`${event.target.id}`).childNodes[0];
        let elem = document.getElementById(`${event.target.id}`).childNodes[1];
   

        gsap.to('.wrapper', {zIndex: 0, opacity: 0.1});
        gsap.to(`#${event.target.parentNode.parentNode.id}`, {zIndex: 1000, opacity: 1});
        gsap.to(`#${event.target.id}`, {scale: 1.5, duration: 0.5, ease: "linear", borderRadius: 10});
        gsap.to(`#${elem.id}`, {duration: 0, display: 'flex'});
        gsap.to(`#${titleText.id}`, {duration: 0, display: 'none'});
        }
    });


    document.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('circle')) {
        tl.play();

        let titleText = document.getElementById(`${event.target.id}`).childNodes[0];
        let elem = document.getElementById(`${event.target.id}`).childNodes[1];

        gsap.to('.wrapper', {zIndex: 0, opacity: 1});
        gsap.to(`#${event.target.id}`, {scale: 1, duration: 0.5, ease: "linear", borderRadius: 50});
        gsap.to(`#${elem.id}`, {duration: 0, display: 'none'});
        gsap.to(`#${titleText.id}`, {duration : 0, display: null});
    }
    });
}

// Функция по распределению данных пользователей внутри HTML-структуры
function handleUsersInfo(usersList) {

    for (let i = 0; i < usersList.length; i++) {

        // Создание заголовка внутри элемента circle
        let header = document.createElement('h3');

        header.className = 'text';
        header.id = `text${i + 1}`
        header.textContent = usersList[i].name;

        circles[i].appendChild(header);

        // Создание тайного описания юзера

        let userInfo = document.createElement('div');

        userInfo.className = 'user_info';
        userInfo.id = `user_info${i + 1}`

        let userName = document.createElement('p');
        let userLogin = document.createElement('p');
        let userEmail = document.createElement('p');
        let userPhone = document.createElement('p');
        let userSite = document.createElement('p');

        userName.className = 'user_info__text';
        userLogin.className = 'user_info__text';
        userEmail.className = 'user_info__text';
        userPhone.className = 'user_info__text';
        userSite.className = 'user_info__text';

        userName.textContent = `Имя: ${usersList[i].name}`;
        userLogin.textContent = `Логин: ${usersList[i].username}`;
        userEmail.textContent = `Почта: ${usersList[i].email}`;
        userPhone.textContent = `Номер: ${usersList[i].phone}`;
        userSite.textContent = `Сайт: ${usersList[i].website}`;

        userInfo.appendChild(userName);
        userInfo.appendChild(userLogin);
        userInfo.appendChild(userEmail);
        userInfo.appendChild(userPhone);
        userInfo.appendChild(userSite);

        circles[i].appendChild(userInfo);
    }
}

// Функция по получению и обработке данных с сервера
async function getUsersInfo() {
  return await fetch('https://jsonplaceholder.typicode.com/users')
  .then(responce => responce.json())
  .then(data => {
        handleUsersInfo(data);
        makeAnimation();
    });
}
getUsersInfo();