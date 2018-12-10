'use strict';
const frm = document.querySelector('#mediaform');

const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('/nodekek/upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
  });
};


//frm.addEventListener('submit', sendForm);