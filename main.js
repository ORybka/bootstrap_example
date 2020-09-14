$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 400) {
      $('.navbar').css('background','transparent');
    } else {
      $('.navbar').css('background','#6fc98a');
      $('.dropdown-menu').css('background','rgba(255, 255, 255, 1)');
    }
  });

  $('.navbar-burger').click(function(event) {
    $('.navbar-burger, .menu').toggleClass('active');
    // $('body').toggleClass('lock');
  });
});