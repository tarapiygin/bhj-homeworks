'use strict'
class Chat {
    constructor(elem) {
        this.element = elem;
        this.input = document.getElementsByClassName('chat-widget__input')[0];
        this.itemMessages = document.getElementsByClassName('chat-widget__messages')[0];
        this.robotMessages = ['Привет симпотяга!', 'Я люблю томаты, а ты?', 'Хочешь анекдот?', 'Я так не думаю']
        this.listMessages = this.element.getElementsByClassName('message');
        this.timerMessage = Date.now();

        this.addRobotMessage = this.addRobotMessage.bind(this);
        this.showLastMessage = this.showLastMessage.bind(this);
        this.getTime = this.getTime.bind(this);
        
        this.registerEvents();
        this.registerBot();
    };
    activate(status) {
        if (status) {
            this.element.classList.add('chat-widget_active');
        } else {
            this.element.classList.remove('chat-widget_active');
        };
    };
    validateMessage() {
        if (this.input.value !== '') {
            return true;
        }
        return false;
    }
    addClientMessage() {
        const text = this.input.value;
        const time = this.getTime();
        this.itemMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${text}</div>
        </div>`;
        this.input.value = '';
        this.timerMessage = Date.now();
    }
    addRobotMessage() {
        const time = this.getTime();
        const text = this.robotMessages[getRandomInt(0, this.robotMessages.length)];
        this.itemMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${text}</div>
        </div>`;
    }
    showLastMessage() {
        const listMessages = Array.from(this.listMessages);
        const lastMessage = listMessages[listMessages.length - 1];
        lastMessage.scrollIntoView(false);
    }
    getTime(date = new Date()) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    }
    registerEvents() {
        this.input.addEventListener('keydown', inputHadnler);
        this.element.addEventListener('click', clickHadnler);
        window.addEventListener('click', clickHadnler);
        const chat = this
        function inputHadnler(e) {
            if (e.code == 'Enter') {
                if (chat.validateMessage()) {
                    chat.addClientMessage();
                    chat.showLastMessage();
                    chat.addRobotMessage();
                    chat.showLastMessage();
                }
            };
        };

        function clickHadnler(e) {
            if (this === chat.element) {
                chat.activate(true);
                e.stopPropagation();
            } else {
                chat.activate(false);
            }
        };
    };
    registerBot() {
        const delay = 30000;
        const chat = this;

        setInterval(() => {
            if (chat.element.classList.contains('chat-widget_active')) {
                if (Date.now() - chat.timerMessage > delay) {
                    chat.addRobotMessage();
                    chat.showLastMessage();
                    chat.timerMessage = Date.now();
                };
            };
        }, 1000);
    };
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

new Chat(document.getElementsByClassName('chat-widget')[0]);