'use strict'
let TIMER = document.getElementById('timer');
// debugger;

function timeParser(str) {
    let milliSeconds = 0;
    if (str.includes(':')) {
        const seconds = parseInt(str.slice(6));
        const minutes = parseInt(str.slice(3, 6));
        const hour = parseInt(str.slice(0, 3));
        milliSeconds += seconds * 1000 + minutes * 60 * 1000 + hour * 60 * 60 * 1000;
    } else { milliSeconds = parseInt(str) * 1000; }

    return milliSeconds;
};

function timeDisplay(milliSeconds) {
    const time = milliSeconds;
    let str = '';
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));  
    if (hours < 10) {
        str += '0'+ hours;
    } else {
        str += hours;
    };
    if (minutes < 10) {
        str += ':0' + minutes;
    } else {
        str += ':' + minutes;
    };
    if (seconds < 10) {
        str += ':0' + seconds;
    } else {
        str += ':' + seconds;
    };
    return str;
};

function downloadFile(){
    const hiddenLink = document.createElement('a');
    hiddenLink.hidden = true;
    hiddenLink.href = 'https://netology.ru/backend/tilda/images/tild3534-3531-4936-b066-343062643662__logo-17.png';
    hiddenLink.target='_blank';
    hiddenLink.download = true;
    hiddenLink.click()
};
function popUpDisplay(){
    const container = document.getElementById('status');
    const popUp = document.createElement('div');
    const popUpContent = document.createElement('div');
    popUp.className = 'popup';
    popUp.onclick = popUp.remove;
    popUp.de
    popUpContent.className = 'popup-content';
    popUpContent.textContent = 'Вы победили в конкурсе';
    popUp.append(popUpContent)
    container.after(popUp)
};
let COUNT = timeParser(TIMER.textContent);
const intervalId = setInterval(() => {
    COUNT = COUNT - 1000;
    if (COUNT < 0) {
        clearInterval(intervalId);
        TIMER.textContent = timeDisplay(0);
        popUpDisplay()
        downloadFile();
    } else{
        TIMER.textContent = timeDisplay(COUNT);
    };
    
}, 1000);


