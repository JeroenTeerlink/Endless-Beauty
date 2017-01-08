$(".menu-button").click(function(){
  $(".menu-header ul").toggleClass("active");
  $(".menu-button i").toggleClass("fa-bars fa-close");
});

$(window).scroll(function(){


  var wScroll = $(this).scrollTop();
  if(wScroll >= 100 && $(window).width() > 768) {

    $('.menu').css({

      'position': 'fixed',
      'margin-top': '-100px',
      'background-color': 'rgba(255,255,255,0.5)'

    });
    $('.container').css({
      'margin-top': '100px'
    });
    $('.menu-header > ul li').css({


      'background-color': 'rgba(0,0,0,0)'

    });
    if ($(window).width() >= 1024) {

      $('ul.drop-menu').css({

        'margin-top': '15px'

      });
    } else {

      $('ul.drop-menu').css({

        'margin-top': '15px'

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
      $('.container').css({
        'margin-top': '57px'
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
