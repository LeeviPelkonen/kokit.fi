document.getElementById('login').addEventListener("click", close);
document.getElementById('logbutton').addEventListener("click", show);
document.getElementById('cancelbtn').addEventListener("click", reg)

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

// Get the modal
const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Get the modal
const modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
};