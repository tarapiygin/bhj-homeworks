"use strict"

function sliderClickHandler(event) {
    const slider = this.closest('.slider');
    const items = Array.from(slider.getElementsByClassName('slider__item'));
    const dotsList = Array.from(slider.getElementsByClassName('slider__dot'));
    const lastItemIndex = items.findIndex(elem => elem.classList.contains('slider__item_active'));
    const lastDot = dotsList.find(elem => elem.classList.contains('slider__dot_active'));
    let newItemIndex = 0;

    items[lastItemIndex].classList.remove('slider__item_active');

    if (lastDot !== undefined) {
        lastDot.classList.remove('slider__dot_active');
    }

    if (this.classList.contains('slider__arrow_next')) {
        if (lastItemIndex !== items.length - 1) {
            newItemIndex = lastItemIndex + 1;
        } else {
            newItemIndex = 0;
        };
    };

    if (this.classList.contains('slider__arrow_prev')) {
        if (lastItemIndex !== 0) {
            newItemIndex = lastItemIndex - 1;
        } else {
            newItemIndex = items.length - 1;
        };
    };

    if (this.classList.contains('slider__dot')) {
        newItemIndex = dotsList.findIndex(elem => elem === this);
    };

    items[newItemIndex].classList.add('slider__item_active');
    dotsList[newItemIndex].classList.add('slider__dot_active');
};

function slidersInit() {
    const sliders = Array.from(document.getElementsByClassName('slider'));
    sliders.forEach(slider => {
        const items = Array.from(slider.getElementsByClassName('slider__item'));
        const arrows = Array.from(slider.getElementsByClassName('slider__arrow'));
        const dots = Array.from(slider.getElementsByClassName('slider__dot'));
        arrows.forEach(item => item.addEventListener('click', sliderClickHandler));
        dots.forEach(item => item.addEventListener('click', sliderClickHandler));

        const activeItemIndex = items.findIndex(elem => elem.classList.contains('slider__item_active'));
        dots[activeItemIndex].classList.add('slider__dot_active');
    });
};

slidersInit();