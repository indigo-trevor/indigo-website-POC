$( document ).ready(function() {

$('#mouse-move').mouseParallax({ moveFactor: 1 });
$('.video--bg').hide();
$('.nav-close').hide();

  $( "#nav-icon" ).click(function() {
    $('.video--bg').show();
    $('.nav-close').show();
  });
  $( ".nav-close" ).click(function() {
    $(this).hide();
  });
//Hamburger

  $('#nav-icon, .nav-close' ).click(function(){
    $('#nav-icon').toggleClass('open');
  });
});