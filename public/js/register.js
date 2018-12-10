'use strict';

const form = document.querySelector('#register');
const password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

const registerForm = (evt) => {
    evt.preventDefault();
    const ff = new FormData(form);
    const settings = {
        method: 'use',
        body: ff,
    };

    fetch('/nodekek/register', settings).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    });
};

form.addEventListener('submit', registerForm);


function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  
  password.addEventListener('submit', validatePassword);
  confirm_password.addEventListener('submit', validatePassword);