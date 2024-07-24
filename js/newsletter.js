//FORMULAIRE NEWSLETTER
$(function () {
  $("#contactFormNewsletter").submit(function (e) {
    e.preventDefault();
    $(".commentsNewsletter").empty();
    var postdata = $("#contactFormNewsletter").serialize();

    $.ajax({
      type: "POST",
      url: "../php/contactNewsletter.php",
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
