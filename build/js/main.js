$(document).ready(function(){

	$(".side-feature").click(function() {
		$(this).toggleClass("spoiler-side-feature");
		$(this).children("p").slideToggle(470);
	});

	$(".story").click(function() {
		$(this).toggleClass("spoiler-story");
		$(this).children(".full-story").slideToggle(470);
	});
});