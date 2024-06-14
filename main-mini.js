const navbar = document.querySelector(".navbar");
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    navbar.classList.toggle("expanded");
  });
const landing = document.querySelector(".landing-container");
function updateCountdown() {
  let e = new Date("2024-09-10T00:00:00Z"),
    s = new Date(),
    n = Math.ceil((e.getTime() - s.getTime()) / 864e5);
  document.querySelectorAll("#counting-days").forEach((e) => {
    e && (e.textContent = n);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let e = 1;
  setInterval(() => {
    landing.classList.remove(`background${e}`),
      (e = (e % 3) + 1),
      landing.classList.add(`background${e}`);
  }, 2e3);
}),
  updateCountdown(),
  setInterval(updateCountdown, 864e5);
const rightChevron = document.getElementById("chevron-right"),
  leftChevron = document.getElementById("chevron-left"),
  slides = document.querySelectorAll(".animation");
rightChevron.addEventListener("click", slideToRight),
  leftChevron.addEventListener("click", slideToLeft);
const lastSlideIndex = slides.length - 1;
let lock = !1,
  indexSlideOnScreen = 0;
function slideToRight() {
  lock ||
    ((lock = !0),
    slides[indexSlideOnScreen].classList.add("disparition-right"),
    slides[indexSlideOnScreen].classList.remove(
      ...["apparition-left", "apparition-right"]
    ),
    cleanClasses(indexSlideOnScreen),
    setTimeout(() => {
      indexSlideOnScreen + 1 > 2
        ? (slides[0].classList.remove("hidden"),
          slides[0].classList.add("apparition-right"))
        : (slides[indexSlideOnScreen + 1].classList.remove("hidden"),
          slides[indexSlideOnScreen + 1].classList.add("apparition-right")),
        indexSlideOnScreen === lastSlideIndex
          ? (indexSlideOnScreen = 0)
          : indexSlideOnScreen++,
        (lock = !1);
    }, 800));
}
function slideToLeft() {
  lock ||
    ((lock = !0),
    slides[indexSlideOnScreen].classList.add("disparition-left"),
    slides[indexSlideOnScreen].classList.remove(
      ...["apparition-left", "apparition-right"]
    ),
    cleanClasses(indexSlideOnScreen),
    setTimeout(() => {
      indexSlideOnScreen - 1 < 0
        ? (slides[lastSlideIndex].classList.remove("hidden"),
          slides[lastSlideIndex].classList.add("apparition-left"))
        : (slides[indexSlideOnScreen - 1].classList.remove("hidden"),
          slides[indexSlideOnScreen - 1].classList.add("apparition-left")),
        0 === indexSlideOnScreen
          ? (indexSlideOnScreen = lastSlideIndex)
          : indexSlideOnScreen--,
        (lock = !1);
    }, 800));
}
function cleanClasses(e) {
  let s = [
    "disparition-right",
    "disparition-left",
    "apparition-right",
    "apparition-left",
  ];
  0 === e
    ? (slides[e + 1].classList.remove(...s),
      slides[e + 1].classList.add("hidden"),
      slides[lastSlideIndex].classList.remove(...s),
      slides[lastSlideIndex].classList.add("hidden"))
    : e === lastSlideIndex
    ? (slides[e - 1].classList.remove(...s),
      slides[e - 1].classList.add("hidden"),
      slides[0].classList.remove(...s),
      slides[0].classList.add("hidden"))
    : (slides[e + 1].classList.remove(...s),
      slides[e + 1].classList.add("hidden"),
      slides[e - 1].classList.remove(...s),
      slides[e - 1].classList.add("hidden"));
}
$(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault(), $(".comments").empty();
    var s = $("#contactForm").serialize();
    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: s,
      dataType: "json",
      success: function (e) {
        e.isSuccess
          ? ($("#contactForm").append(
              "<p class='thank-you'> Votre message a bien \xe9t\xe9 envoy\xe9. Merci de nous avoir contact\xe9 :) </p>"
            ),
            $("#contactForm")[0].reset())
          : ($("#firstname + .comments").html(e.firstnameError),
            $("#name + .comments").html(e.nameError),
            $("#email + .comments").html(e.emailError),
            $("#phone + .comments").html(e.phoneError),
            $("#message + .comments").html(e.messageError));
      },
    });
  });
}),
  $(function () {
    $("#contactFormAsso").submit(function (e) {
      e.preventDefault(), $(".comments").empty();
      var s = $("#contactFormAsso").serialize();
      $.ajax({
        type: "POST",
        url: "php/contactAsso.php",
        data: s,
        dataType: "json",
        success: function (e) {
          e.isSuccess
            ? ($("#contactFormAsso").append(
                "<p class='thank-you'> Votre message a bien \xe9t\xe9 envoy\xe9. Merci de nous avoir contact\xe9 :) </p>"
              ),
              $("#contactFormAsso")[0].reset())
            : ($("#firstname + .comments").html(e.firstnameError),
              $("#name + .comments").html(e.nameError),
              $("#email + .comments").html(e.emailError),
              $("#phone + .comments").html(e.phoneError),
              $("#message + .comments").html(e.messageError));
        },
      });
    });
  }),
  $(function () {
    $("contactFormNewsletter").submit(function (e) {
      e.preventDefault(), $(".comments").empty();
      var s = $("contactFormNewsletter").serialize();
      $.ajax({
        type: "POST",
        url: "php/contactNewsletter.php",
        data: s,
        dataType: "json",
        success: function (e) {
          e.isSuccess
            ? ($("#contactFormNewsletter").append(
                "<p class='thank-you'> Votre adresse mail a bien \xe9t\xe9 envoy\xe9e. Merci ! \uD83D\uDE09 </p>"
              ),
              $("#contactFormNewsletter")[0].reset())
            : $("#email + .comments").html(e.emailError);
        },
      });
    });
  });
