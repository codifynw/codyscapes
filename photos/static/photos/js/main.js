$( document ).ready(function() {

	/* Submit form on select change. */
	$( "#id_year" ).change(function() {
	  this.form.submit();
	});


	/* Show shadow box. (Desktop Only) */
	/* var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false; */

	/* Show Light Boxes */
   	$(	".photo_photo").click(function() {
	   	index = $( ".photo_photo" ).index($(this))
	   	purchase_link = $(".photo_link").toArray()[index].href;
	   	picture_link = $($('.photo_photo')[index]).attr("src")
	   	$('#shadow_box').css('display','block');
	   	$('#shadow_img').attr('src',picture_link);
	   	$('#shadow_box').data('index',index);
	   	$('#shadow_buy_link').attr('href',purchase_link);
    });

   	$(	".swiper_image").click(function() {
	   	index = $( ".swiper_image" ).index($(this))
	   	picture_link = $($('.swiper_image')[index]).attr("src")
	   	$('#shadow_box').css('display','block');
	   	$('#shadow_img').attr('src',picture_link);
	   	$('#shadow_box').data('index',index);
	   	$('#shadow_buy_link').attr('href',purchase_link);
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

	    		picture_link = $($('.photo_photo')[index]).attr("src");
				purchase_link = $(".photo_link").toArray()[index].href;

	        	$('#shadow_img').attr('src',picture_link);
	        	$('#shadow_box').data('index',index);
	        	$('#shadow_buy_link').attr('href',purchase_link);
	    	}

	    	/* Right Arrow */
	    	if (e.keyCode == 39) {
	    		index = $('#shadow_box').data('index') + 1;

	    		/* Don't let index exceed length */
	    		if (index == $( ".photo_photo" ).toArray().length ) {
	    			index = index - 1
	    		}

	    		picture_link = $($('.photo_photo')[index]).attr("src");

	        	$('#shadow_img').attr('src',picture_link);
	        	$('#shadow_box').data('index',index);
	    	}
	    }
    });

    $('#shadow_box_right').click(function() {
    	index = $('#shadow_box').data('index') + 1;
		/* Don't let index exceed length */
		if (index == $( ".photo_photo" ).toArray().length ) {
			index = index - 1
		}

		picture_link = $($('.photo_photo')[index]).attr("src");
        if  ($('#shadow_box').css('display') == 'block') {
        	$('#shadow_img').attr('src',picture_link);
        	$('#shadow_box').data('index',index);
        }
    	event.stopPropagation();
    })

    $('#shadow_box_left').click(function() {
    	index = $('#shadow_box').data('index') - 1;
		/* Don't let index exceed length */
		if (index == -1) {
			index = 0;
		}

		picture_link = $($('.photo_photo')[index]).attr("src");
        if  ($('#shadow_box').css('display') == 'block') {
        	$('#shadow_img').attr('src',picture_link);
        	$('#shadow_box').data('index',index);
        }
    	event.stopPropagation();
    })

    $('#shadow_buy').click(function() {
    	event.stopPropagation();
    })


	$('#shadow_box').click(function() {
		$('#shadow_box').css('display','none');
	})

	/*Fade Out 'buy button'
	var timer;
	$(document).mousemove(function() {
	    if (timer) {
	        clearTimeout(timer);
	        timer = 0;
	    }

	    $('#shadow_buy:visible').fadeIn();
	    timer = setTimeout(function() {
	        $('#shadow_buy').fadeOut()
	    }, 1000)
	})*/

	var currentIndex = 0,
	  items = $('.photo').toArray(),
	  itemAmt = items.length;

	function cycleItems(index) {
	  var item = items[currentIndex];
	  $('.photo').css('display','none');
	  $(items[currentIndex]).css('display','inline-block');
	}

	/*var autoSlide = setInterval(function() {
	  currentIndex += 1;
	  if (currentIndex > itemAmt - 1) {
	    currentIndex = 0;
	  }
	  cycleItems();
	}, 3000);*/

	$('#index_nav_right_arrow').click(function() {

	  currentIndex += 1;
	  if (currentIndex > itemAmt - 1) {
	    currentIndex = 0;
	  }
	  cycleItems();
	  console.log(map.markers);
	});

	$('#index_nav_left_arrow').click(function() {

	  currentIndex -= 1;
	  if (currentIndex < 0) {
	    currentIndex = itemAmt - 1;
	  }
	  cycleItems();
	});

});
