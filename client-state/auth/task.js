'use strict'
class AuthManager {
    constructor() {
        this.formElement = document.getElementById('signin');
        this.form = document.getElementById('signin__form');
        this.logOutElement = document.getElementById('logout__btn');
        this.welcomeElement = document.getElementById('welcome');
        this.url = 'https://netology-slow-rest.herokuapp.com/auth.php';
        this.userId = localStorage.getItem('userId');


        this.registerEvents();
    }

    sendForm() {
        const authManager = this;
        const formData = new FormData(authManager.form);
        const request = new XMLHttpRequest();
        request.open("POST", authManager.url);
        request.addEventListener('readystatechange', function () {
            if (this.readyState === request.DONE && this.status === 200) {
                const response = JSON.parse(this.responseText);
                if (response['success']) {
                    authManager.saveUser(response['user_id']);
                    authManager.form.reset();
                    authManager.showWelcome();
                } else {
                    authManager.form.reset();
                    alert('Неверные данные для входа!');
                }
            }
        });
        request.send(formData);
    }
    showWelcome() {
        this.formElement.classList.remove('signin_active');
        const welcomeText = document.getElementById('user_id');
        welcomeText.textContent = this.userId;
        this.welcomeElement.classList.add('welcome_active');
    }

    showForm() {
        const welcomeText = document.getElementById('user_id');
        welcomeText.textContent = '';
        this.welcomeElement.classList.remove('welcome_active');
        this.formElement.classList.add('signin_active');
    }

    saveUser(id) {
        this.userId = id;
        localStorage.setItem('userId', id);
    }

    logOut() {
        this.userId = null;
        localStorage.removeItem('userId');
        this.showForm();
    }
    registerEvents() {
        const authManager = this;
        if (authManager.userId !== null) {
            authManager.showWelcome();
        } else {
            authManager.showForm();
        }
        function logOutHandler(e) {
            authManager.logOut();
        }
        authManager.logOutElement.addEventListener('click', logOutHandler);

        function submitHandler(e) {
            e.preventDefault();
            authManager.sendForm();
        }

        authManager.form.addEventListener('submit', submitHandler);

    }
}
new AuthManager();