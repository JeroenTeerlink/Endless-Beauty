$(document).ready(function () {
    //initialize swiper when document ready

      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        speed: 500,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
      });

    $('#hero-text').addClass('visible');
});
