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
  const settings = {
    method: 'get',
  };

  fetch('/nodekek/images', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json[0]);
    image.src = './uploads/' + json[0].rPICTURE;
  });
};

getImage();
increase.addEventListener("click", increaseValue);
decrease.addEventListener("click", decreaseValue);