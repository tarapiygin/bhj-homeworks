'use strict'

class PopUp {
    constructor() {
        this.element = document.getElementById('subscribe-modal');
        this.popUpstate = localStorage.getItem('popUpstate');
        this.closeButton = this.element.getElementsByClassName('modal__close')[0]

        this.registerEvents();
    }
    show() {
        if(this.popUpstate !== 'true'){
            this.element.classList.add('modal_active');
            localStorage.popUpstate = true;
        }
    }
    disable() {
        this.element.classList.remove('modal_active');
    }
    registerEvents(){
        const popUp = this;
        function showPopUp(){
            popUp.show();
        }
        function disablePopUp(){
            popUp.disable();
        }
        window.addEventListener('load', showPopUp);
        popUp.closeButton.addEventListener('click', disablePopUp);
    }
}
new PopUp();