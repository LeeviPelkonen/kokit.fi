'use strict';

const increase = document.getElementById("increase");
const decrease =document.getElementById("decrease");
const image = document.getElementById("foodimage");
const userName = document.getElementById("username");
const fullName = document.getElementById("fullname");
const foodName = document.getElementById("foodname");

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
    foodName.innerText = json[0].rNAME;
    fetch('/nodekek/user/'+json[0].rUSERID).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      userName.innerText = json[0].uUSERNAME;
      fullName.innerText = '${json[0].uFNAME} + ${json[0].uFNAME}';
    })
  });
};

getImage();
increase.addEventListener("click", increaseValue);
decrease.addEventListener("click", decreaseValue);