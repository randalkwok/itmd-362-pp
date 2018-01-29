$('#contact-info').on('submit',
  function(e) {
    var phone = $('#phone').val();
    var re = /\d{10}/;
    var email = $('#email').val();
    var re2 = /.*@.*/;
    var validPhone = false;
    var validEmail = false;
    e.preventDefault();
    if(re.test(phone))
    {
      validPhone = true;
      $('#phone-warning').remove();
    }
    else{
      if(!$('#phone-warning').length) {
        $('#phone-input').append('<li id="phone-warning">Please enter a proper phone number</li>');
      }
    }
    if(re2.test(email))
    {
      validEmail = true;
      $('#email-warning').remove();
    }
    else{
      if(!$('#email-warning').length){
        $('#email-input').append('<li id="email-warning">Please enter a proper e-mail address</li>');
      }
    }
    if(validPhone && validEmail){
      $(this).remove();
      $('body').append('<h1>Thank You For Your Submission</h1>');
    }
  }
);