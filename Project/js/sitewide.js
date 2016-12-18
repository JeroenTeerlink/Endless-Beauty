$(".menu-button").click(function(){
  $(".menu-header ul").toggleClass("active");
});

$(window).scroll(function(){


  var wScroll = $(this).scrollTop();
  console.log(wScroll);
  if(wScroll >= 125) {

    $('.menu').css({

      'position': 'fixed',
      'margin-top': '-125px',
      'background-color': 'rgba(255,255,255,0.2)'

    });
    $('.menu-header > ul li').css({


      'background-color': 'rgba(0,0,0,0)'

    });
    $('ul.drop-menu').css({

      'margin-top': '5px'

    });
    $('ul.drop-menu li').css({

      'background-color': 'rgba(255,255,255,0.2)'

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
