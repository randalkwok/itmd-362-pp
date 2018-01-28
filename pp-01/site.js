$('#contact-info').on('submit',
  function(e) {
    e.preventDefault();
    console.log('The form was submitted.');
    var phone = $('#phone').val();
    var re = /\d{10}/;
    if(re.test(phone))
    {
      $(this).remove();
      $('body').append('<h1>Thank You For Your Submission</h1>');
    }
    else{
      $('#phone-input').append('<li id="warning">Please enter a proper phone number</li>');
    }
  }
);