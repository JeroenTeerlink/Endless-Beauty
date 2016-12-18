$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.hero-content').css({

    'transform' : 'translate(0px, '+ wScroll / 16 +'%)'

  });

});
