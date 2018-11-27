function openSearch() {
  var x = document.getElementById("advsearch");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
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

const addButton = document.getElementById("increase");
addButton.addEventListener("click", (evt) => {
  console.log(document.getElementById("increase"));
  increaseValue();
});

addButton.addEventListener("mousedown", (evt) => {
  addButton.classList.add("animationbutton");
  console.log(addButton);
});


