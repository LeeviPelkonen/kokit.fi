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
          console.log(li.firstChild.classList);
          li.classList.add('visible');
          li.classList.remove('hidden');
      } else {
          li.classList.remove('visible');
          li.classList.add('hidden');
      }
  })
}

function increaseValue() {
  console.log('working');
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
document.getElementById('burger').addEventListener('click',openMenu);
document.getElementById('openSearch').addEventListener('click',openSearch);


const addButton = document.getElementById("increase");
addButton.addEventListener("click", (evt) => {
  console.log(document.getElementById("increase"));
  increaseValue();
});

addButton.addEventListener("mousedown", (evt) => {
  addButton.classList.add("animationbutton");
  console.log(addButton);
});