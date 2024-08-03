// Массив с кадрами футболиста
let frames = ['first.png', 'second.png', 'third.png', 'fourth.png', 'fifth.png'];

let hitBallSound = new Audio('ball-hit.mp3');
let happyCrowd = new Audio('crowd-delirious.mp3');


let box = document.getElementById('box');

box.style.backgroundImage = 'url(pictures/first.png)';

let ball = document.createElement('div');

ball.style.width = '40px';
ball.style.height = '40px';

ball.style.backgroundImage = 'url(pictures/ball.png)';
ball.style.backgroundSize = 'cover';

ball.style.position = 'absolute';

ball.style.left = '160px';
ball.style.top = '230px';

document.body.appendChild(ball);



box.addEventListener('click', () => {
    interval = setInterval(changeFrames, 100);
});


function changeFrames() {
    for (let i = 0; i < frames.length; i++) {
        let frame = i;
        if(frame > 4) {
            clearInterval(interval);
        }
        else {
            box.style.backgroundImage = `url(pictures/${frames[frame]})`;
            if (frame == 4) {
                animateBall();
                hitBallSound.play();
                happyCrowd.play();
                clearInterval(interval);
            }
        }
    }   
}

function animateBall() {
    ball.style.transition = 'transform 2s';
    ball.style.transform = 'rotate(4turn)';

    ball.style.animation = 'ballMoving 2.5s linear';
}
