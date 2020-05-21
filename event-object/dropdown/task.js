'use strict'
class DropDown {
    constructor(element) {
        this.element = element;
        this.value = element.getElementsByClassName('dropdown__value')[0];
        this.list = element.getElementsByClassName('dropdown__list')[0];
        this.items = Array.from(element.getElementsByClassName('dropdown__item'));
    }
    showList() {
        this.list.classList.add('dropdown__list_active');
    };
    hideList() {
        this.list.classList.remove('dropdown__list_active');
    };
    startListeningEvents(listHandler, itemHandler) {
        this.value.addEventListener('click', listHandler);
        this.items.forEach(item => {
            item.addEventListener('click', itemHandler);
        });
    };
};

function clickListHandler(e) {
    const dropDown = new DropDown(this.closest('.dropdown'));
    if (dropDown.list.classList.contains('dropdown__list_active')) {
        dropDown.hideList();
    } else {
        dropDown.showList();
    };
};

function clickItemHandler(e) {
    e.preventDefault()
    const dropDown = new DropDown(this.closest('.dropdown'));
    dropDown.value.textContent = this.textContent;
    dropDown.hideList();
};

function init() {
    const dropDownItems = Array.from(document.getElementsByClassName('dropdown'));
    dropDownItems.forEach(element => {
        const dropDown = new DropDown(element);
        dropDown.startListeningEvents(clickListHandler, clickItemHandler);
    });
};
init();