var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openBtn");
var okeyBtn = document.getElementById("okeyBtn");
var closeBtn = document.getElementById("closeBtn");
var closeModalX = document.getElementsByClassName("close")[0];

openBtn.onclick = function() {
  modal.classList.remove("hidden-transition");
  modal.classList.add("visible-transition");
	closeModalX.focus();
}

const closeModal = function() {
  modal.classList.remove("visible-transition");
  modal.classList.add("hidden-transition");
}

closeModalX.onclick = closeModal;
okeyBtn.onclick = closeModal;
closeBtn.onclick = closeModal;

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("visible-transition");
    modal.classList.add("hidden-transition");
  }
}