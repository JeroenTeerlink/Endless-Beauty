$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if ($(this).width() > 568) {
    $('.hero-content').css({

    'transform' : 'translate(0px, '+ wScroll / 16 +'%)'

    });
  }

  if(wScroll >  $('.second-section').offset().top - ($(window).height() / 2)) {
    console.log('hi');
    $('.second-section div').each(function(i) {

      setTimeout(function(){
        console.log(i);
        $('.second-section div').eq(i).addClass('is-showing');
      }, 200 * (i + 1));


    });
  };


});
