$( document ).ready(function() {

	/* Submit form on select change. */
	$( "#id_year" ).change(function() {
	  this.form.submit();
	});

	/* Show shadow box. (Desktop Only) */
	/* var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false; */

	function update_shadowbox(index, step) {

		console.log(index)

		if (step == 0) {
			$('#shadow_box').css('display','block');
			$('#shadow_img').attr('src',$($('.photo_photo')[index]).attr("src"));
			$('#shadow_box').data('index',index);
			$('#shadow_buy_link').attr('href',$(".photo_link").toArray()[index].href);
		}

		/* Hide right arrow for first photo */
		if (index == 0) {
			$('#shadow_box_left').css('display','none');
			$('#shadow_box_right').css('display','block');
		} else if (index + 1 == $( ".photo_photo" ).toArray().length ) {
			$('#shadow_box_right').css('display','none');
			$('#shadow_box_left').css('display','block');
		} else {
			$('#shadow_box_right').css('display','block');
			$('#shadow_box_left').css('display','block');
		}
	}


	/* Show Light Boxes */
   	$(	".photo_photo").click(function() {
	   	update_shadowbox( $( ".photo_photo" ).index($(this)), 0 )
    });

   	$(	".swiper_image").click(function() {
	   	update_shadowbox( $( ".swiper_image" ).index($(this)) - 1, 0 )
    });

    /* Move lightbox with key press */
    $(document).keydown(function(e) {
    	if  ($('#shadow_box').css('display') == 'block') {

    		/* Escape */
	    	if (e.keyCode == 27) {
	    		$('#shadow_box').css('display','none');
	    	}
	    	/* Left Arrow */
	    	if (e.keyCode == 37) {
	    		index = $('#shadow_box').data('index') - 1;
	    		if (index == -1) {
	    			index = 0;
	    		}
	    	}
	    	/* Right Arrow */
	    	if (e.keyCode == 39) {
	    		index = $('#shadow_box').data('index') + 1;

	    		/* Don't let index exceed length */
	    		if (index == $( ".photo_photo" ).toArray().length ) {
	    			index = index - 1
	    		}
	    	}

	    	if ( (e.keyCode == 37) || (e.keyCode == 39) ) {
	    		picture_link = $($('.photo_photo')[index]).attr("src");
				purchase_link = $(".photo_link").toArray()[index].href;

	        	$('#shadow_img').attr('src',picture_link);
	        	$('#shadow_box').data('index',index);
	        	$('#shadow_buy_link').attr('href',purchase_link);

	        	/* Hide respective arrows on first and last */
	        	if (index == 0) {
	        		$('#shadow_box_left').css('display','none');
	        	} else {
	        		$('#shadow_box_left').css('display','block');
	        	}

	        	if (index == $(".photo_photo" ).toArray().length - 1) {
	        		$('#shadow_box_right').css('display','none');
	        	} else {
	        		$('#shadow_box_right').css('display','block');
	        	}
	    	}
	    }
    });

    $('#shadow_box_right').click(function() {
    	index = $('#shadow_box').data('index') + 1;

		/* Don't let index exceed length */
		if (index == $( ".photo_photo" ).toArray().length ) {
			index = index - 1
		}

		purchase_link = $(".photo_link").toArray()[index].href;
		picture_link = $($('.photo_photo')[index]).attr("src");
        if  ($('#shadow_box').css('display') == 'block') {
        	$('#shadow_img').attr('src',picture_link);
        	$('#shadow_box').data('index',index);
        	$('#shadow_buy_link').attr('href',purchase_link);
        }

        console.log(index)

        /* Hide right arrow on last image */
        if (index == $(".photo_photo" ).toArray().length - 1) {
        	$('#shadow_box_right').css('display','none');
        } else {
        	$('#shadow_box_right').css('display','block');
        	$('#shadow_box_left').css('display','block');
        }

        /* Don't exit the shadow box */
    	event.stopPropagation();
    })

    $('#shadow_box_left').click(function() {
    	index = $('#shadow_box').data('index') - 1;
		/* Don't let index exceed length */
		if (index == -1) {
			index = 0;
		}

		purchase_link = $(".photo_link").toArray()[index].href;
		picture_link = $($('.photo_photo')[index]).attr("src");

        if  ($('#shadow_box').css('display') == 'block') {
        	$('#shadow_img').attr('src',picture_link);
        	$('#shadow_box').data('index',index);
        	$('#shadow_buy_link').attr('href',purchase_link);
        }

        /* Hide left arrow on first image */
        if (index == 0) {
        	$('#shadow_box_left').css('display','none');
        } else {
        	$('#shadow_box_right').css('display','block');
        	$('#shadow_box_left').css('display','block');
        }
        /* Don't exit the shadow box */
    	event.stopPropagation();
    })

    $('#shadow_buy').click(function() {
    	event.stopPropagation();
    })

	$('#shadow_box').click(function() {
		$('#shadow_box').css('display','none');
	})


});
