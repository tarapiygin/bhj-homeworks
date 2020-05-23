'use strict'
function popUpOn(elem) {
    elem.classList.add('modal_active');
};
function clickHandler(event) {
    if (event.currentTarget.classList.contains('show-success')) {
        popUpSuccess()
    };
    event.currentTarget.closest('.modal_active').classList.remove('modal_active');

};
function popUpMain() {
    const popUp = document.getElementById('modal_main');
    const offElements = Array.from(popUp.getElementsByClassName('modal__close'));
    const successElements = Array.from(popUp.getElementsByClassName('show-success'));
    offElements.forEach(element => {
        element.onclick = clickHandler;
    });
    successElements.forEach(element => {
        element.onclick = clickHandler;
    });
    popUpOn(popUp);
};
function popUpSuccess() {
    const popUp = document.getElementById('modal_success');
    const offElements = Array.from(popUp.getElementsByClassName('modal__close'));
    const successElements = Array.from(popUp.getElementsByClassName('show-success'));
    offElements.forEach(element => {
        element.onclick = clickHandler;
    });
    successElements.forEach(element => {
        element.onclick = clickHandler;
    });
    popUpOn(popUp);
};
popUpmain();