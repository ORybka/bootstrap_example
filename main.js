$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 400) {
      $('.navbar').css('background','transparent');
    } else {
      $('.navbar').css('background','#6fc98a');
    }
  });
});