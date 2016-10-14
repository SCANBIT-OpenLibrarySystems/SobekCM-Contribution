$(function(){
	// Tiles folder
	var dir = "http://devvufind.scanbit.net/bootstrap/uploads/";
	// File extension
	var fileextension = ".jpg";
	$.ajax({
	    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
	    url: dir,
	    success: function (data) {
	        //List all .png file names in the page
	        var arr = [];
	         $(data).find("a").attr("href", function (i, val) {
	            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
	            	arr.push(val);
	            } 
	        });
	        shuffle(arr);
	        var num = 1;
	        $.each( arr, function( key, value ) {
	          // href var
	          var href = "http://digital.soas.ac.uk/" + value.replace(/\.[^/.]+$/, "");
	          // Load the link
		  document.getElementById("ImgLnk" + num).href= href;
		  // Load the image
		  document.getElementById("sbkThumbnailImg" + num).src= dir + value;
		  num ++;
		});
		// If the folder has less than 15, this code hide the divs
		if(num<16){
			do {
			    $("#image"+num).hide();
			    num++;
			}
			while (num <= 15);
		}
	    }
	});
	
	// Function to select tiles at random
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	
	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
	
	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	
	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	
	  return array;
	}
});