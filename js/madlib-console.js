var favorites = []

function generateStartup () {
      var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
      var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

      var random1 = Math.floor((Math.random() * startupX.length));
      var random2 = Math.floor((Math.random() * startupY.length));

      $(".favorite-button").removeClass("visibility-hidden");
      
      return ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

};

function favoriteStartup () {
	var startup = $("#startup").text();
	var found = $.inArray(startup, favorites) > -1;
	if(found) {
		$("#error-message").text("Startup has already been favorited!").fadeIn().delay(750).fadeOut();
	}
	else {
		favorites.push(startup)
		appendFavorites()
		toggleShowHideButtonText()
		$("#success-message").text("Favorited!").fadeIn().delay(750).fadeOut();
	}
};

function appendFavorites () {
	$("#favorites ol").empty()
	favorites.forEach(function(startup) {
		$('#favorites ol').append('<li>' +startup+ '</li>');
	});
}

$("#create").on('click', function() {
	$("#startup").text(generateStartup());
});

$("#save").on('click', function() {
	favoriteStartup()
});

$("#show-hide-favorites").on('click', function() {
	if($("#favorites-list").hasClass("hidden")) {
		$("#favorites-list").slideUp();
		$("#favorites-list").removeClass("hidden");
	} else {
		$("#favorites-list").slideDown();
		$("#favorites-list").addClass("hidden");
	}
	toggleShowHideButtonText()
});

function toggleShowHideButtonText () {
	if($("#favorites-list").hasClass("hidden")) {
		$("#show-hide-favorites").text("Hide Favorites ("+favorites.length+")");
	}
	else {
		$("#show-hide-favorites").text("Show Favorites ("+favorites.length+")");
	}
};