'use strict'

class TaskManager {
    constructor() {
        this.taskListElement = document.getElementById('tasks__list');
        this.taskList = [];
        this.formInput = document.getElementById('task__input');

        this.registerEvents();
    }

    addTask() {
        const title = this.formInput.value;
        if (title !== '') {
            const newTask = this.createTask(title);
            this.taskListElement.insertAdjacentElement('beforeend', newTask);
            newTask.getElementsByClassName('task__remove')[0].addEventListener('click', this.revomeTask);
            this.formInput.value = '';
        }
    }

    revomeTask(e) {
        this.closest('.task').remove();
    }

    createTask(title) {
        const elem = document.createElement('div');
        elem.classList.add('task');
        elem.innerHTML = `<div class="task__title">${title}</div>
        <a href="#" class="task__remove">&times;</a>`
        return elem;
    }

    registerEvents(){
        const button = document.getElementById('tasks__add');
        button.type = 'submit';
        const form = button.closest('.tasks__control');
        form.addEventListener('submit', submitHandler);
        const taskManager = this;
        function submitHandler(e){
            e.preventDefault();
            taskManager.addTask();
        }

    }
}

new TaskManager();
