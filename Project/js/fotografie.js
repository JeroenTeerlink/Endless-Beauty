function checkIfAnimationShouldPlay() {
	if (s <= 160 || s >= 900) {
		$(".gallery-row").css("animation-play-state", "paused");
	} else {
		$(".gallery-row").css("animation-play-state", "running");
	}
}

$(window).scroll(function() {
	s = $(window).scrollTop();
	console.log(s);

	// $(".gallery-row").css("left", s+"px");
	if (s <= 1050 && $(window).width() > 800) {
		galleryScroll();
	}
});

function galleryScroll() {
	$("#upper-row, #bottom-row").css("background-position", "" + s / 2 + "px");
	$("#middle-row").css("background-position", "-" + s / 3 + "px");
}

$("#sub-header").click(function() {
	$('html, body').animate({ scrollTop: '1120px' }, 1500);
});
