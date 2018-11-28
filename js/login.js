document.getElementById('login').addEventListener("click", close);
document.getElementById('logbutton').addEventListener("click", show);

function show() {
  document.getElementById('id01').style.display="block";
}

function close() {
  document.getElementById('id01').style.display="none";
}

// Get the modal
const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};