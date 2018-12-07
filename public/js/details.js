'use strict';

const increase = document.getElementById("increase");
const decrease =document.getElementById("decrease");
const image = document.getElementById("foodimage");

function increaseValue() {
  console.log('working');
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;

}

function decreaseValue() {
  console.log('working');
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById('number').value = value;

}

const getImage = () => {
  const fd = new FormData(frm);
  const settings = {
    method: 'get',
    body: fd,
  };

  fetch('/nodekek/images', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    image.src = json.src;
  });
};

getImage();
increase.addEventListener("click", increaseValue);
decrease.addEventListener("click", decreaseValue);