let paragraph = document.getElementById('paragraph');

let text = '';

let isShift = false;


// Обеспечивает создание текста, оперируя одиночными символами и проверяя регистр

document.addEventListener('keydown', (event) => {
    
    if (event.shiftKey == false  && event.key.length == 1) {

        if (isShift == true) {

            text += event.key.toUpperCase();
        }

        else {
            text += event.key;
        }
        
        paragraph.textContent = text;
    }
});


// Обеспечивает смену регистра и удаление символов с конца строки

document.addEventListener('keyup', (event) => {
    switch(event.key) {
        case "Shift":
            isShift = !isShift;
        break;
        case "Backspace":
            text = text.substring(0, text.length - 1);
            paragraph.textContent = text;
        break;
    }
    
});