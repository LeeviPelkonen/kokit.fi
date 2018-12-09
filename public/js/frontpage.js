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
      const time = document.createElement('h4');
      title.innerHTML = json[x].rNAME;
      time.innerHTML = prepTime;
      li.appendChild(title);
      li.appendChild(time);
      const img = document.createElement('img');
      img.src = './thumbnails/' + json[x].rTHUMBNAIL;
      console.log(json[x].rTHUMBNAIL);
      li.appendChild(img);
      list.appendChild(li);
      x++;
    });
  });
};

getRecipes();

const prepTime= () => {
  if(json[x].rPREPTIME > 60){
    let x = json[x].rPREPTIME/60;
    let y = x.toFixed(2);
    return y + ' H';
  }else return json[x].rPREPTIME + ' min';
}