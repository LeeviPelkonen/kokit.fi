'use strict';

const list = document.querySelector('#recipelist');

const getRecipes = () => {
    const settings = {
        method: 'get',
      };
  fetch('/nodekek/recipes', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    list.innerHTML = '';
    let x = 0;
    json.forEach((rPICTURE) => {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      const time = document.createElement('h3');
      title.innerHTML = json[x].rNAME;
      time.innerHTML = prepTime(json[x].rPREPTIME);
      li.appendChild(title);
      li.appendChild(time);
      const img = document.createElement('img');
      img.src = './thumbnails/' + json[x].rTHUMBNAIL;
      img.addEventListener('click', () => {
        openRecipe();
      });
      console.log(json[x].rTHUMBNAIL);
      li.appendChild(img);
      list.appendChild(li);
      x++;
    });
  });
};

getRecipes();

const prepTime= (x) => {
  if(x > 60){
    let y = (x/60).toFixed(1);
    return y + ' h';
  }else return x + ' min';
}

const openRecipe= (x) => {
  window.location.pathname = '/recipedetails.html';
  fetch('/nodekek/images/'+json[x].rID).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    userName.innerText = "Username: " + json[0].uUSERNAME;
    fullName.innerText = "Name: " + json[0].uFNAME + " " + json[0].uLNAME;
    dateJoined.innerText = "Date joined: " + json[0].uDATEJOINED;
  })
}