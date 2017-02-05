$('.sub-header').click(function(){
    $("html, body").animate({ scrollTop: 451 }, 800);
    return false;
 });
 $('.scroll-top-button').click(function(){
     $("html, body").animate({ scrollTop: 0 }, 800);
     return false;
  });

$(window).ready(function() {
  setInterval(function(){
    $(".mijn-verhaal-cta").toggleClass("wiggle");
  }, 8000);
});
