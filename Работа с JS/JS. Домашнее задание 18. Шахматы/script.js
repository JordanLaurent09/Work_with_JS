// Создание главного контейнера
let mainContainer = document.createElement('div');

document.body.appendChild(mainContainer);

mainContainer.id = 'main-container';



let chessDeck = new Array();



// Создание шахматных квадратов на шахматном поле и загрузка их в массив


for (let i = 0; i < 8; i++) {
    let line = document.createElement('div');

    line.style.display = 'flex';

    let chessLine = new Array();

    for (let j = 0; j < 8; j++) {

        let chessBlock = document.createElement('div');

        chessBlock.style.height = '100px';
        chessBlock.style.width = '100px';

        if ((j + i) % 2 == 0) {

        chessBlock.style.backgroundColor = '#FFD0BB';
        }

        else {
        chessBlock.style.backgroundColor = 'brown';
        }

        chessBlock.id = `field${i}${j}`;

        line.appendChild(chessBlock);

        chessLine.push(chessBlock);

    }

    mainContainer.appendChild(line);

    chessDeck.push(chessLine);
    
}

console.log(chessDeck); 


// Размещение на шахматном поле шахматных фигур    

for (let i = 0; i < chessDeck.length; i++) {
    for(let j = 0; j < chessDeck[i].length; j++) {
        if (i == 0 && (j == 0 || j == 7)) {
            let boatBlack = document.createElement('div');
            boatBlack.className = 'figure';
            boatBlack.id = 'black';
            boatBlack.style.width = '100px';
            boatBlack.style.height = '100px';
            boatBlack.style.backgroundImage = 'url(chess_samara/bR.png)';
            boatBlack.style.backgroundRepeat = 'no-repeat';
            boatBlack.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(boatBlack);
        }

        if (i == 0 && (j == 1 || j == 6)) {
            let horseBlack = document.createElement('div');
            horseBlack.className = 'figure';
            horseBlack.id = 'black';
            horseBlack.style.width = '100px';
            horseBlack.style.height = '100px';
            horseBlack.style.backgroundImage = 'url(chess_samara/bN.png)';
            horseBlack.style.backgroundRepeat = 'no-repeat';
            horseBlack.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(horseBlack);
        }

        if (i == 0 && (j == 2 || j == 5)) {
            let elephantBlack = document.createElement('div');
            elephantBlack.className = 'figure';
            elephantBlack.id = 'black';
            elephantBlack.style.width = '100px';
            elephantBlack.style.height = '100px';
            elephantBlack.style.backgroundImage = 'url(chess_samara/bB.png)';
            elephantBlack.style.backgroundRepeat = 'no-repeat';
            elephantBlack.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(elephantBlack);
        }

        if (i == 0 && j == 3) {
            let queenBlack = document.createElement('div');
            queenBlack.className = 'figure';
            queenBlack.id = 'black';
            queenBlack.style.width = '100px';
            queenBlack.style.height = '100px';
            queenBlack.style.backgroundImage = 'url(chess_samara/bQ.png)';
            queenBlack.style.backgroundRepeat = 'no-repeat';
            queenBlack.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(queenBlack);
        }

        if (i == 0 && j == 4) {
            let kingBlack = document.createElement('div');
            kingBlack.className = 'figure';
            kingBlack.id = 'black';
            kingBlack.style.width = '100px';
            kingBlack.style.height = '100px';
            kingBlack.style.backgroundImage = 'url(chess_samara/bK.png)';
            kingBlack.style.backgroundRepeat = 'no-repeat';
            kingBlack.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(kingBlack);
        }

        if (i == 1) {
            let trooperBlack = document.createElement('div');
            trooperBlack.className = 'figure';
            trooperBlack.id = 'black';
            trooperBlack.style.width = '100px';
            trooperBlack.style.height = '100px';
            trooperBlack.style.backgroundImage = 'url(chess_samara/bP.png)';
            trooperBlack.style.backgroundRepeat = 'no-repeat';
            trooperBlack.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(trooperBlack);
        }

        if (i == 7 && (j == 0 || j == 7)) {
            let boatWhite = document.createElement('div');
            boatWhite.className = 'figure';
            boatWhite.id = 'white';
            boatWhite.style.width = '100px';
            boatWhite.style.height = '100px';
            boatWhite.style.backgroundImage = 'url(chess_samara/wR.png)';
            boatWhite.style.backgroundRepeat = 'no-repeat';
            boatWhite.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(boatWhite);
        }

        if (i == 7 && (j == 1 || j == 6)) {
            let horseWhite = document.createElement('div');
            horseWhite.className = 'figure';
            horseWhite.id = 'white';
            horseWhite.style.width = '100px';
            horseWhite.style.height = '100px';
            horseWhite.style.backgroundImage = 'url(chess_samara/wN.png)';
            horseWhite.style.backgroundRepeat = 'no-repeat';
            horseWhite.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(horseWhite);
        }

        if (i == 7 && (j == 2 || j == 5)) {
            let elephantWhite = document.createElement('div');
            elephantWhite.className = 'figure';
            elephantWhite.id = 'white';
            elephantWhite.style.width = '100px';
            elephantWhite.style.height = '100px';
            elephantWhite.style.backgroundImage = 'url(chess_samara/wB.png)';
            elephantWhite.style.backgroundRepeat = 'no-repeat';
            elephantWhite.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(elephantWhite);
        }

        if (i == 7 && j == 3) {
            let queenWhite = document.createElement('div');
            queenWhite.className = 'figure';
            queenWhite.id = 'white';
            queenWhite.style.width = '100px';
            queenWhite.style.height = '100px';
            queenWhite.style.backgroundImage = 'url(chess_samara/wQ.png)';
            queenWhite.style.backgroundRepeat = 'no-repeat';
            queenWhite.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(queenWhite);
        }

        if (i == 7 && j == 4) {
            let kingWhite = document.createElement('div');
            kingWhite.className = 'figure';
            kingWhite.id = 'white';
            kingWhite.style.width = '100px';
            kingWhite.style.height = '100px';
            kingWhite.style.backgroundImage = 'url(chess_samara/wK.png)';
            kingWhite.style.backgroundRepeat = 'no-repeat';
            kingWhite.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(kingWhite);
        }

        if (i == 6) {
            let trooperWhite = document.createElement('div');
            trooperWhite.className = 'figure';
            trooperWhite.id = 'white';
            trooperWhite.style.width = '100px';
            trooperWhite.style.height = '100px';
            trooperWhite.style.backgroundImage = 'url(chess_samara/wP.png)';
            trooperWhite.style.backgroundRepeat = 'no-repeat';
            trooperWhite.style.backgroundSize = 'cover';
            chessDeck[i][j].appendChild(trooperWhite);
        }
    }
}

// Логика шахматной игры

document.addEventListener('DOMContentLoaded', () => {
    let blackFigures = document.getElementsByClassName('figure');


    for(let i = 0; i < blackFigures.length; i++) {
    let offsetX, offsetY, isDragging = false;

    let figure = blackFigures[i];

    figure.addEventListener('mousedown', function(event) {

        

        console.log(figure);

        isDragging = true;
        offsetX = event.clientX - figure.getBoundingClientRect().left;
        offsetY = event.clientY - figure.getBoundingClientRect().top;


        figure.style.cursor = 'grabbing';

        // Начинаем тащить элемент отсюда

        let initialBlock = event.target;
        console.log(initialBlock);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);


    });

    function onMouseMove(event) {
        if (isDragging) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;

            figure.style.left = `${x}px`;
            figure.style.top = `${y}px`;

        }
    }

    function onMouseUp() {
        isDragging = false;

        figure.style.cursor = 'grab';

        let row = Math.floor(parseInt(figure.style.top) / 100);
        let column = Math.floor(parseInt(figure.style.left) / 100);

        console.log("Это координаты новые фигуры: " + figure.style.left + " , " + figure.style.top);

        // Клетка, НА которую фигура сместилась
        let finalBlock = document.getElementById(`field${row}${column}`);

        // Элемент помещается прямиком в массив
        for (let j = 0; j < chessDeck.length; j++) {
            for (let k = 0; k < chessDeck[j].length; k++) {
                if (chessDeck[j][k].id === `field${row}${column}`) {
                    figure.style.top = null;
                    figure.style.left = null;
                    chessDeck[j][k].appendChild(figure);

                    let childFigure = finalBlock.childNodes[0];
                    
                    if (childFigure.id === 'black' && figure.id == 'white' || childFigure.id === 'white' && figure.id == 'black') {
                        finalBlock.removeChild(childFigure);
                        alert("Удар! Еще удар!");
                    } 
                    if (finalBlock.childNodes.length > 1) {
                        alert("Не стреляй, братишка!");
                    }
                    
                }
            }
        }

        console.log(finalBlock);

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        
    }
}
});
