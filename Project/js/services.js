$("#sub-header").click(function() {
	$('html, body').animate({ scrollTop: '400px' }, 800);
});

$(".scroll-top-button").click(function() {
	$('html, body').animate({ scrollTop: '0px' }, 1500);
});

$(window).scroll(function() {
	s = $(window).scrollTop();
	console.log(s);
	
	if (s >= 200) {
		$("#wimper-item .item-foto").animate({ opacity: "1" }, 1000);
	}
	if (s >= 500) {
		$("#haar-item .item-foto").animate({ opacity: "1" }, 1000);
	}
	if (s >= 800) {
		$("#visagie-item .item-foto").animate({ opacity: "1" }, 1000);
	}
	if (s >= 1100) {
		$("#schoonheid-item .item-foto").animate({ opacity: "1" }, 1000);
	}
	if (s >= 1400) {
		$("#kleding-item .item-foto").animate({ opacity: "1" }, 1000);
	}
	if (s >= 1700) {
		$("#metamorfose-item .item-foto").animate({ opacity: "1" }, 1000);
	}
	if (s >= 2000) {
		$("#gezondheid-item .item-foto").animate({ opacity: "1" }, 1000);
	}
});