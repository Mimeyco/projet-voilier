//NAVBAR
const navbar = document.querySelector(".navbar");
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    navbar.classList.toggle("expanded");
  });

// SOUS MENU

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const body = document.querySelector("body");
const isMobile = window.matchMedia("(max-width: 767px)").matches;
const isTablet = window.matchMedia(
  "(min-width: 768px) and (max-width: 1024px)"
).matches;
document.addEventListener("DOMContentLoaded", function () {
  if (isMobile || isTablet) {
    dropdown.addEventListener("touchstart", (e) => {
      dropdownContent.style.display = "block";
      body.addEventListener("touchstart", (e) => {
        const parent = e.target.closest(".dropdown");
        if (!parent) {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    });
  }
});

// COMPTE A REBOURS DEPART

function updateCountdown() {
  // Date cible de départ (10 septembre 2024)
  let targetDate = new Date("2024-09-21T00:00:00Z");
  let currentDate = new Date();
  let timeDifference = targetDate.getTime() - currentDate.getTime();
  let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Affichage dans le span avec l'id "countdown"
  let countdownSpan = document.querySelectorAll("#counting-days");
  countdownSpan.forEach((e) => {
    if (e) {
      e.textContent = daysRemaining;
    }
  });
}

updateCountdown();
// Mise à jour toutes les 24 heures (86400000 millisecondes)
setInterval(updateCountdown, 86400000);
