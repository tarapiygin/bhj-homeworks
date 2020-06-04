'use strict'

class Editor{
    constructor(){
        this.element = document.getElementById('editor');
        this.deleteElement = document.getElementById('editor__delete');
        this.date = '';


        this.downloadDate();
        this.registerEvents();
    }
    readDate(){
        this.date = this.element.value;
    }
    downloadDate(){
       const date = localStorage.getItem('date');
       if(date !== null){
           this.element.value = date;
       }
    }
    saveDate(){
        localStorage.date = this.date;
    }
    deleteDate(){
        this.element.value = '';
        localStorage.removeItem('date');
    }
    registerEvents(){
        const editor = this;
        function inputHundler(e){
            editor.readDate();
            editor.saveDate();
        }
        function deleteHundler(e){
            editor.deleteDate();
            editor.saveDate();
        }
        editor.element.addEventListener('input', inputHundler);
        editor.deleteElement.addEventListener('click', deleteHundler)
    }
}
new Editor();