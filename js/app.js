$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 1000,
    pause_on_hover: true,
    animation_speed: 500,
    navigation_arrows: true,
    bullets: false
  }
});

$(document).ready(function() {

	// animate to top of trunk - turned off for dev
	$('html, body').animate({
		scrollTop: $("#trunk").offset().top
	}, 1000)

})