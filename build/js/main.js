$(document).ready(function(){
	//toggle(show/hide) full text of story
	$(".story").click(function(event) {
		let target = event.target;
		if (["comment-adding-name","show-comments-button", "add-comment-form-button", "comment-adding-text", "submit-comment-button"].indexOf(target.className) != -1) {
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
			$(this).parent().next(".story-comments").css("display", "none");
			$(this).html("Show comments");
		} else {
			$(this).parent().next(".story-comments").css("display", "block");
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
	});

	//Comment adding imitation on JS
	$(".add-comment-form-button").click(function() {
		if ($(this).html() == "Add comment") {
			$(this).parent().after().append("<div class='comment-input'><input class='comment-adding-name' type='text' placeholder='Enter your name'><textarea class='comment-adding-text' maxlength='150' placeholder='Comment text'></textarea><input class='submit-comment-button' type='submit' value='Send Comment'></div>");
			$(this).html("Cancel");
		} else {
			$(this).parent().find(".comment-input").remove();
			$(this).html("Add comment");
		}
	});

	$(".submit-comment-button").click(function() {
		console.log("text");
		if ($(this).parent(".comment-input").find(".comment-adding-text").html()) {
			$(this).parent(".full-story").siblings(".story-comments").before().append("<div class='comment'> <h3 class='commentator'Comment by></h3> <span class='commentator-name'></span> <p class='comment-date'></p><p class='comment-text'></p></div>");
		}
	});

	//Toggle/show more stories
	$(".toggle-stories").click(function() {
		let longtimeStoriesDisplay = $(".longtime-stories").css("display");
		if (longtimeStoriesDisplay != "none") {
			$(".longtime-stories").css("display", "none");
			$(".toggle-stories-text").html("Show more")
		} else {
			$(".longtime-stories").css("display", "block");
			$(".toggle-stories-text").html("Show less");
		}
	});

	//making statistics under sidebar
	$(".story-articles").find("span").html(Array.from($(".story")).length);
	$(".comments").find("span").html(Array.from($(".comment")).length);
});