'use strict'

class Poll {
    constructor() {
        this.titleElement = document.getElementById('poll__title');
        this.answersListElement = document.getElementById('poll__answers');
        this.qTitle = '';
        this.qAnswers = '';
        this.qId = '';

        this.getQuestion();
    }
    getQuestion() {
        const pool = this;
        const request = new XMLHttpRequest();
        request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
        request.addEventListener('readystatechange', function () {
            if (this.readyState === request.DONE && this.status === 200) {
                const response = JSON.parse(this.responseText);
                pool.qId = response['id'];
                pool.qTitle = response['data']['title'];
                pool.qAnswers = response['data']['answers'];
                pool.showQuestion();
            }
        });
        request.send();
        
    }
    showQuestion() {
        this.titleElement.textContent = this.qTitle;

        let answersOutput = '';
        this.qAnswers.forEach(answer => {
            answersOutput += `<button class="poll__answer">${answer}</button>`;
        });
        this.answersListElement.innerHTML = answersOutput;
        this.registerEvent()
    }
    sendAnswer(answer){
        const poll = this;
        const answerIndex = poll.qAnswers.findIndex(item => item === answer.textContent);
        const query = `vote=${poll.qId}&answer=${answerIndex}`;
        const request = new XMLHttpRequest;
        request.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
        request.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        request.addEventListener('readystatechange', function () {
            if (this.readyState === request.DONE && this.status === 200) {
                const response = JSON.parse(this.responseText);
                poll.showResult(response['stat']);
            }
        });
        request.send(query);
    }
    showResult(stat){
        let output = '';
        stat.forEach(obj=>{
            output+= `<div>${obj['answer']}: ${obj['votes']}</div>`
        })
        this.answersListElement.innerHTML = output;
    }
    registerEvent() {
        const pool = this;
        const answersList = Array.from(this.answersListElement.getElementsByClassName('poll__answer'));
        answersList.forEach(element => {
            element.addEventListener('click', responseButtonHandler);
        })
        function responseButtonHandler(e){
            alert('Спасибо, ваш голос засчитан!');
            pool.sendAnswer(this);
        }
    }
}
new Poll();