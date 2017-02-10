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
  // if ($(this).width() > 568 && wScroll <= 603) {
//     $('.hero-content').css({
// 
//       'transform' : 'translate(0px, '+ wScroll / 16 +'%)'
// 
//     });
//   }

  // if(wScroll >  $('.second-section').offset().top - ($(window).height() / 2)) {
//     $('.second-section div').each(function(i) {
// 
//       setTimeout(function(){
//         $('.second-section div').eq(i).addClass('is-showing');
//       }, 200 * (i + 1));
// 
// 
//     });
//   };


  if(wScroll >  $('.review-section').offset().top - ($(window).height() / 2)) {
    $('.review-section').addClass('is-showing');
  };
  if(wScroll >  $('.work-section').offset().top - ($(window).height() / 2)) {
    $('.work-header').addClass('is-showing');
  };
  if(wScroll >  $('.work-content').offset().top - ($(window).height() / 3)) {

    $('.work-card').each(function(i) {

      setTimeout(function(){
        $('.work-card').eq(i).addClass('is-showing');
      }, 300 * (i + 1));


    });
  };
});
