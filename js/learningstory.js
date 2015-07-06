var Story = {

	init: function() {
		Story.events();
	},

	events: function() {
		$('body').on('click touch', '#header', Story.changeHeaderText);
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

	// saveHeaderText: function() {
	// 	var headerInput = $('#headerInput').val();
	// 	// var subHeaderInput = $('#subHeaderInput').val();

	// 	headerText.text(headerInput);

	// 	$('#headerInput').hide();
	// 	$('#header').show();
	// 	// subHeaderText.text(subHeaderInput);
	// }
}

$(document).ready(function(){
	Story.init();
});