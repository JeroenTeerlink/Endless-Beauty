$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 10000,
      speed: 1000,
      nextButton: '.button-slide-next',
      prevButton: '.button-slide-prev'
    })
  });


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


  if(wScroll >  $('.work-section').offset().top - ($(window).height() / 2)) {
    $('.work-header').addClass('is-showing');
  };
  if(wScroll >  $('.work-content').offset().top - ($(window).height() / 2)) {

    $('.work-card').each(function(i) {

      setTimeout(function(){
        $('.work-card').eq(i).addClass('is-showing');
      }, 300 * (i + 1));


    });
  };
});
