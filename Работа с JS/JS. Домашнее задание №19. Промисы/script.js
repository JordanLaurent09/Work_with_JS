// Массивы с фразами
let phrasesList = Array("Crawling in my skin", "Billie Jean is not my lover", "All my exes live in Texas", "Can't you see I'm easily bothered by persistence?", "Oops, I did it again!", "Smells like teen spirit", "Sad but true!", "Night boat to Cairo", "Golden brown texture like Sun", "In the heat of the night", "Come on, baby, light my fire", "I'm blue, daboo dee daboo dy", "If I was in War World Two they'd call me the Spitfire!", "Hold the line!", "I wear my sunglasses at night", "Shoot to thrill!", "I'll do anything for my sweet sixteen", "Why, why, why, Delilah?", "Monster in paradise", "Bad boys, bad boys, what you gonna do?", "Caught in the bad romance");





// Создание нумерованного списка
let list = document.createElement('ol');

list.textContent = "Song's list";

list.style.marginLeft = '100px';

document.body.appendChild(list);

let button = document.createElement('button');

button.textContent = "Dare to touch me...";

button.style.marginLeft = '400px';

document.body.appendChild(button);



// Вызов промиса при нажатии на кнопку
button.addEventListener('click', () => {
    addingPromise.then(
        (result) => {
            let number = Math.floor(Math.random() * phrasesList.length);
            let element = phrasesList[number];
            let listItem = document.createElement('li');
            listItem.textContent = element;
            listItem.style.fontSize = '50px';
            list.appendChild(listItem);

            console.log(result);

        },
        (error) => {
            console.log(error);
        }
    )
    
});

// Создание промиса
const addingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (phrasesList.length > 0) {
            resolve("Содержимое списка успешно добавлено в нумерованный список");
        }
        else if (phrasesList == 0) {
            reject("Гражданин, пройдёмте!");
        }
    }, 0)
})