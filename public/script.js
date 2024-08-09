$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
  
      $.ajax({
        url: '/login', // URL of the server endpoint
        type: 'POST',  // HTTP method to use
        data: $(this).serialize(), // Serialize form data into a query string
        success: function(response) {
          console.log('Server Response:', response); // Log server response
          if (response.valid) {
            $('#errormsg').removeClass('showmessage').addClass('hidemessage');
            window.location.href = '/account'; // Redirect to account page
          } else {
            $('#errormsg').removeClass('hidemessage').addClass('showmessage');
          }
        },
        error: function() {
          $('#errormsg').removeClass('hidemessage').addClass('showmessage').text('An error occurred. Please try again.');
        }
      });
    });
  });
  