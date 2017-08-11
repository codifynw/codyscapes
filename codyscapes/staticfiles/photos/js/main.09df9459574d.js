$( document ).ready(function() {

	/* Submit form on select change. */
	$( "#id_year" ).change(function() {
	  this.form.submit();
	});

	/* Show shadow box. (Desktop Only) */
	/* var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false; */

	function update_shadowbox(index) {
		$('#shadow_box').css('display','block');
		$('#shadow_img').attr('src',$($('.photo_photo')[index]).attr("src"));
		$('#shadow_box').data('index',index);
		$('#shadow_buy_link').attr('href',$(".photo_link").toArray()[index].href);

		/* Hide left arrow for first photo and right arrow for last */
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
	   	update_shadowbox( $( ".photo_photo" ).index($(this)))
    });

   	$(	".swiper_image").click(function() {
	   	update_shadowbox( $( ".swiper_image" ).index($(this)) - 1)
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
	    		update_shadowbox( index )
	    	}
	    }
    });

    $('#shadow_box_right').click(function() {
		update_shadowbox( $('#shadow_box').data('index') + 1 );
        /* Don't exit the shadow box */
    	event.stopPropagation();
    })

    $('#shadow_box_left').click(function() {
    	update_shadowbox( $('#shadow_box').data('index') - 1 );
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
