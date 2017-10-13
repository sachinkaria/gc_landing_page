$("#contactForm").on("submit", function (event) {
  if (event.isDefaultPrevented()) {
    // handle the invalid form...
    formError();
    submitMSG(false, "Did you fill in the form properly?");
  } else {
    // everything looks good!
    event.preventDefault();
    submitForm();
  }
});


function submitForm(){
  // Initiate Variables With Form Content
  var email = $("#email").val();

  $.ajax({
    type: "POST",
    url: "mailer.php",
    data: "email=" + email,
    success : function(text){
      if (text == "success"){
        console.log(text);
        formSuccess();
      } else {
        formError();
        submitMSG(false,text);
      }
    }
  });
}

function formSuccess(){
  $("#contactForm")[0].reset();
  submitMSG(true, "Awesome! We'll be in touch.")
}

function formError(){
  $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
}

$("#chefContactForm").on("submit", function (event) {
  if (event.isDefaultPrevented()) {
    // handle the invalid form...
    formError();
    submitMSG(false, "Did you fill in the form properly?");
  } else {
    // everything looks good!
    event.preventDefault();
    submitChefForm();
  }
});

function submitChefForm(){
  // Initiate Variables With Form Content
  var email = $("#email").val();

  $.ajax({
    type: "POST",
    url: "chefMailer.php",
    data: "email=" + email,
    success : function(text){
      if (text == "success"){
        console.log(text);
        chefFormSuccess();
      } else {
        chefFormError();
        submitMSG(false,text);
      }
    }
  });
}

function chefFormSuccess(){
  $("#chefContactForm")[0].reset();
  submitMSG(true, "Awesome! We'll be in touch.")
}

function chefFormError(){
  $("#chefContactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
}


function submitMSG(valid, msg){
  if(valid){
    var msgClasses = "email-confirmation h4";
  } else {
    var msgClasses = "email-confirmation h4";
  }
  $("#msgSubmit").text(msg);
}
