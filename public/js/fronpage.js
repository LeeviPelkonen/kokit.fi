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
    var x = 0;
    json.forEach((rPICTURE) => {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      title.innerHTML = json[x].rNAME;
      li.appendChild(title);
      const img = document.createElement('img');
      img.src = json[0].rTHUMBNAIL;
      li.appendChild(img);
      list.appendChild(li);
      x++;
    });
  });
};

getRecipes();