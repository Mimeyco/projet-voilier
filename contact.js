//FORMULAIRE
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
