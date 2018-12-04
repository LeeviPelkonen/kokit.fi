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

// function increaseValue() {
//   console.log('working');
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }

document.getElementById('burger').addEventListener('click',openMenu);
document.getElementById('openSearch').addEventListener('click',openSearch);

// const addButton = document.getElementById("increase");

// addButton.addEventListener("click", (evt) => {
//   console.log(document.getElementById("increase"));
//   increaseValue();
// });

// addButton.addEventListener("mousedown", (evt) => {
//   addButton.classList.add("animationbutton");
//   console.log(addButton);
// });

document.getElementById('login').addEventListener("click", close);
document.getElementById('logbutton').addEventListener("click", show);
document.getElementById('cancelbtn').addEventListener("click", reg);
document.getElementById('closebtn').addEventListener("click", exit);

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

// Get the modal
const modal2 = document.getElementById('id02');
const modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal2 || event.target ===modal1) {
    modal2.style.display = "none";
    modal1.style.display = "none";
  }
};