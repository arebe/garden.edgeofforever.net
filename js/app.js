$(document).foundation();

$(document).ready(function() {
  console.log("hi there")
	//animate to top of trunk - turned off for dev
	$('html, body').animate({
		scrollTop: $("#trunk").offset().top
	}, 1000)

})