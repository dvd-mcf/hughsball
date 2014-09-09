$(document).ready(function(){
  var  ticketInfo = $('#ticketInfo');
  var  ordinals = ["Zeroth", "First", "Second", "Third", "Fourth"];
  
  var  maxTickets = ticketInfo.data("max-tickets");
  var  userTickets = ticketInfo.data("curr-tickets");
  var  discount = ticketInfo.data("discount");
  var  currTickets = 0;
  
  var email = ticketInfo.data("email");
  
    function ticketCost() { return "<p id=\"ticketCost\">You're purchasing <span class=numTickets><strong>" + pluralizeTickets()  + "</strong></span>, which " + ((currTickets == 1) ? "costs" : "cost")   + "<strong> &pound" + (9000 * currTickets - discount) / 100.00 + "</strong>.</span></p>"; }
  
  var addTicketButton = "<a class=\"btn btn-success\" id=\"addTicketButton\">Add ticket<\/a>"
  
  
  if (currTickets + userTickets < maxTickets) {
    $('#ticketForm').append("<p class=\"ticketButtons\">" + addTicketButton + "<\/p>");
  }
  
  function addRemoveButton() {
    $('.ticketButtons').append("<a class=\"btn btn-danger\" id=\"removeTicketButton\">Remove ticket<\/a>");
  };
  
  function addTicketField() {
    currTickets++;
  
    var ticketForm = "<div id=\"ticketSubform" + currTickets + "\"><legend>" + ordinals[currTickets + userTickets] + " Ticket </legend> <div class=\"form-group\"> <label for=\"first_name_" + currTickets + "\">First name:<\/label> <input class=\"form-control\" name=\"tickets[" + currTickets + "][first_name] \" type=\"text\"\/> <\/div> <div class=\"form-group\"> <label for=\"last_name_" + currTickets + "\">Last name:<\/label> <input class=\"form-control\" name=\"tickets[" + currTickets + "][last_name] \" type=\"text\"\/> <\/div> <div class=\"form-group\"> <label for=\"email" + currTickets + "\">Email:<\/label> <input class=\"form-control\" name=\"tickets[" + currTickets + "][email] \" type=\"text\"\/> <\/div><\/div>";
  
    if (currTickets == 1) {
      $('form').append("<p> <a class=\"btn btn-primary\", type=\"submit\", id=\"purchaseButton\">Purchase &raquo;</a> </p>");
      $('#ticketInfo').append(ticketCost());
    }
    else {
      $('#ticketCost').replaceWith(ticketCost());
    }
  
    $('#ticketForm').append(ticketForm);
  
    if (currTickets == 1) {
      addRemoveButton();
    }
    
    if (userTickets + currTickets >= maxTickets) {
      $('#addTicketButton').detach();
    }
  };
  
  function pluralizeTickets() {
    if (currTickets == 1){
       return "1 ticket";
    }
    return currTickets + " tickets";
  };
  
  $('.ticketButtons').on("click", "#addTicketButton", function(){
    addTicketField();
  });
  
  $('form').on('click', '#removeTicketButton', function(event) {
    $('#ticketSubform' + currTickets).detach();
    currTickets--;
    if (!$('#addTicketButton').length) {
      $('.ticketButtons').prepend(addTicketButton);
    }
    if (currTickets == 0) {
      $('#purchaseButton').detach();
      $('#ticketCost').detach();
      $('#removeTicketButton').detach();
    }
    else {
      $('#ticketCost').replaceWith(ticketCost());
    }
  });
  
  $('form').on('click', '#purchaseButton', function(){
    var token = function(res){
      var $input = $('<input type=hidden name=stripeToken />').val(res.id);
      $('form').append($input).submit();
    };
  
    StripeCheckout.open({
      key:         'pk_test_9LtVL6Rlr6TxJaJld74wW4kO',
      amount:      9000 * currTickets - discount,
      name:        'St Hugh\'s Ball',
      currency:    'GBP',
      description: pluralizeTickets(),
      panelLabel:  'Checkout',
      email:       email,
      allowRememberMe: false,
      token:       token
    });
    return false;
  });
});
