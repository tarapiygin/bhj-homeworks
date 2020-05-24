'use strict'
class Rotator {
    constructor(elem) {
        this.element = elem;
        this.cases = Array.from(elem.getElementsByClassName('rotator__case'));
        this.activeIndex = this.cases.findIndex(elem => elem.classList.contains('rotator__case_active'));
        this.nextTimeOut = 1000;
        this.cases[this.activeIndex].style.color = this.cases[this.activeIndex].dataset['color'];
    };
    nextCase() {
        this.cases[this.activeIndex].classList.remove('rotator__case_active');
        if (this.activeIndex < this.cases.length - 1) {
            this.activeIndex = this.activeIndex + 1;
        } else {
            this.activeIndex = 0;
        };
        this.cases[this.activeIndex].classList.add('rotator__case_active');
        this.cases[this.activeIndex].style.color = this.cases[this.activeIndex].dataset['color'];
        this.nextTimeOut = +this.cases[this.activeIndex].dataset['speed'];
    };
}

function adsRotatorInit() {
    const rotatorsElem = Array.from(document.getElementsByClassName('rotator'));
    const rotatorsList = []
    rotatorsElem.forEach(elem => {
        const rotator = new Rotator(elem);
        rotatorsList.push(rotator);
    });
    let time = Date.now();
    setInterval(() => {
        rotatorsList.forEach(rotator => {
            debugger;
            if (Date.now() - time >= rotator.nextTimeOut) {
                time = Date.now();
                rotator.nextCase();
            };
        });
    })
};
adsRotatorInit();