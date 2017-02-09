$(".burger").click(function(){
  $("nav").toggleClass("open");
  $('body').bind('touchmove', function(e){e.preventDefault()});
});
$(function() {
    // DOM ready
	$('#drop-anchor, .drop-menu').hover(
		function () {
			$('.drop-menu').toggleClass("show");
			$('#drop-anchor a').toggleClass("hovered");
		},
		function () {
			$('.drop-menu').toggleClass("show");
			$('#drop-anchor a').toggleClass("hovered");
	   }
   );

});

/*$(window).scroll(function(){


  var wScroll = $(this).scrollTop();
  if(wScroll >= 100 && $(window).width() > 768) {

    $('.menu').css({

      'position': 'fixed',
      'margin-top': '-100px',
      'background-color': 'rgba(255,255,255,0.5)'

    });
    $('.container').css({
      'margin-top': '150px'
    });
    $('.menu-header > ul li').css({


      'background-color': 'rgba(0,0,0,0)'

    });
    if ($(window).width() >= 1024) {

      $('ul.drop-menu').css({

        'margin-top': '11px'

      });
    } else {

      $('ul.drop-menu').css({

        'margin-top': '13px'

      });

    };
    $('ul.drop-menu li').css({

      'background-color': 'rgba(255,255,255,0.5)'

    });

  } else if (wScroll < 200) {

    $('.menu').css({

      'position': 'relative',
      'margin-top': '0',
      'background-color': '#FFF'

    });
    if ($(window).width() <= 568) {
      $('header').css({
        'margin-top': '0px'
      });
    } else {
      $('.container').css({
        'margin-top': '0px'
      });
    }
    $('.menu-header li').css({


      'background-color': 'rgba(255,255,255,1)'

    });
  };
});
*/
