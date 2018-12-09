'use strict';

const increase = document.getElementById("increase");
const decrease =document.getElementById("decrease");
const image = document.getElementById("foodimage");
const userName = document.getElementById("username");
const fullName = document.getElementById("fullname");
const dateJoined = document.getElementById("datejoined");
const description = document.getElementById("description");
const instructions = document.getElementById("instructions");
const foodName = document.getElementById("foodname");
const ingredientslist = document.getElementById("ingredientlist");

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
let x = sessionStorage.getItem('recipe');
  const settings = {
    method: 'get',
  };
console.log(x);
  fetch('/nodekek/images/'+x, settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json[0]);
    image.src = './uploads/' + json[0].rPICTURE;
    foodName.innerText = json[0].rNAME;
    instructions.innerText = json[0].rINSTRUCTIONS;
    description.innerText = json[0].rDESCRIPTION;
    const ingredients = json[0].rINGREDIENTS.split(',');
    ingredientslist.innerHTML = '';
    ingredients.forEach((item) => {
      const li = document.createElement('li');
      const par = document.createElement('p');
      //par.classList.add('ingredientitem');
      par.innerText = item.toString();
      li.appendChild(par);
      ingredientslist.appendChild(par);
    });


    fetch('/nodekek/user/'+json[0].rUSERID).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      userName.innerText = "Username: " + json[0].uUSERNAME;
      fullName.innerText = "Name: " + json[0].uFNAME + " " + json[0].uLNAME;
      dateJoined.innerText = "Date joined: " + json[0].uDATEJOINED;
    })
  });
};

getImage();
increase.addEventListener("click", increaseValue);
decrease.addEventListener("click", decreaseValue);