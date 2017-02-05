if ($(window).width() <= 768) {
  $(".pure-u-1-1").click(function() {
    window.location = $(this).find("a").attr("href");
    console.log("window.location");
    return false;
  });
};
