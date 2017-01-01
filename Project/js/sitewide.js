$(".menu-button").click(function(){
  $(".menu-header ul").toggleClass("active");
  $(".menu-button i").toggleClass("fa-bars fa-close");
});

$(window).scroll(function(){


  var wScroll = $(this).scrollTop();
  if(wScroll >= 125 && $(window).width() > 768) {

    $('.menu').css({

      'position': 'fixed',
      'margin-top': '-125px',
      'background-color': 'rgba(255,255,255,0.5)'

    });
    $('.menu-header > ul li').css({


      'background-color': 'rgba(0,0,0,0)'

    });
    if ($(window).width() >= 1024) {

      $('ul.drop-menu').css({

        'margin-top': '4px'

      });
    } else {

      $('ul.drop-menu').css({

        'margin-top': '5px'

      });

    };
    $('ul.drop-menu li').css({

      'background-color': 'rgba(255,255,255,0.5)'

    });

  } else if (wScroll < 200) {

    $('.menu').css({

      'position': 'absolute',
      'margin-top': '0',
      'background-color': 'rgba(255,255,255,1)'

    });
    $('.menu-header li').css({


      'background-color': 'rgba(255,255,255,1)'

    });
    $('ul.drop-menu').css({

      'margin-top': '-3px'

    });
    $('ul.drop-menu').css({

      'margin-top': '-3px'

    });
  };
});
