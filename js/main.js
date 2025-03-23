// DEFILEMENT IMAGES LANDING
const landing = document.querySelector(".landing-container");

document.addEventListener("DOMContentLoaded", function () {
  let i = 1;
  setInterval(() => {
    landing.classList.remove(`background${i}`);
    i = (i % 8) + 1;
    landing.classList.add(`background${i}`);
  }, 5000);
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

//SLIDER TRAJETS
const slidesTrajet = [...document.querySelectorAll(".slide-trajet")];

const sliderTrajetData = {
  locked: false,
  direction: 0,
  slideOutIndex: 0,
  slideInIndex: 0,
};

const directionTrajetButtons = [
  ...document.querySelectorAll(".direction-trajet-btn"),
];

directionTrajetButtons.forEach((btn) =>
  btn.addEventListener("click", handleClickTrajet)
);

function handleClickTrajet(e) {
  if (sliderTrajetData.locked) return;
  sliderTrajetData.locked = true;
  getDirectionTrajet(e.target);
  slideOutTrajet();
}

function getDirectionTrajet(btn) {
  sliderTrajetData.direction = btn.className.includes("right") ? 1 : -1;

  sliderTrajetData.slideOutIndex = slidesTrajet.findIndex((slide) =>
    slide.classList.contains("active")
  );

  if (
    sliderTrajetData.slideOutIndex + sliderTrajetData.direction >
    slidesTrajet.length - 1
  ) {
    sliderTrajetData.slideInIndex = 0;
  } else if (sliderTrajetData.slideOutIndex + sliderTrajetData.direction < 0) {
    sliderTrajetData.slideInIndex = slidesTrajet.length - 1;
  } else {
    sliderTrajetData.slideInIndex =
      sliderTrajetData.slideOutIndex + sliderTrajetData.direction;
  }
}

function slideOutTrajet() {
  slideAnimation({
    el: slidesTrajet[sliderTrajetData.slideInIndex],
    props: {
      display: "flex",
      transform: `translateX(${
        sliderTrajetData.direction < 0 ? "100%" : "-100%"
      })`,
      opacity: 0,
    },
  });

  slidesTrajet[sliderTrajetData.slideOutIndex].addEventListener(
    "transitionend",
    slideInTrajet
  );

  slideAnimationTrajet({
    el: slidesTrajet[sliderTrajetData.slideOutIndex],
    props: {
      transition:
        "transform 0.4s cubic-bezier(0.74, -0.34, 1, 1.19), opacity 0.4s ease-out",
      transform: `translateX(${
        sliderTrajetData.direction < 0 ? "-100%" : "100%"
      })`,
      opacity: 0,
    },
  });
}

function slideAnimationTrajet(animationObject) {
  for (const prop in animationObject.props) {
    animationObject.el.style[prop] = animationObject.props[prop];
  }
}

function slideInTrajet(e) {
  slideAnimationTrajet({
    el: slidesTrajet[sliderTrajetData.slideInIndex],
    props: {
      transition: "transform 0.4s ease-out, opacity 0.6s ease-out",
      transform: "translateX(0%)",
      opacity: 1,
    },
  });
  slidesTrajet[sliderTrajetData.slideInIndex].classList.add("active");

  slidesTrajet[sliderTrajetData.slideOutIndex].classList.remove("active");
  e.target.removeEventListener("transitionend", slideIn);
  slidesTrajet[sliderTrajetData.slideOutIndex].style.display = "none";

  setTimeout(() => {
    sliderTrajetData.locked = false;
  }, 400);
}

//SLIDER CHAT GPT

const slides = [...document.querySelectorAll(".slide")];

const sliderData = {
  locked: false,
  direction: 0,
  slideOutIndex: 0,
  slideInIndex: 0,
};

const directionButtons = [...document.querySelectorAll(".direction-btn")];

directionButtons.forEach((btn) =>
  btn.addEventListener("click", (e) =>
    handleClick(e.target.className.includes("right") ? 1 : -1, true)
  )
);

// Variable pour stocker l'identifiant de l'intervalle
let autoScrollInterval;
// Variable pour détecter un clic utilisateur
let userClicked = false;

function handleClick(direction, isUserClick = false) {
  if (sliderData.locked) return;
  sliderData.locked = true;
  sliderData.direction = direction;

  getDirection();

  slideOut();

  // Si l'utilisateur a cliqué, arrêter le défilement automatique
  if (isUserClick) {
    userClicked = true;
    clearInterval(autoScrollInterval);
  }
}

function getDirection() {
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
      // transform: `translateX(${sliderData.direction < 0 ? "100%" : "-100%"})`,
      opacity: 0,
    },
  });

  slides[sliderData.slideOutIndex].addEventListener("transitionend", slideIn);

  slideAnimation({
    el: slides[sliderData.slideOutIndex],
    props: {
      transition:
        "transform 0.4s cubic-bezier(0.74, -0.34, 1, 1.19), opacity 0.4s ease-out",
      // transform: `translateX(${sliderData.direction < 0 ? "-100%" : "100%"})`,
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
      // transform: "translateX(0%)",
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

// Fonction de défilement automatique
function autoScroll() {
  if (!userClicked) {
    handleClick(1);
  }
}

// Déclencher le défilement automatique toutes les secondes et stocker l'identifiant de l'intervalle
autoScrollInterval = setInterval(autoScroll, 5000);
