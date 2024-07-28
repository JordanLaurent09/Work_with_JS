// Серый квадрат, общий для всего

let mainBackground = document.createElement('div');

mainBackground.style.height = 'auto';

mainBackground.style.padding = '15px';
mainBackground.style.paddingTop = '20px';
mainBackground.style.paddingLeft = '10px';

mainBackground.style.backgroundColor = '#F0F0F0';

mainBackground.style.borderTop = '1px solid #DEDEDE';

document.body.appendChild(mainBackground);



// Контейнер с логикой задачника
let tasksContainer = document.createElement('div');


tasksContainer.style.height = 'auto';

tasksContainer.style.display = 'flex';
tasksContainer.style.flexDirection = 'column';
tasksContainer.style.alignItems = 'center';

tasksContainer.style.backgroundColor = 'white';

tasksContainer.style.boxShadow = '-5px -5px 1px #EBEBEB, 5px 5px 1px #EBEBEB';

tasksContainer.style.fontFamily = 'cursive';

mainBackground.appendChild(tasksContainer);



// Заголовок

let header = document.createElement('h1');

header.textContent = "Список задач";

header.style.alignItems = 'center';

tasksContainer.appendChild(header);

// Форма для заполнения новой задачи

let newTaskForm = document.createElement('div');

newTaskForm.style.width = '90%';

newTaskForm.style.margin = '0 auto';

newTaskForm.style.display = 'flex';
newTaskForm.style.justifyContent = 'space-between';

tasksContainer.appendChild(newTaskForm);

// Заполнение формы для новой задачи элементами

let form = document.createElement('input');

form.placeholder = 'Введите название задачи';

form.style.width = '20vw';

form.style.color = '#C4C0BF';

form.style.border = '0px';
form.style.borderBottom = '1px solid #EAEAEA';

let button = document.createElement('button');

button.textContent = 'Добавить';

button.width = '100px';
button.height = '20px';

button.style.backgroundColor = '#699651';
button.style.color = '#D9F4D1';

button.style.border = '0px';

newTaskForm.appendChild(form);
newTaskForm.appendChild(button);

// Создание контейнера для списка имеющихся задач

let tasks = document.createElement('div');

tasks.style.width = '95%';

tasks.style.margin = '0 auto';

tasks.style.display = 'flex';
tasks.style.flexDirection = 'column';
tasks.style.alignItems = 'center';
tasks.style.justifyContent = 'space-between';

tasksContainer.appendChild(tasks);

// Массив для хранения извлеченных из localStorage задач
let tasksList = new Array();

// Заполнение массива уже имеющимися задачами
let fillTaskList = () => {
    let storageSize = localStorage.length;

    if (storageSize > 0) {
        for (let i = 0; i < storageSize; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);

            let task = {
                key: key,
                value: value
            };

            tasksList.push(task);
        }
    }
}

fillTaskList();

// Функция, создающая контейнер с задачей

let createTaskContainer = (task) => {
    let newTask = document.createElement('div');

    newTask.style.width = '90%';
    newTask.style.margin = '10px auto';
    
    newTask.style.display = 'flex';
    newTask.style.justifyContent = 'space-between';
    newTask.style.alignItems = 'center';

    newTask.style.backgroundColor = '#F0F0F0';

    
    // Параграф с описанием задачи
    let taskDescription = document.createElement('p');
    
    taskDescription.textContent = task.key;
    
    newTask.appendChild(taskDescription);


    // Кнопка для изменения статуса задачи

    let statusButton = document.createElement('button');

    statusButton.style.position = 'relative';

    statusButton.style.width = '40px';
    statusButton.style.height = '40px';

    statusButton.style.border = '0px';
    statusButton.style.borderRadius = '100px';

    if (task.value === 'completed') {
        statusButton.style.backgroundColor = 'yellowgreen';
    }

    else {
        statusButton.style.backgroundColor = 'crimson';
    }
    
    newTask.appendChild(statusButton);

    let checkIcon = document.createElement('img');

    checkIcon.style.height = '20px';
    checkIcon.style.width = '20px';

    checkIcon.src = 'check-icon.png';

    statusButton.appendChild(checkIcon);

    
    // Кнопка для удаления задачи
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    
    deleteButton.width = '100px';
    deleteButton.height = '20px';
    
    deleteButton.style.backgroundColor = '#FF4B4C';
    deleteButton.style.color = '#FCABAA';
    
    deleteButton.style.border = '0px';
    
    newTask.appendChild(deleteButton);
    
    tasks.appendChild(newTask);
    

    // Событие для изменения статуса задачи
    statusButton.addEventListener('click', () => {
        statusButton.style.backgroundColor = 'yellowgreen';
        task.value = 'completed';
        localStorage.setItem(task.key, task.value);
    });

    // Событие по удалению задачи
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem(task.key);

        let parent = deleteButton.parentNode;

        console.log(parent);

        let mainContainer = parent.parentNode;

        console.log(mainContainer);

        mainContainer.removeChild(parent);
            
    });
}

// Заполнение сайта содержимым массива с задачами

let showTasks = () => {
    let len = tasksList.length;
    for (let i = 0; i < len; i++) {
        createTaskContainer(tasksList[i]);
    }
}

button.addEventListener('click', createTask);

// Вывод всех задач на экран
showTasks();

// Функция по созданию новой задачи
function createTask() {

    if (form.value == '') {
        return;
    }

    let taskDescription = form.value;

    let status = 'created';
    
    let task = {
        key: taskDescription,
        value: status
    };

    tasksList.push(task);

    localStorage.setItem(task.key, task.value);

    createTaskContainer(task);

    form.value = '';
}