'use strict'



class Product {
    constructor(elem) {
        this.element = elem.closest('.product');
        this.elementInBasket = {
            'show': false,
            'element': '',
            'quantity': ''
        }
        this.id = this.element.dataset.id;
        this.img = this.element.getElementsByClassName('product__image')[0];
        this.controlDec = this.element.getElementsByClassName('product__quantity-control_dec')[0];
        this.controlInc = this.element.getElementsByClassName('product__quantity-control_inc')[0];
        this.quantity = this.element.getElementsByClassName('product__quantity-value')[0];
        this.productAddButton = this.element.getElementsByClassName('product__add')[0];
        this.basketElement = document.getElementsByClassName('cart__products')[0];


        this.registerEvents();
    }
    showInBacket() {
        if (this.quantity.textContent > 0) {
            if (this.elementInBasket.show) {
                this.elementInBasket.quantity.textContent = this.quantity.textContent;
            } else {
                const element = document.createElement('div');
                element.dataset.id = this.id;
                element.innerHTML = `
            <img class="cart__product-image" src="${this.img.src}">
            <div class="cart__product-count">${this.quantity.textContent}</div>
            `;

                this.basketElement.insertAdjacentElement('beforeend', element);
                this.elementInBasket = {
                    'show': true,
                    'element': element,
                    'quantity': element.getElementsByClassName('cart__product-count')[0]
                }
            }
        } else {
            this.elementInBasket.element.remove();
            this.elementInBasket = {
                'show': false,
                'element': '',
                'quantity': ''
            }
        }
    }

    registerEvents() {
        const product = this;

        function controlsHadnler(e) {
            let quantity = parseInt(product.quantity.textContent);
            if (this === product.controlDec) {
                quantity -= 1;
            } else {
                quantity += 1;
            }

            if (quantity > 0) {
                product.quantity.textContent = quantity;
            } else {
                product.quantity.textContent = 0;
            }
        }
        function addHadnler(e) {
            product.showInBacket();
        }
        this.controlDec.addEventListener('click', controlsHadnler);
        this.controlInc.addEventListener('click', controlsHadnler);
        this.productAddButton.addEventListener('click', addHadnler);
    }
}

class Basket {
    constructor() {
        this.productList = [];

        this.init();
    }

    init() {
        const products = Array.from(document.getElementsByClassName('product'));
        products.forEach(item => {
            const productObj = new Product(item);
            this.productList.push(productObj);
        })
    }
}
new Basket();