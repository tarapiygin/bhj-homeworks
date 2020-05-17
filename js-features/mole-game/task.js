'use strict'
const DEAD = document.getElementById('dead');
const LOST = document.getElementById('lost');
function getHole(index) {
    return document.getElementById('hole' + index);
};

function clickProcessing(event) {
    const hole = event.path[0];
    if (hole.className.includes('hole_has-mole')) {
        DEAD.textContent = +DEAD.textContent + 1;
        if (DEAD.textContent == 10) {
            congratulation(true);
        };
    } else {
        LOST.textContent = +LOST.textContent + 1;
        if (LOST.textContent == 5) {
            congratulation(false);
        };
    };
};
function congratulation(win) {
    if (win) {
        alert('Вы победили');
    } else {
        alert('Вы проиграли');
    };
    LOST.textContent = 0;
    DEAD.textContent = 0;
};
for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = clickProcessing;
};