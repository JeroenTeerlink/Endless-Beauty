$(".burger").click(function(){
  $("nav").toggleClass("open");
  $('body').bind('touchmove', function(e){e.preventDefault()});
});
