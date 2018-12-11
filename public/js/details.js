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

//Changes the details to the specified recipe
const getImage = () => {

// Get the text field that we're going to track
let recipe = sessionStorage.getItem('recipe');
 console.log('recipe = ' + recipe);
// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  recipe.value = sessionStorage.getItem("autosave");
  console.log('from autosave = ' + recipe);
};
  const settings = {
    method: 'get',
};
  fetch('/nodekek/images/'+recipe, settings).then((response) => {
    return response.json();
  }).then((json) => {
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
      userName.innerText = "Username: " + json[0].uUSERNAME;
      fullName.innerText = "Name: " + json[0].uFNAME + " " + json[0].uLNAME;
      dateJoined.innerText = "Date joined: " + json[0].uDATEJOINED;
    })
  });
};

getImage();
increase.addEventListener("click", increaseValue);
decrease.addEventListener("click", decreaseValue);