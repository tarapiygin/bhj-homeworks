'use-strict'

const COOKIE = document.getElementById('cookie');
const COUNTER = document.getElementById('clicker__counter');
const SPEED = document.getElementById('clicker__speed');
let TIMEFIRSTCLICK = Date.now()
COOKIE.onclick = ()=>{
    const speedClick = Math.round(1 /  ((Date.now() - TIMEFIRSTCLICK) / 1000)* 100) / 100;
    TIMEFIRSTCLICK = Date.now();
    let index = +COUNTER.textContent + 1;
    COUNTER.textContent = index;
    SPEED.textContent = speedClick;
    if(index % 2 == 0){
        COOKIE.width = '150';
    } else{
        COOKIE.width = '200';
    };
};