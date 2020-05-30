'use strict'

function preloader() {
    const loaderImg = document.getElementById('loader');
    const items = document.getElementById('items');
    const localOutput = localStorage.getItem('output');
    if(localOutput !== null){
        debugger;
        items.innerHTML = localOutput;
        loaderImg.classList.remove('loader_active');
    }
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === xhr.DONE && this.status === 200) {
            const data = JSON.parse(this.responseText);
            const valute = data['response']['Valute'];
            let output = ''
            for (let key in valute){
                const template = `<div class="item">
                <div class="item__code">${valute[key]['CharCode']}</div>
                <div class="item__value">${valute[key]['Value']}</div>
                <div class="item__currency">руб.</div>
                </div>
                `
                output += template;
            }
            items.innerHTML = output;
            loaderImg.classList.remove('loader_active');
            localStorage.setItem('output', output);
        }
    });
    xhr.send();
}
preloader();