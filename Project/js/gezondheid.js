$(document).ready(function () {
    var swiper = new Swiper ('.swiper-container', {
      // Optional parameters
      pagination: '.swiper-pagination',
      paginationClickable: true,
      speed: 1000,
      spaceBetween: 20,
      nextButton: '.receiver',
      paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '"><p>Stap ' + (index + 1) + '</p></span>';
        }
    })
    $('#hero-text').addClass('visible');
});
