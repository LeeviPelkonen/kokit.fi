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


// When the user clicks anywhere outside of the modal, close it
// window.onclick = event1 => {
//   if (event1.target === modal1) {
//     modal1.style.display = "none";
//   }
// };

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