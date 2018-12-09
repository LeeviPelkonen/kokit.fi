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
    json.forEach((image) => {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      title.innerHTML = image.title;
      li.appendChild(title);
      const img = document.createElement('img');
      img.src = 'rTHUMBNAIL/' + image.thumbnail;
      li.appendChild(img);
      list.appendChild(li);
    });
  });
};

getRecipes();