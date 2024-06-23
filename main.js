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

//MODAL
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("modalTrigger");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
