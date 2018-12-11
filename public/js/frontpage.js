'use strict';

const list = document.querySelector('#recipelist');
const searchButt = document.getElementById('searchButton');
const quickButt = document.getElementById('quickButton');
let title = '';


//Gets recipes to the frontpage
const getRecipes = (x) => {
    console.log('getting recipes');
    const settings = {
        method: 'get',
    };

    //Shows all the recipes when there is no keyword
    if (x == '') {
        fetch('/nodekek/recipes', settings).then((response) => {
            return response.json();
        }).then((json) => {
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
                    li.appendChild(img);
                    list.appendChild(li);
                    x++;
            });
            });

        //shows all quick recipes
    } if (x == 'quick') {
        fetch('/nodekek/recipes', settings).then((response) => {
            return response.json();
        }).then((json) => {
            list.innerHTML = '';
            let x = 0;
            json.forEach((rPICTURE) => {
                if (json[x].rPREPTIME < 50) { 
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
                li.appendChild(img);
                list.appendChild(li);
                }
                x++;
            });
        });
    } else {

        //shows recipes using keywords
        fetch('/nodekek/recipes', settings).then((response) => {
            return response.json();
        }).then((json) => {
            list.innerHTML = '';
            let x = 0;
            json.forEach((rPICTURE) => {
                const name = (json[x].rNAME).toLowerCase();
                const search = title.toLowerCase();
                if (name.includes(search)) {
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
                    li.appendChild(img);
                    list.appendChild(li);
                };
                x++;
            });
        });
    }
};

getRecipes(title);


//changes time to hours if the preperation time is over 60mins
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
    getRecipes(title);
};

const searchQuick = () => {
    title = 'quick';
    getRecipes(title);
};

searchButt.addEventListener('click', searchRecipes);
quickButt.addEventListener('click', searchQuick);