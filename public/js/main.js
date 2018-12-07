'use strict';
//const testform = document.querySelector('#testform');
//const but = document.querySelector('#submitB');
// Get the modal
const modal2 = document.getElementById('id02');
const modal1 = document.getElementById('id01');
const login = document.getElementById('login');
const logbutton = document.getElementById('logbutton');
const cancelbtn = document.getElementById('cancelbtn');
const closebtn = document.getElementById('closebtn');
const burger = document.getElementById('burger');
const opensearch = document.getElementById('openSearchButton');


/*const testFunc = (evt) => {
  evt.preventDefault();
  const fd = new FormData(testform);

  const settings = {
    method: 'post',
    body: fd,
  };
  fetch('/upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
  });
};*/


function openSearch(evt) {
  evt.preventDefault();
  var x = document.querySelectorAll(".advsearch");
  x.forEach((li)=>{
    if (li.classList.contains('hiddenFull')) {
      li.classList.add('visibleFull');
      li.classList.remove('hiddenFull');
    } else {
      li.classList.add('hiddenFull');
      li.classList.remove('visibleFull');
    }
  })
  var y = document.querySelectorAll("#openSearchButton");
  y.forEach((li) => {
    if (li.classList.contains('fa-angle-down')) {
      li.classList.add('fa-angle-up');
      li.classList.remove('fa-angle-down');
    } else {
      li.classList.add('fa-angle-down');
      li.classList.remove('fa-angle-up');
    }
  })
}

function openMenu(evt) {
  evt.preventDefault();
  var x = document.querySelectorAll(".advnav");
  x.forEach((li) => {
    if (li.classList.contains('hidden')) {
      li.classList.add('visible');
      li.classList.remove('hidden');
    } else {
      li.classList.remove('visible');
      li.classList.add('hidden');
    }
  })
}

function show() {
  document.getElementById('id01').style.display="block";
}

function close() {
  document.getElementById('id01').style.display="none";
}

function reg() {
  document.getElementById('id01').style.display="none";
  document.getElementById('id02').style.display="block";
}

function exit() {
  document.getElementById('id02').style.display="none";
}



login.addEventListener("click", close);
logbutton.addEventListener("click", show);
cancelbtn.addEventListener("click", reg);
closebtn.addEventListener("click", exit);
opensearch.addEventListener('click', openSearch);
burger.addEventListener('click', openMenu);


// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal2 || event.target === modal1) {
    modal2.style.display = "none";
    modal1.style.display = "none";
  }
};
/*

but.addEventListener('click', (e) => {
  console.log("click");
  document.querySelector('#testtextt').innerHTML = "Working";
  fetch('/conDb', {method: 'POST'})
  .then((response) =>{
    if(response.ok){
      return;
    }
  });
});
*/


//testform.addEventListener('submit', testFunc);
