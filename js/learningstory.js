var Story = {

	init: function() {
		Story.events();
		// Story.coverImageOffset();
	},

	events: function() {
		$('body').on('click touch', '#header', Story.changeHeaderText);
//		$('body').on('click touch', '.imgBlock', Story.getCoverImage);
		$(window).scroll(Story.scrollFunction);
	},

	changeHeaderText: function() {
		$('#header, #subHeader').hide();

		var headerText = $('#header').text();
		var subHeaderText = $('#subHeader').text();

		$('#headerInput, #subHeaderInput').show();
		$('#headerInput').focus();

		$('#headerInput').val(headerText);
		$('#subHeaderInput').val(subHeaderText);
	},

	// coverImageOffset: function() {

	// 	var offset = $(window).offset();
	// 	console.log(offset);

	// 	var top = offset.top;

	// 	if(top === 0) {
	// 		console.log('at the top');
	// 	} else {
	// 		console.log('scrolled');
	// 	}

	// }

	scrollFunction: function() {

		var $coverPageDiv = $('body').find('#coverPageContainer');
		var $contentDiv = $('body').find('#learningStoryPage');

		if( $(window).scrollTop() > $coverPageDiv.offset().top + 1 ) {
            $contentDiv.css('display', 'block');
        } else {
            $contentDiv.css('display', 'none');
        }

	}

	// scrollFunction: function() {
	// 	var lastScrollTop = 0;
	// 	// var delta = 5;

	// 	var st = $(this).scrollTop();

	// 	// if(Math.abs(lastScrollTop - st) <= delta) {
	// 	// 	return;
	// 	// }

	// 	if(st > lastScrollTop) {
	// 		console.log('scroll down');
	// 	} else if(st < lastScrollTop) {
	// 		console.log('scroll up');
	// 	}

	// 	lastScrollTop = st;
	// }

}

$(document).ready(function(){
	Story.init();
});


// var lastScrollTop = 0, delta = 5;
//     $(window).scroll(function(event){
//        var st = $(this).scrollTop();
       
//        if(Math.abs(lastScrollTop - st) <= delta)
//           return;
       
//        if (st > lastScrollTop){
//            // downscroll code
//            console.log('scroll down');
//        } else {
//           // upscroll code
//           console.log('scroll up');
//        }
//        lastScrollTop = st;