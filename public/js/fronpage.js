'use strict';

const list = document.querySelector('#recipelist');

const getRecipes = () => {
  fetch('/recipes').then((response) => {
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
      img.addEventListener('click', () => {
        fillUpdate(image);
      });
      li.appendChild(img);
      list.appendChild(li);
    });
  });
};

getRecipes();