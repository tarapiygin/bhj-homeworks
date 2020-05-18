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
function popUpmain() {
    const popUp = document.getElementById('modal_main');
    const OffElements = Array.from(popUp.getElementsByClassName('modal__close'));
    const SuccessElements = Array.from(popUp.getElementsByClassName('show-success'));
    OffElements.forEach(element => {
        element.onclick = clickHandler;
    });
    SuccessElements.forEach(element => {
        element.onclick = clickHandler;
    });
    popUpOn(popUp);
};
function popUpSuccess() {
    const popUp = document.getElementById('modal_success');
    const OffElements = Array.from(popUp.getElementsByClassName('modal__close'));
    const SuccessElements = Array.from(popUp.getElementsByClassName('show-success'));
    OffElements.forEach(element => {
        element.onclick = clickHandler;
    });
    SuccessElements.forEach(element => {
        element.onclick = clickHandler;
    });
    popUpOn(popUp);
};
popUpmain();