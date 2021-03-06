'use strict';
const frm = document.querySelector('#mediaform');
/*
Listen to Add recipe -form and insert information from form to database
 */
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


frm.addEventListener('submit', sendForm);