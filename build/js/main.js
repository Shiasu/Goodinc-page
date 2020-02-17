$(document).ready(function(){
	//toggle(show/hide) full text of story
	$(".story").click(function() {
		$(this).toggleClass("spoiler-story");
		$(this).children(".full-story").slideToggle();
	});
	//toggle(show/hide) full text of side article
	$(".side-feature").click(function() {
		$(this).toggleClass("spoiler-side-feature");
		$(this).children("p").slideToggle();
	});
});