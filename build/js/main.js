$(document).ready(function(){
	//toggle(show/hide) full text of story
	$(".story").click(function(event) {
		let target = event.target;
		if (target.className == "show-comments-button" || target.className == "add-comment-button") {
			event.stopPropagation();
		} else {
			$(this).children(".full-story").slideToggle();
		}
	});

	//toggle(show/hide) full text of side article
	$(".side-feature").click(function() {
		$(this).children("p").slideToggle();
	});

	//Comment showing/hiding imitation on JS
	$(".show-comments-button").click(function() {
		let commentsDisplay = $(this).parent().next().css("display");
		if (commentsDisplay != "none")  {
			$(this).parent().next().css("display", "none");
			$(this).html("Show comments");
		} else {
			$(this).parent().next().css("display", "block");
			$(this).html("Hide comments");

			//Making random (name, text) and not random(date) data to comment
			$(this).parent().next().find(".comment-date").html(Date('2020-02-22T03:24:00'));

			let names = ["Nick", "Paul", "John", "Mila", "Sofia", "Elena", "George", "Denise", "Kevin", "Ron"];
			let secondNames = ["Rabbit", "Bear", "Seal", "Tiger", "Dog", "Cat", "Fox", "Deer", "Orca", "Raven"];
			function getRandom() {
				return Math.floor(Math.random() * 10);
			}
			let commentatorName = names[getRandom()];
			let commentatorSecondName = secondNames[getRandom()];
			$(this).parent().next().find(".commentator-name").html(`${commentatorName} ${commentatorSecondName}`);
			$(this).parent().next().find(".comment-text").html(`Hello! My name is ${commentatorName}. My friend ${names[getRandom()]} show me this story today. It was exciting, because my ${secondNames[getRandom()]} had started speaking English arter that.`);
		}
	})
});