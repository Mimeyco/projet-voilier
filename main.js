// DEFILEMENT IMAGES LANDING
const landing = document.querySelector(".landing-container");
console.log(landing.classList);

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
