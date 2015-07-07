var Story = {

	init: function() {
		Story.events();
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

	

}

$(document).ready(function(){
	Story.init();
});