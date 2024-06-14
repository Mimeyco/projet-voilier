//NAVBAR
const navbar = document.querySelector(".navbar");
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    navbar.classList.toggle("expanded");
  });
//FORMULAIRE PAGE ASSO
$(function () {
  $("#contactFormAsso").submit(function (e) {
    e.preventDefault();
    $(".comments").empty();
    var postdata = $("#contactFormAsso").serialize();

    $.ajax({
      type: "POST",
      url: "php/contactAsso.php",
      data: postdata,
      dataType: "json",
      success: function (result) {
        if (result.isSuccess) {
          $("#contactFormAsso").append(
            "<p class='thank-you'> Votre message a bien été envoyé 😄 </p>"
          );
          $("#contactFormAsso")[0].reset();
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
