$(document).ready(function() { $("#user_college").select2(); });

$('#user_college').select2({placeholder: "Select a State"});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

jQuery(function($){
  $('#emailField').change(function() {
    var collegePatt = /@(.*).ox.ac.uk/;
    var email = $('#emailField').val();
    var names = email.split("@")[0].split(".");

    $('#user_college').select2('val', email.match(collegePatt)[1]);
    $('#firstNameField').val(names[0].capitalize());
    $('#lastNameField').val(names[1].capitalize());
  });
});
