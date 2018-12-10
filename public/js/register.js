'use strict';

const form = document.querySelector('#register');

const registerForm = (evt) => {
    evt.preventDefault();
    const ff = new FormData(form);
    const settings = {
        method: 'post',
        body: ff,
    };

    fetch('/nodekek/register', settings).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    });
};

form.addEventListener('submit', registerForm);