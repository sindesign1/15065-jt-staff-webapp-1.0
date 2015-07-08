var Story = {

	init: function() {
		Story.events();
		Story.setInputVal();
		Story.showArrow();
	},

	events: function() {
		$('body').on('click touch', '#header', Story.changeHeaderText);
		$('body').on('click touch', '#addElementBtn', Story.openAddElement);
		$('body').on('click touch', '#nevermindBtn', Story.closeAddElement);
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
	}

}

$(document).ready(function(){
	Story.init();
});