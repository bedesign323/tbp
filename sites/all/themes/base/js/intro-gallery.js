Drupal.behaviors.intro_gallery = {
	attach: function (context, settings) {
		(function ($) {
 			
 			var images = Drupal.settings.intro_images;
 			var bs = $('#bg-images').backstretch(images, {duration: 3000, fade: 1000});
 			var i = 0;

 			

 			$(window).on("backstretch.before", function (e, instance, index) {
			  i = index;
			});



			jQuery(document).keydown(function(e) {
			    switch(e.which) {
			        case 37: // left
			        $('#bg-images').backstretch("pause");
			        $('#bg-images').backstretch("prev");
			        break;

			        case 38: // up
			        break;

			        case 39: // right
				        $('#bg-images').backstretch("pause");
				        $('#bg-images').backstretch("next");
			        break;

			        case 40: // down
			        	//fadeImage();
			        break;

			        default: return; // exit this handler for other keys
			    }
			    e.preventDefault(); // prevent the default action (scroll / move caret)
			});


		}(jQuery));
	}	
}