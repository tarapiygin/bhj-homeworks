'use strict'

class PopUp {
    constructor() {
        this.element = document.getElementById('subscribe-modal');
        this.popUpstate = getCoockie('popupstate');
        this.closeButton = this.element.getElementsByClassName('modal__close')[0]

        this.registerEvents();
    }
    show() {
        if (this.popUpstate !== 'true') {
            this.element.classList.add('modal_active');
        }
    }
    disable() {
        this.element.classList.remove('modal_active');
        // let date = new Date(new D);
        document.cookie = 'popupstate=true';
    }
    registerEvents() {
        const popUp = this;
        function showPopUp() {
            popUp.show();
        }
        function disablePopUp() {
            popUp.disable();
        }
        window.addEventListener('load', showPopUp);
        popUp.closeButton.addEventListener('click', disablePopUp);
    }
}
new PopUp();


function getCoockie(name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}