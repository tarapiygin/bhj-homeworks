"use strict"
class Slider {
    constructor(sliderItem) {
        this.element = sliderItem.closest('.slider');
        this.items = Array.from(this.element.getElementsByClassName('slider__item'));
        this.dotsList = Array.from(this.element.getElementsByClassName('slider__dot'));
        this.lastItemIndex = this.items.findIndex(elem => elem.classList.contains('slider__item_active'));
        this.lastDot = this.dotsList.find(elem => elem.classList.contains('slider__dot_active'));
        this.newItemIndex = 0;
    };
    nextSlide() {
        if (this.lastItemIndex !== this.items.length - 1) {
            this.newItemIndex = this.lastItemIndex + 1;
        };
    };
    prevSlide() {
        if (this.lastItemIndex !== 0) {
            this.newItemIndex = this.lastItemIndex - 1;
        } else {
            this.newItemIndex = this.items.length - 1;
        };
    };
    findSlide(requiredElement) {
        this.newItemIndex = this.dotsList.findIndex(elem => elem === requiredElement);
    };
    showSlide() {
        this.items[this.lastItemIndex].classList.remove('slider__item_active');
        if (this.lastDot !== undefined) {
            this.lastDot.classList.remove('slider__dot_active');
        }
        this.items[this.newItemIndex].classList.add('slider__item_active');
        this.dotsList[this.newItemIndex].classList.add('slider__dot_active');
    };
};

function sliderClickHandler(event) {
    const slider = new Slider(this);
    if (this.classList.contains('slider__arrow_next')) {
        slider.nextSlide();
    };

    if (this.classList.contains('slider__arrow_prev')) {
        slider.prevSlide();
    };

    if (this.classList.contains('slider__dot')) {
        slider.findSlide(this);
    };
    slider.showSlide();
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