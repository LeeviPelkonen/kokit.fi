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
        openRecipe(json[0].rID);
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
  console.log(x);
  sessionStorage.setItem('recipe', x);
  window.location.pathname = '/nodekek/recipedetails.html';
}