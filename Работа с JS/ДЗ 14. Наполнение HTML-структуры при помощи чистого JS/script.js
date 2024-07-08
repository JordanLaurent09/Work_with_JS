// 1. Добавление корректного имени

let hello = document.getElementsByTagName('h1');

hello[0].textContent = hello[0].textContent.replace('[Ваше Имя]','Сергей');

// 2. Наполнение вкладки "Обо мне" осмысленной информацией

let aboutMe = document.getElementById("about");

let allInfoAboutMe = aboutMe.childNodes;

allInfoAboutMe[3].textContent = "Привет, меня зовут Сергей, и я программист. Мой стаж программирования составляет 18 месяцев. В основном я программирую на C#, но также знаком с Java, C++ и даже с версткой сайтов, а именно - владею HTML, CSS и JavaScript. Готов реализовать любой каприз за Ваши деньги.";


// 3. Заполнение вкладки "Мои услуги" пятью табличками с услугами, забота об адаптиве (wrap)

let serviceBlank = document.getElementById('services');


let servicesDiv = document.createElement('div');

servicesDiv.style.display = 'flex';
servicesDiv.style.flexWrap = 'wrap';
servicesDiv.style.justifyContent = 'space-evenly';

servicesDiv.style.textAlign = 'center';


serviceBlank.appendChild(servicesDiv);



// первая табличка с услугой
let serviceTableOne = document.createElement('div');

serviceTableOne.style.width = '20%';

serviceTableOne.style.display = 'flex';
serviceTableOne.style.flexDirection = 'column';
serviceTableOne.style.alignItems = 'center';
serviceTableOne.style.justifyContent = 'space-between';

serviceTableOne.style.border = '2px solid brown';
serviceTableOne.style.backgroundColor = 'gold';
serviceTableOne.style.color = 'brown';


let tableOneHeader = document.createElement('h2');

tableOneHeader.textContent = 'ОС под ключ';

let tableOneDescription = document.createElement('p');

tableOneDescription.textContent = 'Создам ОС любой сложности под ключ. Вы модный тип, и Вам стыдно пользоваться популярными ОС? Не хотите быть в стаде? Я могу помочь! За небольшие деньги я сделаю Вам ОС с учетом всех Ваших пожеланий. Спешите со мной связаться!';


tableOnePrice = document.createElement('h3');

tableOnePrice.textContent = 'Стоимость услуги : 1.000.000 р.';

serviceTableOne.appendChild(tableOneHeader);
serviceTableOne.appendChild(tableOneDescription);
serviceTableOne.appendChild(tableOnePrice);

servicesDiv.appendChild(serviceTableOne);



// вторая табличка с услугой
let serviceTableTwo = document.createElement('div');

serviceTableTwo.style.width = '20%';

serviceTableTwo.style.display = 'flex';
serviceTableTwo.style.flexDirection = 'column';
serviceTableTwo.style.alignItems = 'center';
serviceTableTwo.style.justifyContent = 'space-between';

serviceTableTwo.style.border = '2px solid brown';
serviceTableTwo.style.backgroundColor = 'gold';
serviceTableTwo.style.color = 'brown';

let tableTwoHeader = document.createElement('h2');

tableTwoHeader.textContent = 'Крипто-кошелек';

let tableTwoDescription = document.createElement('p');

tableTwoDescription.textContent = 'Разработаю и реализую крипто-кошелек для модного крипто-анархиста. Он такой один... для Вас!';


tableTwoPrice = document.createElement('h3');

tableTwoPrice.textContent = 'Стоимость услуги : 500.000 р.';

serviceTableTwo.appendChild(tableTwoHeader);
serviceTableTwo.appendChild(tableTwoDescription);
serviceTableTwo.appendChild(tableTwoPrice);

servicesDiv.appendChild(serviceTableTwo);



// третья табличка с услугой

let serviceTableThree = document.createElement('div');


serviceTableThree.style.width = '20%';

serviceTableThree.style.display = 'flex';
serviceTableThree.style.flexDirection = 'column';
serviceTableThree.style.alignItems = 'center';
serviceTableThree.style.justifyContent = 'space-between';

serviceTableThree.style.border = '2px solid brown';
serviceTableThree.style.backgroundColor = 'gold';
serviceTableThree.style.color = 'brown';

let tableThreeHeader = document.createElement('h2');

tableThreeHeader.textContent = 'Криптовалюта';

let tableThreeDescription = document.createElement('p');

tableThreeDescription.textContent = 'Помогу Вам стать обладателем уникального продукта - собственной КРИПТОВАЛЮТЫ.';

tableThreePrice = document.createElement('h3');

tableThreePrice.textContent = 'Стоимость услуги : 800.000 р.';

serviceTableThree.appendChild(tableThreeHeader);
serviceTableThree.appendChild(tableThreeDescription);
serviceTableThree.appendChild(tableThreePrice);

servicesDiv.appendChild(serviceTableThree);



// четвертая табличка с услугой

let serviceTableFour = document.createElement('div');

serviceTableFour.style.width = '20%';

serviceTableFour.style.display = 'flex';
serviceTableFour.style.flexDirection = 'column';
serviceTableFour.style.alignItems = 'center';
serviceTableFour.style.justifyContent = 'space-between';

serviceTableFour.style.border = '2px solid brown';
serviceTableFour.style.backgroundColor = 'gold';
serviceTableFour.style.color = 'brown';

let tableFourHeader = document.createElement('h2');

tableFourHeader.textContent = 'NFT-токен';

let tableFourDescription = document.createElement('p');

tableFourDescription.textContent = 'Сделаю для Вас NFT-токен на базе любого дорогого Вам изображения или просто смищщной картинки';

tableFourPrice = document.createElement('h3');

tableFourPrice.textContent = 'Стоимость услуги : 50.000 р.';

serviceTableFour.appendChild(tableFourHeader);
serviceTableFour.appendChild(tableFourDescription);
serviceTableFour.appendChild(tableFourPrice);

servicesDiv.appendChild(serviceTableFour);



// пятая табличка с услугой

let serviceTableFive = document.createElement('div');

serviceTableFive.style.width = '20%';

serviceTableFive.style.display = 'flex';
serviceTableFive.style.flexDirection = 'column';
serviceTableFive.style.alignItems = 'center';
serviceTableFive.style.justifyContent = 'space-between';

serviceTableFive.style.border = '2px solid brown';
serviceTableFive.style.backgroundColor = 'gold';
serviceTableFive.style.color = 'brown';

let tableFiveHeader = document.createElement('h2');

tableFiveHeader.textContent = 'Залечь на дно (особая услуга)';


let tableFiveDescription = document.createElement('p');

tableFiveDescription.textContent = 'За Вами гонятся бандиты? Кредиторы мешают Вам жить? Хотите спрятаться, или просто исчезнуть? Выход есть! Я спрячу Вас так хорошо, что никто не найдет! Широкий выбор локаций - от Афганистана до Кашмира! Потеряю Вас в любой дыре НАВЕЧНО';

tableFivePrice = document.createElement('h3');

tableFivePrice.textContent = 'Стоимость услуги : 300.000 р. (+ на чай для караванщика)';


serviceTableFive.appendChild(tableFiveHeader);
serviceTableFive.appendChild(tableFiveDescription);
serviceTableFive.appendChild(tableFivePrice);

servicesDiv.appendChild(serviceTableFive);


// Оформление примеров работ


// a) я получаю section, содержащий список div'ов  с картинками для портфолио
let portfolioTotal = document.getElementById('portfolio');

console.log(portfolioTotal);


// б) далее, путем нехитрых манипуляций я получаю список всего содержимого текущего section
let portfolioElementsTotal = portfolioTotal.childNodes;

console.log(portfolioElementsTotal);


// в) найдя первый div с картинкой, я получаю список его содержимого, а именно - тэги img и p
let portfolioFirst = portfolioElementsTotal[3].childNodes;


// г) получаю доступ непосредственно к div, чтобы сделать его flex
let portfolioTableOne = portfolioFirst[0].parentElement;


portfolioTableOne.style.display = 'flex';
portfolioTableOne.style.justifyContent = 'space-evenly';

console.log(portfolioFirst);
console.log(portfolioFirst[1]);
console.log(portfolioFirst[3]);

// д) заполняю тэги всем необходимым

portfolioFirst[1].src = 'OS.png';

portfolioFirst[1].style.width = '300px';


portfolioFirst[3].textContent = 'Это - "моя" операционная система, "сделанная" по "заказу богатого дубайского шейха". Для "написания" данной ОС я "использовал" язык С++. Мало кто знает, но язык С++ - это наилучший выбор для разработки операционных систем. "Шейх" остался очень доволен, ведь он "заплатил" за эту роскошую ОС гораздо меньше золотых динаров, чем обратившись бы к другому мастеру.';

portfolioFirst[3].style.width = '600px';


// вторая картинка

let portfolioSecond = portfolioElementsTotal[5].childNodes;
let portfolioTableSecond = portfolioSecond[0].parentElement;

portfolioTableSecond.style.display = 'flex';
portfolioTableSecond.style.justifyContent = 'space-evenly';

portfolioSecond[1].src = 'NFT-source.jpg';

portfolioSecond[1].style.width = '300px';


portfolioSecond[3].textContent = 'Это - исходная "смешная" картинка, которую по "заказу" важного чиновника я "превратил" в NFT-токен.';
portfolioSecond[3].style.width = '600px';

// третья картинка

let portfolioThird = portfolioElementsTotal[7].childNodes;
let portfolioTableThird = portfolioThird[0].parentElement;

portfolioTableThird.style.display = 'flex';
portfolioTableThird.style.justifyContent = 'space-evenly';

portfolioThird[1].src = 'travel-bureau.jpeg';

portfolioThird[1].style.width = '300px';


portfolioThird[3].textContent = 'Это - веб-сайт, созданный мной по заказу загадочного заказчика по имени BOGDAN CHORNUY. Сайт посвящен агентству путешествий, и весь его дизайн как будто бы говорит: "Эй, эй, парень! Хочешь в путешествие? Хочешь? Эй, парень!"';

portfolioThird[3].style.width = '600px';