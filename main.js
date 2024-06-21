//NAVBAR
const navbar = document.querySelector(".navbar");
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    navbar.classList.toggle("expanded");
  });

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

//SLIDER
const slides = [...document.querySelectorAll(".slide")];

const sliderData = {
  locked: false,
  direction: 0,
  slideOutIndex: 0,
  slideInIndex: 0,
};

const directionButtons = [...document.querySelectorAll(".direction-btn")];

directionButtons.forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(e) {
  if (sliderData.locked) return;
  sliderData.locked = true;
  console.log(e);
  getDirection(e.target);

  slideOut();
}

function getDirection(btn) {
  sliderData.direction = btn.className.includes("right") ? 1 : -1;

  sliderData.slideOutIndex = slides.findIndex((slide) =>
    slide.classList.contains("active")
  );

  if (sliderData.slideOutIndex + sliderData.direction > slides.length - 1) {
    sliderData.slideInIndex = 0;
  } else if (sliderData.slideOutIndex + sliderData.direction < 0) {
    sliderData.slideInIndex = slides.length - 1;
  } else {
    sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
  }
}

function slideOut() {
  slideAnimation({
    el: slides[sliderData.slideInIndex],
    props: {
      display: "flex",
      transform: `translateX(${sliderData.direction < 0 ? "100%" : "-100%"})`,
      opacity: 0,
    },
  });

  slides[sliderData.slideOutIndex].addEventListener("transitionend", slideIn);

  slideAnimation({
    el: slides[sliderData.slideOutIndex],
    props: {
      transition:
        "transform 0.4s cubic-bezier(0.74, -0.34, 1, 1.19), opacity 0.4s ease-out",
      transform: `translateX(${sliderData.direction < 0 ? "-100%" : "100%"})`,
      opacity: 0,
    },
  });
}

function slideAnimation(animationObject) {
  for (const prop in animationObject.props) {
    animationObject.el.style[prop] = animationObject.props[prop];
  }
}

function slideIn(e) {
  slideAnimation({
    el: slides[sliderData.slideInIndex],
    props: {
      transition: "transform 0.4s ease-out, opacity 0.6s ease-out",
      transform: "translateX(0%)",
      opacity: 1,
    },
  });
  slides[sliderData.slideInIndex].classList.add("active");

  slides[sliderData.slideOutIndex].classList.remove("active");
  e.target.removeEventListener("transitionend", slideIn);
  slides[sliderData.slideOutIndex].style.display = "none";

  setTimeout(() => {
    sliderData.locked = false;
  }, 400);
}

// GESTION DE L'ENVOI DES FORMULAIRE DE CONTACT

//FORMULAIRE PAGE ACCUEIL
$(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    $(".comments").empty();
    var postdata = $("#contactForm").serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: postdata,
      dataType: "json",
      success: function (result) {
        if (result.isSuccess) {
          $("#contactForm").append(
            "<p class='thank-you'> Votre message a bien été envoyé. Merci de m'avoir contacté 😀 </p>"
          );
          $("#contactForm")[0].reset();
        } else {
          $("#firstname + .comments").html(result.firstnameError);
          $("#name + .comments").html(result.nameError);
          $("#email + .comments").html(result.emailError);
          $("#phone + .comments").html(result.phoneError);
          $("#message + .comments").html(result.messageError);
        }
      },
    });
  });
});
//FORMULAIRE NEWSLETTER
$(function () {
  $("#contactFormNewsletter").submit(function (e) {
    e.preventDefault();
    $(".commentsNewsletter").empty();
    var postdata = $("#contactFormNewsletter").serialize();

    $.ajax({
      type: "POST",
      url: "php/contactNewsletter.php",
      data: postdata,
      dataType: "json",
      success: function (result) {
        if (result.isSuccess) {
          $("#contactFormNewsletter").append(
            "<p class='thank-you'> Votre adresse mail a bien été envoyée. Merci ! 😉 </p>"
          );
          $("#contactFormNewsletter")[0].reset();
        } else {
          $("#emailNewsletter + .commentsNewsletter").html(result.emailError);
        }
      },
    });
  });
});
