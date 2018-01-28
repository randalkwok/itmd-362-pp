$('#contact-info').on('submit',
  function(e) {
    var phone = $('#phone').val();
    var re = /\d{10}/;
    var email = $('#email').val();
    var re2 = /.*@.*/;
    var validPhone = false;
    var validEmail = false;
    if(re.test(phone))
    {
      validPhone = true;
    }
    else{
      $('#phone-input').append('<li id="warning">Please enter a proper phone number</li>');
    }
    if(re2.test(email))
    {
      validEmail = true;
    }
    else{
      $('#email-input').append('<li id="warning">Please enter a proper e-mail address</li>');
    }
    if(validPhone && validEmail){
      e.preventDefault();
      $(this).remove();
      $('body').append('<h1>Thank You For Your Submission</h1>');
    }
  }
);