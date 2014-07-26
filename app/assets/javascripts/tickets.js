<script type="text/javascript">
  var  ordinals = ["Zeroth", "First", "Second", "Third", "Fourth", "Fifth"];

  var  maxTickets = <%= User::MAX_TICKETS %>;
  var  userTickets = <%= current_user.tickets.size %>;
  var  currTickets = 0;

  function ticketForm() {
    return "<legend>" + ordinals[currTickets + userTickets] + " Ticket </legend> <div class=\"form-group\"><label for=\"first_name_" + currTickets + "\">First name:<\/label><input class=\"overrideEnter form-control\" id=\"first_name_" + currTickets + "\" type=\"text\"\/><\/div><div class=\"form-group\"><label for=\"last_name_" + currTickets + "\">Last name:<\/label><input class=\"overrideEnter form-control\" id=\"last_name_" + currTickets + "\" type=\"text\"\/><\/div><div class=\"form-group\"><label for=\"bod_num_" + currTickets + "\">Bod card number:<\/label><input class=\"overrideEnter form-control\" id=\"bod_num_" + currTickets + "\" type=\"text\"\/><\/div>";
  };

  if (currTickets + userTickets < maxTickets) {
    $('#ticketForm').append("<p> <a class=\"btn btn-success\" id=\"addTicketButton\">Add ticket</a> </p>");
  }

  function addTicketField() {
    if (currTickets == 0) {
      $('form').append("<p> <a class=\"btn btn-primary\" type=\"submit\", id=\"purchaseButton\">Purchase &raquo;</a> </p>");
    }
    currTickets++;
    $('#ticketForm').append(ticketForm());

    if (userTickets + currTickets >= maxTickets) {
      $('#addTicketButton').detach();
    }
  };
    
  $('#addTicketButton').click(function(){
    addTicketField();
  });

  $('.overrideEnter').keypress(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      $('#purchaseButton').click();
      event.returnValue = false;
      event.cancel = true;
    }
  });

  $("form").on("click", "#purchaseButton", function(){
    var token = function(res){
      var $input = $('<input type=hidden name=stripeToken />').val(res.id);
      $('form').append($input).submit();
    };

    StripeCheckout.open({
      key:         'pk_test_9LtVL6Rlr6TxJaJld74wW4kO',
      amount:      2000,
      name:        'St Hugh\'s Ball',
      currency:    'GBP',
      description: 'A bag of Pistachios',
      panelLabel:  'Checkout',
      email:       "<%= j current_user.email %>",
      allowRememberMe: false,
      token:       token
    });

    return false;
  });
</script>
