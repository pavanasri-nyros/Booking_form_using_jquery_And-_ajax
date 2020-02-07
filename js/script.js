

$(document).ready(function() {
    $('form').on('submit', function(e) {
      e.preventDefault();
      var form = $(this),
          vacation = $('#vacation');

      $.ajax($('form').attr('action'), 
      {
        type: 'POST',
        data: form.serialize(),
        contentType: "application/json",
        dataType: 'json', 

        complete: function() {
          vacation.removeClass('is-loading');
        },

        success: function(result) {
          var msg = $("<p></p>");
          form.remove();
          msg.append("<strong> <u>These are the details of you <u><strong> </br>");
          
          msg.append("<b>Firsname:-- </b>" + result.firstname + "<br />" );
          msg.append("<b>Lastname:-- </b>" + result.lastname + "<br />" );
          msg.append("<b>EamilID:-- </b>" + result.email + "<br />" );
          msg.append("<b>MobileNumber:--</b> " + result.phone + "<br />" );
          msg.append("<b>From:-- </b>" + result.from + "<br />" );
          msg.append("<b>To:-- </b>" + result.to + "<br />" );
          msg.append("<b>From Date:--</b>" + result.fromdate + "<br />" );
          msg.append("<b>To Date:--</b>" + result.todate + "<br />" );
          msg.append("<b>Total adults:--</b>" + result.adults + "<br />" );
          msg.append("<b>Total Children:--</b>" + result.children + "<br />" );
          msg.append("<b>Travel class:--</b>" + result.select + "<br />" );

          msg.append("<b>Thank you<b>")

          vacation.hide().html(msg).fadeIn();
        },

        error: function() {
          alert('An error occurred fetching the latest photos. Please try again.');
        },

        beforeSend: function() {
          vacation.addClass('is-loading');
        }
      });
    });
  });