var Story = {

	init: function() {
		Story.events();
		Story.setInputVal();
		Story.showArrow();
		Story.showAddBtn();
		Story.findScreenHeight();
	},

	events: function() {
		$('body').on('click touch', '#header', Story.changeHeaderText);
		$('body').on('click touch', '.addElementBtn', Story.openAddElement);
		$('body').on('click touch', '#nevermindBtn', Story.closeAddElement);
		$('body').on('click touch', '#addPhotoElement', Story.addPhotoElement);
		$(document).on('click touch','#learningStoryPage', Story.closePhotoSidebar);
		$('body').on('click touch', '#addTextElement', Story.addTextElement);

	},

	findScreenHeight: function() {
		var height = $(window).height();

		$('#coverPageContainer').height(height-160);
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
			// $('#coverPageContainer').css('position', 'absolute');
			
		} else {
			$arrowDiv.hide();
		}

	},

	showAddBtn: function() {
		$('#learningStoryPage').append('<div class="addBtnContainer"><button id="addElementBtn" class="addElementBtn">?</button></div>');
	},

	openAddElement: function() {
		$('#addElementContainer').fadeIn('slow');
		
	},

	closeAddElement: function() {
		$('#addElementContainer').fadeOut('slow');
		// var height = $(document).height();
		
	},

	addPhotoElement: function() {

		var $storyPage = $('#learningStoryPage');

		$('div.singleImage').removeClass('singleImage-active');

		$storyPage.append('<div class="singleImage singleImage-active"></div>');

		$storyPage.append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');


		window.divForBackground = '.singleImage-active';

		$('#addElementContainer').css('display', 'none');

		$storyPage.css('height', '100%');
		var $image = $storyPage.find('div.singleImage.singleImage-active');
		console.log($image);

		$('html, body').animate({
	        scrollTop: $image.offset().top + 500
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
		$('#learningStoryPage').css('height', 'auto');
	},

	addTextElement: function() {
		var $storyPage = $('#learningStoryPage');

		$storyPage.append('<div contentEditable="true" class="storyInput"></div>');

		$('.storyInput').focus();

		$storyPage.append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');


		$('#addElementContainer').css('display', 'none');
		$('#learningStoryPage').css('height', 'auto');
	},

	closePhotoSidebar: function() {
		$('#addImageSidebar').removeClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').removeClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').removeClass('openRight');
			$('#learningStoryPage').css('padding', '20px 100px 100px 100px');
			$('.singleImage').css('width', '100%');
			$('.singleImage').css('border', 'none');
			//$('#learningStoryPage').append('<div class="addBtnContainer"><button id="addElementBtn" class="addElementBtn">?</button></div>')
		}


	}

}

$(document).ready(function(){
	Story.init();
});