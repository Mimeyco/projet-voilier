// DEFILEMENT IMAGES LANDING
const landing = document.querySelector(".landing-container");

document.addEventListener("DOMContentLoaded", function () {
  let i = 1;
  setInterval(() => {
    landing.classList.remove(`background${i}`);
    i = (i % 3) + 1;
    landing.classList.add(`background${i}`);
  }, 2000);
});

// COMPTE A REBOURS DEPART

function updateCountdown() {
  // Date cible de départ (10 septembre 2024)
  let targetDate = new Date("2024-09-10T00:00:00Z");
  let currentDate = new Date();
  let timeDifference = targetDate.getTime() - currentDate.getTime();
  let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Affichage dans le span avec l'id "countdown"
  let countdownSpan = document.getElementById("counting-days");
  if (countdownSpan) {
    countdownSpan.textContent = daysRemaining;
  }
}

updateCountdown();
// Mise à jour toutes les 24 heures (86400000 millisecondes)
setInterval(updateCountdown, 86400000);

//SLIDER

const rightChevron = document.getElementById("chevron-right");
const leftChevron = document.getElementById("chevron-left");
const slides = document.querySelectorAll(".animation");

rightChevron.addEventListener("click", slideToRight);
leftChevron.addEventListener("click", slideToLeft);

const lastSlideIndex = slides.length - 1;

let lock = false;
let indexSlideOnScreen = 0;
function slideToRight() {
  if (!lock) {
    lock = true;
    slides[indexSlideOnScreen].classList.add("disparition-right");
    slides[indexSlideOnScreen].classList.remove(
      ...["apparition-left", "apparition-right"]
    );
    cleanClasses(indexSlideOnScreen);
    setTimeout(() => {
      if (indexSlideOnScreen + 1 > 2) {
        slides[0].classList.remove("hidden");
        slides[0].classList.add("apparition-right");
      } else {
        slides[indexSlideOnScreen + 1].classList.remove("hidden");
        slides[indexSlideOnScreen + 1].classList.add("apparition-right");
      }
      if (indexSlideOnScreen === lastSlideIndex) {
        indexSlideOnScreen = 0;
      } else {
        indexSlideOnScreen++;
      }
      lock = false;
    }, 800);
  }
}

function slideToLeft() {
  if (!lock) {
    lock = true;
    slides[indexSlideOnScreen].classList.add("disparition-left");
    slides[indexSlideOnScreen].classList.remove(
      ...["apparition-left", "apparition-right"]
    );
    cleanClasses(indexSlideOnScreen);
    setTimeout(() => {
      if (indexSlideOnScreen - 1 < 0) {
        slides[lastSlideIndex].classList.remove("hidden");
        slides[lastSlideIndex].classList.add("apparition-left");
      } else {
        slides[indexSlideOnScreen - 1].classList.remove("hidden");
        slides[indexSlideOnScreen - 1].classList.add("apparition-left");
      }
      if (indexSlideOnScreen === 0) {
        indexSlideOnScreen = lastSlideIndex;
      } else {
        indexSlideOnScreen--;
      }
      lock = false;
    }, 800);
  }
}

function cleanClasses(index) {
  let classesToRemove = [
    "disparition-right",
    "disparition-left",
    "apparition-right",
    "apparition-left",
  ];
  if (index === 0) {
    slides[index + 1].classList.remove(...classesToRemove);
    slides[index + 1].classList.add("hidden");
    slides[lastSlideIndex].classList.remove(...classesToRemove);
    slides[lastSlideIndex].classList.add("hidden");
  } else if (index === lastSlideIndex) {
    slides[index - 1].classList.remove(...classesToRemove);
    slides[index - 1].classList.add("hidden");
    slides[0].classList.remove(...classesToRemove);
    slides[0].classList.add("hidden");
  } else {
    slides[index + 1].classList.remove(...classesToRemove);
    slides[index + 1].classList.add("hidden");
    slides[index - 1].classList.remove(...classesToRemove);
    slides[index - 1].classList.add("hidden");
  }
}
