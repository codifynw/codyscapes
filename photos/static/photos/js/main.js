$( document ).ready(function() {

	$(".photo").each(function(index){
	});

	var currentIndex = 0,
	  items = $('.photo').toArray(),
	  itemAmt = items.length;
	  console.log(items);

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
