$("#sub-header").click(function() {
	$('html, body').animate({ scrollTop: '400px' }, 800);
});
$(".scroll-top-button").click(function() {
	$('html, body').animate({ scrollTop: '0px' }, 800);
});
$(window).ready(function() {
  setInterval(function(){
    $(".mijn-verhaal-cta").toggleClass("wiggle");
  }, 8000);
});
