$(document).ready(function() {
  under768();
  $(window).resize(function() {
    under768();
    if ($(window).width() >= 768) {
      $('.navbar').addClass('navbar-fixed-top');
      $('body').css('padding-top', '50px');
    }
  });

  function under768() {
    if ($(window).width() < 768) {
      $('.navbar').removeClass('navbar-fixed-top');
      $('body').css('padding-top', '0px');
      $('.navbar').css('margin-bottom', '0px');
    }
  }
});

