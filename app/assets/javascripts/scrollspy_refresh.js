function initialize() {
 $('#home').scrollspy('refresh');
}

$(document).ready(initialize);
$(document).on('page:load', initialize);
