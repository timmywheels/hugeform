$('input, button').keyup(function(e) {  
    //Move to next input field on enter 
     if (e.keyCode === 13){
    $(this).animate({
        left: '-150%'
    }, 250, function() {
        $(this).css('left', '150%');
        $(this).appendTo('.container');
    });
    //Slide input field off screen to left
    $(this).next().animate({
        left: '50%',
    }, 500);
  return false;
      
    }
});




$(function() {
    // Get the form.
    var form = $('#form');

    // Get the messages div.
    var formMessages = $('input');

// Set up an event listener for the contact form.
$('#form').submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();
});

// Serialize the form data.
var formData = $('#form').serialize();

// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: $('#form').attr('action'),
    data: formData,
})

.done(function(response) {
    // Make sure that the input has the 'success' class.
    $('input').removeClass('error');
    $('input').addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
  
})

.fail(function(data) {
    // Make sure that the input has the 'error' class.
    $('input').removeClass('success');
    $('input').addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $('input').text(data.responseText);
    } else {
        $('input').text('Oops! An error occured and your message could not be sent.');
    }
  });
});


