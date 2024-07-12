// Создание главного контейнера
let mainContainer = document.createElement('div');

document.body.appendChild(mainContainer);

mainContainer.id = 'main-container';



let chessDeck = new Array();

// Создание шахматных квадратов на шахматном поле и загрузка их в массив

let identificator = 1;

for (let i = 0; i < 8; i++) {
    let line = document.createElement('div');

    line.style.display = 'flex';


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

        chessDeck.push(chessBlock);

        identificator++;
    }

    mainContainer.appendChild(line);
}

console.log(chessDeck); 


// Размещение на шахматном поле шахматных фигур

for (let i = 0; i < chessDeck.length; i++) {
    if (chessDeck[i].id == 'field00' || chessDeck[i].id == 'field07') {

        let boatBlack = document.createElement('div');
        boatBlack.className = 'figure';
        boatBlack.style.width = '100px';
        boatBlack.style.height = '100px';
        boatBlack.style.backgroundImage = 'url(/chess_samara/bR.png)';
        boatBlack.style.backgroundRepeat = 'no-repeat';
        boatBlack.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(boatBlack);
    }

    if (chessDeck[i].id == 'field01' || chessDeck[i].id == 'field06') {

        let horseBlack = document.createElement('div');
        horseBlack.className = 'figure';
        horseBlack.style.width = '100px';
        horseBlack.style.height = '100px';
        horseBlack.style.backgroundImage = 'url(/chess_samara/bN.png)';
        horseBlack.style.backgroundRepeat = 'no-repeat';
        horseBlack.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(horseBlack);
    }

    if (chessDeck[i].id == 'field02' || chessDeck[i].id == 'field05') {

        let elephantBlack = document.createElement('div');
        elephantBlack.className = 'figure';
        elephantBlack.style.width = '100px';
        elephantBlack.style.height = '100px';
        elephantBlack.style.backgroundImage = 'url(/chess_samara/bB.png)';
        elephantBlack.style.backgroundRepeat = 'no-repeat';
        elephantBlack.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(elephantBlack);
    }

    if (chessDeck[i].id == 'field03') {

        let queenBlack = document.createElement('div');
        queenBlack.className = 'figure';
        queenBlack.style.width = '100px';
        queenBlack.style.height = '100px';
        queenBlack.style.backgroundImage = 'url(/chess_samara/bQ.png)';
        queenBlack.style.backgroundRepeat = 'no-repeat';
        queenBlack.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(queenBlack);

    }

    if (chessDeck[i].id == 'field04') {

        let kingBlack = document.createElement('div');
        kingBlack.className = 'figure';
        kingBlack.style.width = '100px';
        kingBlack.style.height = '100px';
        kingBlack.style.backgroundImage = 'url(/chess_samara/bK.png)';
        kingBlack.style.backgroundRepeat = 'no-repeat';
        kingBlack.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(kingBlack);
    }
    

    if ((chessDeck[i].id[5] == '1')) {
        let trooperBlack = document.createElement('div');
        trooperBlack.className = 'figure';
        trooperBlack.style.width = '100px';
        trooperBlack.style.height = '100px';
        trooperBlack.style.backgroundImage = 'url(/chess_samara/bP.png)';
        trooperBlack.style.backgroundRepeat = 'no-repeat';
        trooperBlack.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(trooperBlack);
    }

    if (chessDeck[i].id == 'field70' || chessDeck[i].id == 'field77') {

        let boatWhite = document.createElement('div');
        boatWhite.className = 'figure';
        boatWhite.style.width = '100px';
        boatWhite.style.height = '100px';
        boatWhite.style.backgroundImage = 'url(/chess_samara/wR.png)';
        boatWhite.style.backgroundRepeat = 'no-repeat';
        boatWhite.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(boatWhite);
    }

    if (chessDeck[i].id == 'field71' || chessDeck[i].id == 'field76') {

        let horseWhite = document.createElement('div');
        horseWhite.className = 'figure';
        horseWhite.style.width = '100px';
        horseWhite.style.height = '100px';
        horseWhite.style.backgroundImage = 'url(/chess_samara/wN.png)';
        horseWhite.style.backgroundRepeat = 'no-repeat';
        horseWhite.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(horseWhite);
    }

    if (chessDeck[i].id == 'field72' || chessDeck[i].id == 'field75') {

        let elephantWhite = document.createElement('div');
        elephantWhite.className = 'figure';
        elephantWhite.style.width = '100px';
        elephantWhite.style.height = '100px';
        elephantWhite.style.backgroundImage = 'url(/chess_samara/wB.png)';
        elephantWhite.style.backgroundRepeat = 'no-repeat';
        elephantWhite.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(elephantWhite);
    }

    if (chessDeck[i].id == 'field73') {

        let queenWhite = document.createElement('div');
        queenWhite.className = 'figure';
        queenWhite.style.width = '100px';
        queenWhite.style.height = '100px';
        queenWhite.style.backgroundImage = 'url(/chess_samara/wQ.png)';
        queenWhite.style.backgroundRepeat = 'no-repeat';
        queenWhite.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(queenWhite);

    }

    if (chessDeck[i].id == 'field74') {

        let kingWhite = document.createElement('div');
        kingWhite.className = 'figure';
        kingWhite.style.width = '100px';
        kingWhite.style.height = '100px';
        kingWhite.style.backgroundImage = 'url(/chess_samara/wK.png)';
        kingWhite.style.backgroundRepeat = 'no-repeat';
        kingWhite.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(kingWhite);
    }
    

    if ((chessDeck[i].id[5] == '6')) {
        let trooperWhite = document.createElement('div');
        trooperWhite.className = 'figure';
        trooperWhite.style.width = '100px';
        trooperWhite.style.height = '100px';
        trooperWhite.style.backgroundImage = 'url(/chess_samara/wP.png)';
        trooperWhite.style.backgroundRepeat = 'no-repeat';
        trooperWhite.style.backgroundSize = 'cover';
        chessDeck[i].appendChild(trooperWhite);
    }
}

// Логика шахматной игры

document.addEventListener('DOMContentLoaded', () => {
    let blackFigures = document.getElementsByClassName('figure');


    for(let i = 0; i < blackFigures.length; i++) {
    let offsetX, offsetY, isDragging = false;

    blackFigures[i].addEventListener('mousedown', function(event) {

        isDragging = true;
        offsetX = event.clientX - blackFigures[i].getBoundingClientRect().left;
        offsetY = event.clientY - blackFigures[i].getBoundingClientRect().top;


        blackFigures[i].style.cursor = 'grabbing';

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);


    });

    function onMouseMove(event) {
        if (isDragging) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;


            blackFigures[i].style.left = `${x}px`;
            blackFigures[i].style.top = `${y}px`;


        }
    }

    function onMouseUp(event) {
        isDragging = false;

        blackFigures[i].style.cursor = 'grab';

        let initialElement = document.elementFromPoint(event.clientX, event.clientY);

        console.log(initialElement);

        console.log(blackFigures[i]);

        console.log(event.offsetX + " : " + event.offsetY);
        console.log(event.clientX + " : " + event.offsetY);
        
        // Клетка, с которой фигура смещается
        let initialBlock  = initialElement.parentNode;

        console.log(initialBlock);

        console.log(initialElement.parentNode.id);

        let row = Math.floor(parseInt(blackFigures[i].style.top) / 100);
        let column = Math.floor(parseInt(blackFigures[i].style.left) / 100);
        

        console.log("Это координаты новые фигуры: " + blackFigures[i].style.left + " , " + blackFigures[i].style.top);

        // Клетка, НА которую фигура сместилась
        let finalBlock = document.getElementById(`field${row}${column}`);

        console.log(finalBlock);



        // Перемещение фигуры в нужный html-блок
        
        finalBlock.appendChild(initialElement);
        

        
       

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        
    }
}
});





/* document.addEventListener('click', function(event) {
    let element = document.elementFromPoint(event.clientX, event.clientY);
    console.log(element); 
}); */
    
/* document.addEventListener('DOMContentLoaded', () => {



}); */

