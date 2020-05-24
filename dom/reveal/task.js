'use strict'

function scrollHandler() {
    const reveals = Array.from(document.getElementsByClassName('reveal'));
    reveals.forEach(elem => {
        const elemTop = elem.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elemTop <= viewportHeight / 2) {
            elem.classList.add('reveal_active');
        }
    })
}

window.addEventListener('scroll', scrollHandler);