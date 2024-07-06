// добавление основного контейнера для заголовка
let headerDiv = document.createElement('div');

headerDiv.style.width = '90%';

headerDiv.style.margin = '0 auto';

headerDiv.style.display = 'flex';
headerDiv.style.justifyContent = 'space-between';
headerDiv.style.alignItems = 'center';

headerDiv.style.borderTop = '2px solid lightGray';
headerDiv.style.borderRight = '2px solid lightGray';

document.body.appendChild(headerDiv);


// добавление текстового заголовка в левую часть основного контейнера для заголовка
let headerTitle = document.createElement('h3');
headerTitle.textContent = "LMS Landing Page";

headerTitle.style.paddingLeft = '30px';

headerDiv.appendChild(headerTitle);

// создание и добавление в основной контейнер для заголовка контейнера для навигации

let navigation = document.createElement('div');

navigation.style.width = '40%';

navigation.style.paddingRight = '30px';

navigation.style.display = 'flex';
navigation.style.justifyContent = 'space-between';
navigation.style.alignItems = 'center';

headerDiv.appendChild(navigation);


// создание навигационных элементов и их добавление в контейнер для навигации

let titleOne = document.createElement('h4');

titleOne.textContent = 'Landing';

navigation.appendChild(titleOne);

let titleTwo = document.createElement('h4');

titleTwo.textContent = 'Home';

navigation.appendChild(titleTwo);

let titleThree = document.createElement('h4');

titleThree.textContent = 'Marketing';

navigation.appendChild(titleThree);

let titleFour = document.createElement('h4');

titleFour.textContent = 'Courses';

navigation.appendChild(titleFour);

let titleFive = document.createElement('h4');

titleFive.textContent = 'Pricing';

navigation.appendChild(titleFive);

let titleSix = document.createElement('h4');

titleSix.textContent = 'Course';

navigation.appendChild(titleSix);

let titleSeven = document.createElement('h4');

titleSeven.textContent = 'About';

navigation.appendChild(titleSeven);

let titleEight = document.createElement('h4');

titleEight.textContent = 'Blog';

navigation.appendChild(titleEight);

let titleNine = document.createElement('h4');

titleNine.textContent = 'Contact';

navigation.appendChild(titleNine);


let picture = document.createElement('img');

picture.src = 'buy-icon.png';
picture.alt = 'icon with buy case';

navigation.appendChild(picture);


// создание главного контейнера

let mainDiv = document.createElement('div');

mainDiv.style.width = '90%';
mainDiv.style.height = '500px';

mainDiv.style.margin = '0 auto';

mainDiv.style.backgroundColor = '#5050BE';

mainDiv.style.borderTop = '2px solid #2F3292';

document.body.appendChild(mainDiv);


// Создание контейнера с элементами внутри главного контейнера

let mainInfo = document.createElement('div');

mainInfo.style.width = '60%';

mainInfo.style.margin = '0 auto';

mainInfo.style.display = 'flex';
mainInfo.style.justifyContent = 'space-evenly';
mainInfo.style.alignItems = 'center';


mainInfo.style.fontFamily = 'Arial';

mainDiv.appendChild(mainInfo);


// Создание левого элемента внутри контейнера с элементами

let leftElement = document.createElement('div');

leftElement.style.width = '40%';


leftElement.style.display = 'flex';
leftElement.style.flexDirection = 'column';


mainInfo.appendChild(leftElement);

// Создание заголовка внутри левого элемента

let infoHeader = document.createElement('h1');

infoHeader.textContent = 'Learn to Code Websites, Apps & Games';

infoHeader.style.color = 'white';

infoHeader.style.fontSize = '34px';

leftElement.appendChild(infoHeader);


// Создание тесктового поля внутри левого элемента

let infoText = document.createElement('p');

infoText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet, cupiditate aspernatur ex, debitis dignissimos voluptates ullam, omnis dolorem tempora impedit maxime praesentium sed? Et quae dignissimos suscipit placeat molestiae?';

infoText.style.color = '#ccccff';

infoText.style.fontSize = '14px';

leftElement.appendChild(infoText);


// Создание кнопки внутри левого элемента


let mainButton = document.createElement('button');

mainButton.textContent = 'VIEW COURSES ›';


mainButton.style.width = '150px';
mainButton.style.height = '40px';

mainButton.style.color = 'white';
mainButton.style.backgroundColor = '#05E1BE';

mainButton.style.fontWeight = 'bolder';
mainButton.style.fontSize = '12px';

mainButton.style.border = '0';

mainButton.style.borderRadius = '50px';

mainButton.style.boxShadow = '20px 20px 100px #05E1BE';


leftElement.appendChild(mainButton);

// Вставка правого элемента - картинки

let image = document.createElement('img');

image.src = 'notebook.png';
image.alt = 'notebook';

image.style.width = '400px';

image.style.paddingTop = '100px';

mainInfo.appendChild(image);
