'use strict'
class Book {
    constructor(element) {
        this.element = element;
        this.sizeControls = Array.from(element.getElementsByClassName('font-size'));
        this.colorControls = Array.from(element.getElementsByClassName('book__control_color')[0].getElementsByClassName('color'));
        this.bgControls = Array.from(element.getElementsByClassName('book__control_background')[0].getElementsByClassName('color'));
        this.contentClassList = element.getElementsByClassName('book__content')[0].classList;

        this.registerEvents()
    }
    changeSize(controlItem) {
        let defaultStyle = 'book_fs-';

        const activeStyle = this.sizeControls.find(item => item === controlItem);
        const index = Array.from(this.contentClassList).findIndex(element => element.includes(defaultStyle));
        this.contentClassList.remove(defaultStyle + 'big');
        this.contentClassList.remove(defaultStyle + 'small');
        if (activeStyle.dataset['size'] !== null) {
            this.contentClassList.add(defaultStyle + activeStyle.dataset['size']);
        }
    };
    changeColor(controlItem) {
        let defaultStyle = 'book_color-';

        const activeStyle = this.colorControls.find(item => item === controlItem);
        const index = Array.from(this.contentClassList).findIndex(element => element.includes(defaultStyle));
        this.contentClassList.remove(defaultStyle + 'gray');
        this.contentClassList.remove(defaultStyle + 'whitesmoke');
        if (activeStyle.dataset['color'] !== null) {
            this.contentClassList.add(defaultStyle + activeStyle.dataset['color']);
        }
    };
    changeBackground(controlItem) {
        let defaultStyle = 'book_bg-';

        const activeStyle = this.bgControls.find(item => item === controlItem);
        const index = Array.from(this.contentClassList).findIndex(element => element.includes(defaultStyle));
        this.contentClassList.remove(defaultStyle + 'black');
        this.contentClassList.remove(defaultStyle + 'gray');
        if (activeStyle.dataset['color'] !== null) {
            this.contentClassList.add(defaultStyle + activeStyle.dataset['color']);
        }

    };
    registerEvents() {
        const book = this;
        function eventHundler(e) {
            e.preventDefault();
            if (book.sizeControls.includes(this)) {
                book.changeSize(this);
            } else if (book.colorControls.includes(this)) {
                book.changeColor(this);
            } else {
                book.changeBackground(this);
            }
        };
        this.sizeControls.forEach(item => {
            item.addEventListener('click', eventHundler);
        });
        this.colorControls.forEach(item => {
            item.addEventListener('click', eventHundler);
        });
        this.bgControls.forEach(item => {
            item.addEventListener('click', eventHundler);
        });
    }
};

new Book(document.getElementById('book'));