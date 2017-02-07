$(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop();
    // scroll value and opacity
    opacityVal = (100.0 / s);
    // opacity value 100% to 0%
    $('.img-blur').css('opacity', opacityVal);
    if (s >= 300) {
      $('.img-blur').css('opacity', 0);
    }
    if (s >= 2118) {
      mySwiper.startAutoplay();
    } else if (s < 2118) {
      mySwiper.stopAutoplay();
    }
});

$('#sub-header').click(function(){
    $("html, body").animate({ scrollTop: 400 }, 600);
 });
 $('.scroll-top-button').click(function(){
     $("html, body").animate({ scrollTop: 0 }, 800);
     return false;
  });

$(window).ready(function() {
  divResize();
  setInterval(function(){
    $(".cta-1").toggleClass("wiggle");
  }, 10000);
  setInterval(function(){
    $(".cta-2").toggleClass("wiggle");
  }, 13178);
});
$(window).resize(function() {
  divResize();
});

var divResize = function() {
  var biggestHeight = "0";
  $("#meet-carla *").each(function(){
    if ($(this).height() > biggestHeight ) {
      biggestHeight = $(this).height()
    }
  });

  $("#meet-carla").height(biggestHeight);
};

var mySwiper = new Swiper('.swiper-container', {
        effect: 'cube',
        autoplay: 5000,
        speed: 500,
        onlyExternal: true,
        cube: {
            shadow: true,
            slideShadows: false,
            shadowScale: 0.0
        }
    });
