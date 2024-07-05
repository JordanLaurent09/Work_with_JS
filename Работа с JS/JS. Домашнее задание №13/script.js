// добавление основного контейнера для заголовка
let headerDiv = document.createElement('div');

headerDiv.style.width = '90%';

headerDiv.style.margin = '0 auto';

headerDiv.style.display = 'flex';
headerDiv.style.justifyContent = 'space-between';
headerDiv.style.alignItems = 'center';

headerDiv.style.borderTop = '2px solid gray';
headerDiv.style.borderRight = '2px solid gray';

document.body.appendChild(headerDiv);


// добавление текстового заголовка в левую часть основного контейнера для заголовка
let headerTitle = document.createElement('h3');
headerTitle.textContent = "LMS Landing Page";

headerDiv.appendChild(headerTitle);

// создание и добавление в основной контейнер для заголовка контейнера для навигации

let navigation = document.createElement('div');

navigation.style.width = '40%';

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

mainDiv.style.backgroundColor = 'violet';

document.body.appendChild(mainDiv);