let button = document.createElement('button');

button.textContent = 'Нажмите на меня';

button.style.position = 'absolute';

document.body.appendChild(button);




button.addEventListener('click', () => {
    
    button.style.top = Math.random() * 1500 + 'px';
    button.style.left = Math.random() * 1500 + 'px';

    let randomColorIndex = Math.floor((Math.random()) * 12);
    let randomBackgrpoundIndex = Math.floor((Math.random()) * 12);
    let randomCity = Math.floor((Math.random()) * cities.length);

    let color = colorArray[randomColorIndex];
    let backcolor = colorArray[randomBackgrpoundIndex];

    button.style.color = color;
    button.style.backgroundColor = backcolor;

    button.style.width = '200px';
    button.style.height = '200px';

    button.style.borderRadius  = '100px';

    button.style.fontSize = '30px';

    button.textContent = cities[randomCity];

});



let colorArray = ['blue', 'red', 'gray', 'violet', 'crimson', 'orange', 'yellow', 'green', 'pink', 'black', 'brown', 'gold'];

let cities = ["Лондон", "Чикаго", "Москва", "Токио", "Пекин", "Кабул", "Каир", "Варшава", "Афины", "Лагос", "Тегеран", "Баку", "Киншаса", "Дубай", "Карачи", "БАЛИ", "Будапешт", "Сайгон", "Бангкок", "Дублин", "Брюгге"];