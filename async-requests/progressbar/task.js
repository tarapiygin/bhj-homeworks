'use strict'

const form = document.getElementById('form');
const progress = document.getElementById('progress');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.upload.addEventListener("progress", uploadProgress, false);

    function uploadProgress(e) {
        const percentComplete = e.loaded / e.total;
        progress.value = percentComplete;

    }
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.send(formData);
});