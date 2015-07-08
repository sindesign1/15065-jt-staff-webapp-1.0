var Story = {

	init: function() {
		Story.events();
		Story.setInputVal();
		Story.showArrow();
	},

	events: function() {
		$('body').on('click touch', '#header', Story.changeHeaderText);
		$('body').on('click touch', '.addElementBtn', Story.openAddElement);
		$('body').on('click touch', '#nevermindBtn', Story.closeAddElement);
		$('body').on('click touch', '#addPhotoElement', Story.addPhotoElement);
		$(document).on('click touch','#learningStoryPage', Story.closePhotoSidebar);

	},

	changeHeaderText: function(e) {
		e.preventDefault();
		$('#header, #subHeader').hide();

		$('#headerInput, #subHeaderInput').show();
		$('#headerInput').focus();		
	},

	setInputVal: function() {
		var headerText = $('#header').text();
		var subHeaderText = $('#subHeader').text();

		$('#headerInput').val(headerText);
		$('#subHeaderInput').val(subHeaderText);
	},

	showArrow: function() {
		var timeOut = window.setTimeout(Story.showArrow, 1000);
		var $coverImg = $('body').find('#coverPageContainer');
		var headerText = $('#header').text();
		var subHeaderText = $('#subHeader').text();
		var headerInput = $('#headerInput').val();
		var subHeaderInput = $('#subHeaderInput').val();

		var $arrowDiv = $('#arrowContainer');

		$arrowDiv.hide();

		console.log(headerText);
		console.log(headerInput);

		console.log(subHeaderText);
		console.log(subHeaderInput);

		console.log($coverImg.css('background-image'));
		
		if ($coverImg.css('background-image') != 'none' && headerInput != headerText && subHeaderInput != subHeaderText) {
			$arrowDiv.show();
			clearTimeout(timeOut);
			// $(document).on('swipeup', 'body', Story.swipeUp);
			$('#learningStoryPage').show();
			$('#coverPageContainer').css('position', 'absolute');
			
		} else {
			$arrowDiv.hide();
		}
	},

	openAddElement: function() {
		$('#addElementContainer').css('display', 'block');
	},

	closeAddElement: function() {
		$('#addElementContainer').css('display', 'none');
	},

	addPhotoElement: function() {

		window.divForBackground = '.singleImage';

		$('#addElementContainer').css('display', 'none');

		$('#learningStoryPage').css('height', '100%');

		$('html, body').animate({
	        scrollTop: $("#learningStoryPage").offset().top
	    }, 1000);

	    $('#addImageSidebar').addClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').addClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').addClass('openRight');
		}

		if($('#addImageSidebar').hasClass('openRight')) {
			$('#learningStoryPage').css('padding', '20px 20px');
			$('.singleImage').css('width', '56%');
		}

		$('.singleImage').css('display', 'block');
	},

	closePhotoSidebar: function() {
		$('#addImageSidebar').removeClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').removeClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').removeClass('openRight');
		}
	}

}

$(document).ready(function(){
	Story.init();
});