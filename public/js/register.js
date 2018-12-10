'use strict';

const shii = document.getElementById('register');
const password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

const registerForm = (evt) => {
    evt.preventDefault();
    ff = new FormData(shii);
    const settings = {
        method: 'post',
        body: ff,
    };

    fetch('/nodekek/register', settings).then((response) => {
        console.log(response.json());
        return response.json();
    }).then((json) => {
        console.log(json());
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
  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;