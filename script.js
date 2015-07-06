	$(function() {

	  // form to search spotify
	  var $spotifySearch = $("#spotify-search");

	 // form input for tracks
	 var $track = $("#track");

	  //where to show results 
	  var $results = $("#results")

		//submit form to look for songs
	  $spotifySearch.on("submit", function(event){
	  	event.preventDefault();
	  	console.log("suck it")

	  	var getMusic = 'https://api.spotify.com/v1/search?type=track&q='+ $track.val();

	  	console.log(getMusic)

	  	$.get(getMusic,function(data){
	  			console.log(data)

	  			_.each(data.tracks.items, function(items, i){
	  				console.log(items.name)
	  				$results.append("<li>"+ items.name +"</li>");



	});

	  	});

	  });



	});