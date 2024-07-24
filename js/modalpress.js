//MODAL AVEYRONAIS

const AveyronaisModal = document.getElementById("AveyronaisModal");
const AveyronaisBtn = document.getElementById("AveyronaisModalTrigger");
const Aveyronaisspan = document.getElementById("close-aveyronais");
AveyronaisBtn.onclick = function () {
  AveyronaisModal.style.display = "block";
};

Aveyronaisspan.onclick = function () {
  AveyronaisModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == AveyronaisModal) {
    AveyronaisModal.style.display = "none";
  }
};
