'use strict';

const increase = document.getElementById("increase");
const decrease =document.getElementById("decrease");
const image = document.getElementById("foodimage");
const userName = document.getElementById("username");

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
    const settingsUser = {
    method: 'post',
      body: JSON.stringify({
        uID: json[0].rUSERID,
      }),
  };
    fetch('/nodekek/users', settingsUser).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      userName.innerText = json[0].uFNAME;
    })

  });
};

getImage();
increase.addEventListener("click", increaseValue);
decrease.addEventListener("click", decreaseValue);