'use strict';
// Get the modal
const modal2 = document.getElementById('id02');
const modal1 = document.getElementById('id01');
const loginform = document.getElementById('loginform');


const lbutton = document.getElementById('lbutton');
const login = document.getElementById('login');
const logbutton = document.getElementById('logbutton');
const cancelbtn = document.getElementById('cancelbtn');
const closebtn = document.getElementById('closebtn');

const burger = document.getElementById('burger');
const opensearch = document.getElementById('openSearchButton');

//opens advanced search
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
    //changes arrows pointing direction
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

//opens burgermenu when on mobile
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

//These small functions work for the modal and close and switch the content inside it.
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

const loginEvent = (evt) => {
  evt.preventDefault();
  const ff = new FormData(loginform);
  const settings = {
    method: 'post',
    body: ff,
  };
  fetch('/nodekek/login', settings).then((response) => {
    console.log(response.json());
    return response.json();
  }).then((json) => {
    console.log(json());
  });
};

//lbutton.addEventListener('submit', loginEvent);

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
