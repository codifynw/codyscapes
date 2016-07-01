$( document ).ready(function() {

	/* Submit form on select change. */
	$( "#id_year" ).change(function() {
	  this.form.submit();
	});


	/* Show shadow box. (Desktop Only) */
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


	   	$(	".photo_photo").click(function() {
		   	index = $( ".photo_photo" ).index($(this))
		   	html_picture = $('.photo_photo')[index]
		   	picture_link = $($('.photo_photo')[index]).attr("src")
		   	$('#shadow_box').css('display','block');
		   	$('#shadow_img').attr('src',picture_link);
	    });

	$('#shadow_box').click(function() {
		$('#shadow_box').css('display','none');
	})

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
