'use strict';

const list = document.querySelector('#recipelist');
const searchButt = document.getElementById('searchButton');
let title = '';

const getRecipes = (x) => {
    console.log('getting recipes');
    const settings = {
        method: 'get',
    };
    if (x == '') {
        fetch('/nodekek/recipes', settings).then((response) => {
            return response.json();
        }).then((json) => {
            //console.log(json);
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
                    const id = json[x].rID;
                    img.addEventListener('click', () => {
                        openRecipe(id);
                    });
                    title.addEventListener('click', () => {
                        openRecipe(id);
                    });
                    //console.log(json[x].rTHUMBNAIL);
                    li.appendChild(img);
                    list.appendChild(li);
                    x++;
            });
        });
    } else {
        fetch('/nodekek/recipes', settings).then((response) => {
            return response.json();
        }).then((json) => {
            //console.log(json);
            list.innerHTML = '';
            let x = 0;
            json.forEach((rPICTURE) => {
                //console.log('searching recipe by name');
                //console.log((json[x].rNAME));
                //console.log((title));
                const name = (json[x].rNAME).toLowerCase;
                const search = title.toLowerCase;
                if (name.includes(search)) {
                    //console.log('sfound one');
                    const li = document.createElement('li');
                    const title = document.createElement('h3');
                    const time = document.createElement('h3');
                    title.innerHTML = json[x].rNAME;
                    time.innerHTML = prepTime(json[x].rPREPTIME);
                    li.appendChild(title);
                    li.appendChild(time);
                    const img = document.createElement('img');
                    img.src = './thumbnails/' + json[x].rTHUMBNAIL;
                    const id = json[x].rID;
                    img.addEventListener('click', () => {
                        openRecipe(id);
                    });
                    title.addEventListener('click', () => {
                        openRecipe(id);
                    });
                    //console.log(json[x].rTHUMBNAIL);
                    li.appendChild(img);
                    list.appendChild(li);
                };
                x++;
            });
        });
    }
};

getRecipes(title);

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

const searchRecipes = () => {
    title = document.querySelector('#searchKeyword').value;
    //console.log(title);
    getRecipes(title);
};

searchButt.addEventListener('click',searchRecipes);